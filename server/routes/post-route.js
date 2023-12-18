import express from 'express';
import { getPosts, makePosts, getUserPosts } from '../controllers/posts-controller.js';

const router = express.Router();

router.post("/", makePosts)
// .put().delete()

router.route("/:type/:num").get(getPosts)
router.get("/userPosts/:user", getUserPosts)

export default router