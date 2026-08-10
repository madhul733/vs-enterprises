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

    if (!fullName || !email || !phone || !position || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }


    // ======================================
    // CHECK RESUME
    // ======================================

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload your resume.",
      });
    }


    console.log(
      "Sending career application to:",
      process.env.QUOTE_RECEIVER
    );

    console.log(
      "Resume:",
      req.file.originalname
    );


    // ======================================
    // SEND EMAIL
    // ======================================

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Career Application - ${fullName}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
        ">

          <!-- HEADER -->

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


          <!-- CONTENT -->

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
              Resume attached with this email:
              <strong>${req.file.originalname}</strong>
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
      `,

      // ====================================
      // RESUME ATTACHMENT
      // ====================================

      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ],
    });


    // ======================================
    // SUCCESS
    // ======================================

    res.status(201).json({
      success: true,
      message:
        "Your application has been submitted successfully.",
    });


  } catch (error) {

    console.error("Career error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
  createCareer,
};