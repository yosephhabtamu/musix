import multer from "multer";
import path from "path";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: any, destination: string) => void
  ) => {
    cb(null, "public/");
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: any, filename: string) => void
  ) => {
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext);
    cb(null, `${basename}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

export default upload;
