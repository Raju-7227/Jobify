import express from "express";
const router = express.Router();

import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from '../middleware/auth.js'
router.route("/register").post(register);
// router.route("/register1").post(register1);
router.route("/login").post(login);
router.route("/updateUser").patch( authenticateUser, updateUser);

export default router;
