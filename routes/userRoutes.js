const express = require("express");
const { getAllUsers, getUserById, registerUser, loginUser } = require("../controllers/userController");

// Router
const userRouter = express.Router();

/**
 * GET /api/user/
 */
userRouter.get("/", getAllUsers);

/**
 * GET /api/user/:id
 */
userRouter.get("/:id", getUserById);

/**
 * GET /api/user/
 */
userRouter.post("/register", registerUser);

/**
 * GET /api/user/
 */
userRouter.post("/login", loginUser);


module.exports = userRouter;
