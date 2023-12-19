import { createUser, deleteUser, getUser, getEditUser, updateUser } from '../controllers/user-controller.js';
import isAuthenticated from '../middleware/auth.js';

import express from 'express';
const router = express.Router();

router.route("/").delete(isAuthenticated, deleteUser).post(createUser).get(isAuthenticated, getEditUser)
router.route("/update").post(isAuthenticated, updateUser)
router.route("/:person").get(isAuthenticated, getUser)

export default router