import { Request, Response } from "express";
import Music from "../models/music.model";

export const createMusic = async (req: Request, res: Response) => {
  try {
    const { title, album, artist, genre } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No music uploaded" });
    }

    const music = new Music({
      title,
      album,
      artist,
      genre,
      path: req.file.filename,
    });
    const savedMusic = await music.save();
    res.status(201).json(savedMusic);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getMusic = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    const filter = q ? { title: { $regex: q.toString(), $options: "i" } } : {};
    const music = await Music.find(filter);
    res.json(music);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getMusicById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const music = await Music.findById(id);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.json(music);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateMusic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const music = await Music.findByIdAndUpdate(id, updates, { new: true });
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.json(music);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteMusic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const music = await Music.findByIdAndDelete(id);
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.status(204).send();
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
