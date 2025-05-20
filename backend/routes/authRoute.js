import express from 'express'
import passport from '../config/passport.js'
import { googleAuthCallback } from '../controllers/authController.js'

const authRouter = express.Router()

// 1. Start Google OAuth flow
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// 2. Handle Google OAuth callback
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: true }),
  googleAuthCallback
);

export default authRouter