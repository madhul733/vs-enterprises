const nodemailer = require("nodemailer");

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
  email,
  phone,
  subject,
  message,
}) => {

  const phoneNumberId =
    process.env.WHATSAPP_PHONE_NUMBER_ID;

  const accessToken =
    process.env.WHATSAPP_ACCESS_TOKEN;

  const receiverNumber =
    process.env.WHATSAPP_RECEIVER_NUMBER;


  // ======================================
  // CHECK WHATSAPP CONFIG
  // ======================================

  if (
    !phoneNumberId ||
    !accessToken ||
    !receiverNumber
  ) {
    throw new Error(
      "WhatsApp configuration is missing from .env"
    );
  }


  // ======================================
  // WHATSAPP MESSAGE
  // ======================================

  const whatsappMessage = `🔔 New Contact Enquiry - VS Enterprises

Name: ${fullName}
Email: ${email}
Phone: ${phone || "Not provided"}

Subject: ${subject}

Message:
${message}`;


  // ======================================
  // SEND TO WHATSAPP API
  // ======================================

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
          body: whatsappMessage,
        },
      }),
    }
  );


  const data = await response.json();


  // ======================================
  // CHECK API RESPONSE
  // ======================================

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
    "Contact WhatsApp message sent successfully:",
    data
  );

  return data;
};


// ==========================================
// CREATE CONTACT
// ==========================================

const createContact = async (req, res) => {

  try {

    const {
      fullName,
      email,
      phone,
      subject,
      message,
    } = req.body;


    // ======================================
    // VALIDATION
    // ======================================

    if (
      !fullName ||
      !email ||
      !subject ||
      !message
    ) {

      return res.status(400).json({
        success: false,
        message:
          "Please fill all required fields.",
      });

    }


    // ======================================
    // SEND EMAIL
    // ======================================

    console.log(
      "Sending contact email to:",
      process.env.QUOTE_RECEIVER
    );


    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject:
        `New Contact Enquiry - ${subject}`,

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
              New Contact Enquiry
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
              Contact Details
            </h3>

            <p>
              <strong>Name:</strong>
              ${fullName}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || "Not provided"}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject}
            </p>


            <hr style="
              border: 0;
              border-top: 1px solid #e5e7eb;
              margin: 25px 0;
            " />


            <h3 style="color: #07192E;">
              Message
            </h3>

            <div style="
              background: #f8fafc;
              padding: 15px;
              border: 1px solid #e5e7eb;
              line-height: 1.6;
              white-space: pre-line;
            ">
              ${message}
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
      "Sending contact WhatsApp notification..."
    );


    await sendWhatsAppMessage({
      fullName,
      email,
      phone,
      subject,
      message,
    });


    // ======================================
    // SUCCESS
    // ======================================

    res.status(201).json({

      success: true,

      message:
        "Contact message sent successfully. Email and WhatsApp notifications sent.",

    });


  } catch (error) {

    console.error(
      "Contact error:",
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
  createContact,
};