import { Router } from "express";

import { getUsers, createUser } from "../controllers/user.controller.js";

const router: Router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;