import express from 'express';
import { createUser, deleteUser, getUser } from '../controllers/user-controller';

const router = express.Router();

router.route("/").get(getUser).delete(deleteUser).post(createUser);

export default router