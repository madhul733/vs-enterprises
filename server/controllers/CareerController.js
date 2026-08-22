// ==========================================
// CAREER CONTROLLER - VS ENTERPRISES
// Email: Resend API
// Resume: Attachment
// ==========================================


// ==========================================
// SEND CAREER EMAIL USING RESEND API
// ==========================================

const sendCareerEmail = async ({
  fullName,
  email,
  phone,
  position,
  message,
  resume,
}) => {

  const apiKey = process.env.RESEND_API_KEY;

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
          New Career Application
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
          Applicant Details
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
          ${phone}
        </p>

        <p>
          <strong>Position Applied For:</strong>
          ${position}
        </p>


        <hr style="
          border: 0;
          border-top: 1px solid #e5e7eb;
          margin: 25px 0;
        " />


        <h3 style="color: #07192E;">
          Applicant Message
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
          Resume attached:
          <strong>${resume.originalname}</strong>
        </p>


        <p style="
          color: #64748b;
          font-size: 13px;
        ">
          This application was submitted through the
          VS Enterprises website.
        </p>

      </div>

    </div>
  `;


  // ======================================
  // SEND EMAIL
  // ======================================

  console.log(
    "Sending career application email to:",
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
          Authorization:
            `Bearer ${apiKey}`,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({

          from: fromEmail,

          to: [receiver],

          reply_to: email,

          subject:
            `New Career Application - ${fullName}`,

          html: html,

          attachments: [
            {
              filename:
                resume.originalname,

              content:
                resume.buffer.toString("base64"),
            },
          ],

        }),

        signal:
          controller.signal,
      }
    );


    const data =
      await response.json();


    // ====================================
    // CHECK RESEND RESPONSE
    // ====================================

    if (!response.ok) {

      console.error(
        "Resend career email error:",
        data
      );

      throw new Error(
        data?.message ||
        data?.error ||
        "Career email could not be sent."
      );

    }


    console.log(
      "Career email sent successfully:",
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
// CREATE CAREER APPLICATION
// ==========================================

const createCareer = async (req, res) => {

  try {

    const {
      fullName,
      email,
      phone,
      position,
      message,
    } = req.body;


    // ======================================
    // VALIDATION
    // ======================================

    if (
      !fullName ||
      !email ||
      !phone ||
      !position ||
      !message
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Please fill all required fields.",

      });

    }


    // ======================================
    // CHECK RESUME
    // ======================================

    if (!req.file) {

      return res.status(400).json({

        success: false,

        message:
          "Please upload your resume.",

      });

    }


    console.log(
      "New career application:",
      fullName
    );

    console.log(
      "Resume:",
      req.file.originalname
    );


    // ======================================
    // SEND EMAIL
    // ======================================

    try {

      await sendCareerEmail({

        fullName,
        email,
        phone,
        position,
        message,

        resume: req.file,

      });

    } catch (emailError) {

      console.error(
        "Career email failed:",
        emailError.message
      );

      return res.status(500).json({

        success: false,

        message:
          "Your application could not be submitted right now. Please try again.",

        error:
          emailError.message,

      });

    }


    // ======================================
    // SUCCESS
    // ======================================

    return res.status(201).json({

      success: true,

      message:
        "Your application has been submitted successfully.",

    });


  } catch (error) {

    console.error(
      "Career error:",
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
  createCareer,
};