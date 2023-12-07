import { createUser, deleteUser, getUser } from '../controllers/user-controller';

import express from 'express';
const router = express.Router();

router.route("/").get(getUser).delete(deleteUser).post(createUser);

export default router