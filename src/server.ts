import express from "express";
import mongoose from "mongoose";
import MusicRouter from './routes/musicRouter';
import { config } from "dotenv";
import validateRequest from "./middlewares/schemaValidator";
import path from "path";

config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/music", validateRequest,MusicRouter);

const mongoUri = process.env.DATABASE_URI;
if(!mongoUri) throw new Error("provide database connection uri");

mongoose
  .connect(mongoUri, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
