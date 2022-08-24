import express from "express";
import { getPost, createPost, myApp } from "../controllers/posts.js";
const router = express.Router();
router.get("/", myApp);
router.get("/posts", getPost);
router.post("/posts", createPost);

export default router;
