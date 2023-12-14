import { createUser, deleteUser, getUser } from '../controllers/user-controller.js';
import isAuthenticated from '../middleware/auth.js';

import express from 'express';
const router = express.Router();

router.route("/").get(isAuthenticated, getUser).delete(isAuthenticated, deleteUser).post(createUser);

export default router