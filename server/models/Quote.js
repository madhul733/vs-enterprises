const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    companyName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    product: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: String,
      trim: true,
    },

    requiredBy: {
      type: String,
      trim: true,
    },

    requirement: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", quoteSchema);