import express from 'express';
import { getPosts, makePosts, getUserPosts, updatePosts, deletePosts } from '../controllers/posts-controller.js';

const router = express.Router();

router.post("/", makePosts)
router.route("/delete/:id").delete(deletePosts)
router.route("/update/:id").post(updatePosts)
router.route("/:type/:num").get(getPosts)
router.get("/userPosts", getUserPosts)

export default router