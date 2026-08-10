const Quote = require("../models/Quote");
const nodemailer = require("nodemailer");

// ==========================================
// EMAIL CONFIG
// ==========================================

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
console.log("QUOTE_RECEIVER:", process.env.QUOTE_RECEIVER);

// ==========================================
// WHATSAPP CONFIG
// ==========================================

console.log(
  "WHATSAPP_PHONE_NUMBER_ID:",
  process.env.WHATSAPP_PHONE_NUMBER_ID
);

console.log(
  "WHATSAPP_ACCESS_TOKEN exists:",
  !!process.env.WHATSAPP_ACCESS_TOKEN
);


// ==========================================
// YAHOO SMTP
// ==========================================

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: true,
  },
});


// ==========================================
// SEND WHATSAPP MESSAGE
// ==========================================

const sendWhatsAppMessage = async ({
  fullName,
  companyName,
  email,
  phone,
  product,
  quantity,
  requiredBy,
  requirement,
}) => {

  const phoneNumberId =
    process.env.WHATSAPP_PHONE_NUMBER_ID;

  const accessToken =
    process.env.WHATSAPP_ACCESS_TOKEN;

  const receiverNumber =
    process.env.WHATSAPP_RECEIVER_NUMBER;


  // Check configuration

  if (
    !phoneNumberId ||
    !accessToken ||
    !receiverNumber
  ) {
    throw new Error(
      "WhatsApp configuration is missing from .env"
    );
  }


  const message = `🔔 New Quote Request - VS Enterprises

Name: ${fullName}
Company: ${companyName || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}

Product: ${product}
Quantity: ${quantity || "Not provided"}
Required By: ${requiredBy || "Not specified"}

Requirement:
${requirement}`;


  const response = await fetch(
    `https://graph.facebook.com/v23.0/${phoneNumberId}/messages`,
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        messaging_product: "whatsapp",

        to: receiverNumber,

        type: "text",

        text: {
          body: message,
        },
      }),
    }
  );


  const data = await response.json();


  if (!response.ok) {
    console.error(
      "WhatsApp API error:",
      data
    );

    throw new Error(
      data?.error?.message ||
        "WhatsApp message failed."
    );
  }


  console.log(
    "WhatsApp message sent successfully:",
    data
  );


  return data;
};


// ==========================================
// CREATE QUOTE
// ==========================================

const createQuote = async (req, res) => {
  try {

    const {
      fullName,
      companyName,
      email,
      phone,
      product,
      quantity,
      requiredBy,
      requirement,
    } = req.body;


    // ======================================
    // VALIDATION
    // ======================================

    if (
      !fullName ||
      !email ||
      !product ||
      !requirement
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill all required fields.",
      });
    }


    // ======================================
    // SAVE TO MONGODB
    // ======================================

    const quote = await Quote.create({
      fullName,
      companyName,
      email,
      phone,
      product,
      quantity,
      requiredBy,
      requirement,
    });


    // ======================================
    // SEND EMAIL
    // ======================================

    console.log(
      "Sending quote email to:",
      process.env.QUOTE_RECEIVER
    );


    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject:
        `New Quote Request - ${product}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
        ">

          <div style="
            background: #07192E;
            color: white;
            padding: 25px;
          ">

            <h2 style="margin: 0;">
              New Quote Request
            </h2>

            <p style="
              margin: 8px 0 0;
              color: #67e8f9;
            ">
              VS Enterprises Website
            </p>

          </div>


          <div style="
            padding: 25px;
            border: 1px solid #e5e7eb;
          ">

            <h3 style="color: #07192E;">
              Customer Details
            </h3>

            <p>
              <strong>Name:</strong>
              ${fullName}
            </p>

            <p>
              <strong>Company:</strong>
              ${companyName || "Not provided"}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || "Not provided"}
            </p>


            <hr style="
              border: 0;
              border-top: 1px solid #e5e7eb;
              margin: 25px 0;
            " />


            <h3 style="color: #07192E;">
              Requirement Details
            </h3>

            <p>
              <strong>Product:</strong>
              ${product}
            </p>

            <p>
              <strong>Quantity:</strong>
              ${quantity || "Not provided"}
            </p>

            <p>
              <strong>Required By:</strong>
              ${requiredBy || "Not specified"}
            </p>

            <p>
              <strong>Requirement:</strong>
            </p>

            <div style="
              background: #f8fafc;
              padding: 15px;
              border: 1px solid #e5e7eb;
            ">
              ${requirement}
            </div>


            <p style="
              margin-top: 25px;
              color: #64748b;
              font-size: 13px;
            ">
              This enquiry was submitted through the
              VS Enterprises website.
            </p>

          </div>

        </div>
      `,
    });


    // ======================================
    // SEND WHATSAPP
    // ======================================

    console.log(
      "Sending quote WhatsApp notification..."
    );


    await sendWhatsAppMessage({
      fullName,
      companyName,
      email,
      phone,
      product,
      quantity,
      requiredBy,
      requirement,
    });


    // ======================================
    // SUCCESS
    // ======================================

    res.status(201).json({

      success: true,

      message:
        "Quote request submitted successfully. Email and WhatsApp notifications sent.",

      quote,
    });


  } catch (error) {

    console.error(
      "Quote error:",
      error
    );


    res.status(500).json({

      success: false,

      message:
        "Something went wrong.",

      error:
        error.message,
    });
  }
};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
  createQuote,
};