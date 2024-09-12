import multer from "multer";
import path from "path";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: any, destination: string) => void
  ) => {
    cb(null, "src/public/uploads");
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

  function checkFileType(file: Express.Multer.File, cb: any) {
    const filetypes = /mp3|wav|ogg|mpeg/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Audio Only!");
    }
  }

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

export default upload;
