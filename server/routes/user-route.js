import { createUser, deleteUser, getUser } from '../controllers/user-controller.js';
import isAuthenticated from '../middleware/auth.js';

import express from 'express';
const router = express.Router();

router.route("/").delete(isAuthenticated, deleteUser).post(createUser);
router.route("/:person").get(isAuthenticated, getUser)

export default router