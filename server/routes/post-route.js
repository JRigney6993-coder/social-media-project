import express from 'express';
import { getPosts, makePosts } from '../controllers/posts-controller.js';

const router = express.Router();

router.post("/", makePosts)
// .put().delete()

router.get("/:type", getPosts)

export default router