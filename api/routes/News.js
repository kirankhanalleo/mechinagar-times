import express from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
  getNews,
  updateNews,
} from "../controllers/newsController.js";
const router = express.Router();

router.post("/create", createNews);
router.put("/update/:id", updateNews);
router.delete("/delete/:id", deleteNews);
router.get("/find/:id", getNews);
router.get("/", getAllNews);

export default router;
