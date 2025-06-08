import { Router } from "express";
import { signIn, signUp } from "../controller/auth.controller";
import { signOut } from "../controller/user.controller";

const authRouter = Router()

authRouter.post("/sign-up", signUp)

authRouter.post("/sign-in", signIn)

authRouter.post("/sign-out", signOut)

export default authRouter