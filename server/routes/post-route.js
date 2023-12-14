import express from 'express';
import { getPosts, makePosts } from '../controllers/posts-controller.js';

const router = express.Router();

router.route("/").get(getPosts).post(makePosts)
// .put().delete()

export default router