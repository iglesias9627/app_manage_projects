import express, { Express, Request, Response } from "express";
import { UserController } from "../controllers/UserController";

const router = express.Router();
router.get('/', UserController.getAllUsers);
// router.post('/', createUser);

module.exports = router;