import { Router } from "express";
import {
  createMusic,
  getMusic,
  getMusicById,
  updateMusic,
  deleteMusic,
} from "../controllers/musicController";
import upload from "../middlewares/multerConfig";

const router = Router();

router.post("/", upload.single('file'), createMusic);
router.get("/", getMusic);
router.get("/:id", getMusicById);
router.put("/:id", updateMusic);
router.delete("/:id", deleteMusic); 

export default router;
