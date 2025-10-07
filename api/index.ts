import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get("/", (_req, res) => {
  res.send("API is running!");
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
  });
