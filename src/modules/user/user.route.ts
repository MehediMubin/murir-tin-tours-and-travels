import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/create-user", UserController.createUser);

router.get("/", UserController.getAllUsers);

router.get("/:id", UserController.getSingleUser);

router.patch("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

export const userRoutes = router;
