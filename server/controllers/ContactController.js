// ==========================================
// CONTACT CONTROLLER - VS ENTERPRISES
// Email: Resend API
// WhatsApp: Meta WhatsApp Cloud API
// ==========================================


// ==========================================
// SEND EMAIL USING RESEND API
// ==========================================

const sendEmail = async ({
  fullName,
  email,
  phone,
  subject,
  message,
}) => {

  const apiKey = process.env.RESEND_API_KEY;

  const receiver =
    process.env.QUOTE_RECEIVER || "saurabh_sharma825@yahoo.com";

  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";


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
  `;


  // ======================================
  // SEND EMAIL
  // ======================================

  console.log(
    "Sending contact email to:",
    receiver
  );


  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);


  try {

    const response = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          from: fromEmail,

          to: [receiver],

          reply_to: email,

          subject:
            `New Contact Enquiry - ${subject}`,

          html: html,

        }),

        signal: controller.signal,
      }
    );


    const data = await response.json();


    if (!response.ok) {

      console.error(
        "Resend API error:",
        data
      );

      throw new Error(
        data?.message ||
        data?.error ||
        "Email could not be sent."
      );
    }


    console.log(
      "Contact email sent successfully:",
      data
    );


    return data;

  } catch (error) {

    if (error.name === "AbortError") {

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
      "WhatsApp configuration is missing from environment variables."
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
  // WHATSAPP API REQUEST
  // ======================================

  console.log(
    "Sending contact WhatsApp notification..."
  );


  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 10000);


  try {

    const response = await fetch(
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
              whatsappMessage,
          },

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

    let emailResult = null;

    try {

      emailResult =
        await sendEmail({

          fullName,
          email,
          phone,
          subject,
          message,

        });

    } catch (emailError) {

      console.error(
        "Contact email failed:",
        emailError.message
      );

      return res.status(500).json({

        success: false,

        message:
          "Your message could not be sent right now. Please try again.",

        error:
          emailError.message,

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
          email,
          phone,
          subject,
          message,

        });

    } catch (whatsappError) {

      console.error(
        "WhatsApp notification failed:",
        whatsappError.message
      );

      // IMPORTANT:
      // Email already succeeded.
      // Do not make the customer form hang/fail
      // only because WhatsApp notification failed.

    }


    // ======================================
    // SUCCESS
    // ======================================

    return res.status(201).json({

      success: true,

      message:
        "Your message has been sent successfully. We will get back to you soon.",

      emailSent:
        !!emailResult,

      whatsappSent:
        !!whatsappResult,

    });


  } catch (error) {

    console.error(
      "Contact error:",
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
  createContact,
};