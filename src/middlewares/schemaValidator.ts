import { NextFunction } from "express";
import { musicSchema } from "../models/music.validationSchema";
import { Request, Response } from 'express';

const validateRequest = (req:Request, res:Response, next:NextFunction)=>{

    const parsedData = musicSchema.parse(req.body);

    next(parsedData);
}

export default validateRequest;