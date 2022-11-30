import express from "express";
import {
  getPost,
  createPost,
  myApp,
  updatePost,
  deletePost,
  getOnePost,
} from "../controllers/posts.js";
const router = express.Router();
router.get("/", myApp);
router.get("/posts", getPost);
router.get("/posts/:id", getOnePost);
router.post("/posts", createPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;
