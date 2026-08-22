const Quote = require("../models/Quote");


// ==========================================
// EMAIL CONFIG
// ==========================================

console.log(
  "RESEND_API_KEY exists:",
  !!process.env.RESEND_API_KEY
);

console.log(
  "RESEND_FROM_EMAIL:",
  process.env.RESEND_FROM_EMAIL
);

console.log(
  "QUOTE_RECEIVER:",
  process.env.QUOTE_RECEIVER
);


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
// SEND QUOTE EMAIL USING RESEND API
// ==========================================

const sendQuoteEmail = async ({
  fullName,
  companyName,
  email,
  phone,
  product,
  quantity,
  requiredBy,
  requirement,
}) => {

  const apiKey =
    process.env.RESEND_API_KEY;

  const receiver =
    process.env.QUOTE_RECEIVER ||
    "saurabh_sharma825@yahoo.com";

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ||
    "onboarding@resend.dev";


  // ======================================
  // CHECK RESEND CONFIG
  // ======================================

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is missing from environment variables."
    );
  }


  // ======================================
  // EMAIL HTML
  // ======================================

  const html = `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 650px;
      margin: auto;
      background: #ffffff;
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
          line-height: 1.6;
          white-space: pre-line;
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
  `;


  // ======================================
  // SEND EMAIL
  // ======================================

  console.log(
    "Sending quote email to:",
    receiver
  );


  const controller =
    new AbortController();

  const timeout =
    setTimeout(() => {
      controller.abort();
    }, 15000);


  try {

    const response =
      await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${apiKey}`,

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            from:
              fromEmail,

            to:
              [receiver],

            reply_to:
              email,

            subject:
              `New Quote Request - ${product}`,

            html:
              html,

          }),

          signal:
            controller.signal,

        }
      );


    const data =
      await response.json();


    // ====================================
    // CHECK RESPONSE
    // ====================================

    if (!response.ok) {

      console.error(
        "Resend quote email error:",
        data
      );

      throw new Error(
        data?.message ||
        data?.error ||
        "Quote email could not be sent."
      );

    }


    console.log(
      "Quote email sent successfully:",
      data
    );


    return data;


  } catch (error) {

    if (
      error.name === "AbortError"
    ) {

      throw new Error(
        "Email service timed out. Please try again."
      );

    }

    throw error;

  } finally {

    clearTimeout(timeout);

  }

};


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


  // ======================================
  // CHECK CONFIG
  // ======================================

  if (
    !phoneNumberId ||
    !accessToken ||
    !receiverNumber
  ) {

    throw new Error(
      "WhatsApp configuration is missing from environment variables."
    );

  }


  // ======================================
  // WHATSAPP MESSAGE
  // ======================================

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


  // ======================================
  // SEND WHATSAPP
  // ======================================

  console.log(
    "Sending quote WhatsApp notification..."
  );


  const controller =
    new AbortController();

  const timeout =
    setTimeout(() => {
      controller.abort();
    }, 10000);


  try {

    const response =
      await fetch(
        `https://graph.facebook.com/v23.0/${phoneNumberId}/messages`,
        {

          method: "POST",

          headers: {

            Authorization:
              `Bearer ${accessToken}`,

            "Content-Type":
              "application/json",

          },

          body: JSON.stringify({

            messaging_product:
              "whatsapp",

            to:
              receiverNumber,

            type:
              "text",

            text: {
              body:
                message,
            },

          }),

          signal:
            controller.signal,

        }
      );


    const data =
      await response.json();


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
      "Quote WhatsApp message sent successfully:",
      data
    );


    return data;


  } catch (error) {

    if (
      error.name === "AbortError"
    ) {

      throw new Error(
        "WhatsApp service timed out."
      );

    }

    throw error;

  } finally {

    clearTimeout(timeout);

  }

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

    const quote =
      await Quote.create({

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

    let emailResult = null;


    try {

      emailResult =
        await sendQuoteEmail({

          fullName,
          companyName,
          email,
          phone,
          product,
          quantity,
          requiredBy,
          requirement,

        });

    } catch (emailError) {

      console.error(
        "Quote email failed:",
        emailError.message
      );

      return res.status(500).json({

        success: false,

        message:
          "Your quote request was saved, but the email notification could not be sent. Please try again.",

        error:
          emailError.message,

        quote,

      });

    }


    // ======================================
    // SEND WHATSAPP
    // ======================================

    let whatsappResult = null;


    try {

      whatsappResult =
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

    } catch (whatsappError) {

      console.error(
        "Quote WhatsApp notification failed:",
        whatsappError.message
      );

      // Email already succeeded.
      // WhatsApp failure should NOT
      // make the form hang/fail.

    }


    // ======================================
    // SUCCESS
    // ======================================

    return res.status(201).json({

      success: true,

      message:
        "Quote request submitted successfully. We will get back to you soon.",

      emailSent:
        !!emailResult,

      whatsappSent:
        !!whatsappResult,

      quote,

    });


  } catch (error) {

    console.error(
      "Quote error:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Something went wrong. Please try again.",

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