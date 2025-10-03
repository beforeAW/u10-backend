import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get("/", (_req, res) => {
  res.send("API is running!");
});

// MongoDB connection
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start server after DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
