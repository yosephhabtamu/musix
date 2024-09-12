import express from "express";
import mongoose from "mongoose";
import MusicRouter from './routes/musicRouter';
import { config } from "dotenv";
import validateRequest from "./middlewares/schemaValidator";
import path from "path";
import cors from "cors";

config();

const app = express();
const port = process.env.PORT || 3000;

 const corsOptions = {
   origin: "https://localhost:3000", 
   optionsSuccessStatus: 200,
 };


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/public", express.static(path.join(__dirname, "public")));
app.use("/api/music",MusicRouter);

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

