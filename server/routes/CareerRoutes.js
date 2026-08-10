const express = require("express");
const multer = require("multer");

const {
  createCareer,
} = require("../controllers/CareerController");

const router = express.Router();


// ==========================================
// MULTER CONFIGURATION
// ==========================================

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only PDF, DOC and DOCX files are allowed."
        )
      );
    }
  },
});


// ==========================================
// CAREER ROUTE
// ==========================================

router.post(
  "/",
  upload.single("resume"),
  createCareer
);


module.exports = router;