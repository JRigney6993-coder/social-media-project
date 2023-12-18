import express from 'express';
import { getPosts, makePosts, getUserPosts } from '../controllers/posts-controller.js';

const router = express.Router();

router.post("/", makePosts)
// .put().delete()

router.get("/:type", getPosts)
router.get("/user/:user", getUserPosts)

export default router