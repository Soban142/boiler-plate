import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyJWT.js";

const userRouter = express.Router();

//update user
userRouter.put("/:id", verifyToken, updateUser);

//delete user
userRouter.delete("/:id", verifyToken, deleteUser);

//get a user
userRouter.get("/find/:id", getUser);

//subscribe a user
// userRouter.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
// userRouter.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
// userRouter.put("/like/:videoId", verifyToken, like);

//dislike a video
// userRouter.put("/dislike/:videoId", verifyToken, dislike);

export default userRouter;
