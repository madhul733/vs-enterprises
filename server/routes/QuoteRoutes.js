const express = require("express");

const {
  createQuote,
} = require("../controllers/QuoteController");

const router = express.Router();

router.post("/", createQuote);

module.exports = router;