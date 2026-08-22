require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const QuoteRoutes = require("./routes/QuoteRoutes");
const ContactRoutes = require("./routes/ContactRoutes");
const CareerRoutes = require("./routes/CareerRoutes");

const app = express();

const PORT = process.env.PORT || 5001;


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// ===============================
// QUOTE ROUTES
// ===============================

app.use("/api/quotes", QuoteRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/career", CareerRoutes);

// ===============================
// MONGODB CONNECTION
// ===============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
  });


// ===============================
// TEST ROUTE
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "VS Enterprises Backend is running 🚀",
  });
});


// ===============================
// API TEST ROUTE
// ===============================

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is working successfully",
  });
});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});