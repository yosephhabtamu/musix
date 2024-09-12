import { NextFunction, Request, Response } from "express";
import { musicSchema } from "../models/music.validationSchema"; 
import { ZodError } from "zod"; 

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  try {
    musicSchema.parse(req.body);
    next(); 
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        success: false,
        errors: error.errors.map((err) => ({
          path: err.path,
          message: err.message,
        })),
      });
    } else {
      // Handle other types of errors
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
};

export default validateRequest;
