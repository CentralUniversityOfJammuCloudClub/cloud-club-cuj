require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());              // ✅ FIX CORS
app.use(express.json());

// Routes
const eventRoutes = require("./routes/eventRoutes");
const memberRoutes = require("./routes/memberRoutes");

app.use("/events", eventRoutes);
app.use("/members", memberRoutes);

// Debug Mongo URI
console.log("Loaded URI:", process.env.MONGO_URI);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    tls: true,
    tlsAllowInvalidCertificates: false,
  })
  .then(() => console.log("MongoDB connected successfully ✅"))
  .catch((err) => console.error("MongoDB connection failed ❌", err));

mongoose.connection.on("connected", () =>
  console.log("Mongoose event: connected ✅")
);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

