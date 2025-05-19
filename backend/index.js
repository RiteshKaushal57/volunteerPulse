import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import passport from "./config/passport.js";

dotenv.config();
const volunteerPulse = express();
volunteerPulse.use(
  session({
    secret: process.env.SESSION_SECRET || "your-session-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // set to true if using HTTPS
  })
);

volunteerPulse.use(express.json());
volunteerPulse.use(cookieParser());
volunteerPulse.use(passport.initialize());
volunteerPulse.use(passport.session());

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("MongoDB connected");

    volunteerPulse.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
mongoDB();

volunteerPulse.use("/user", userRouter);
volunteerPulse.use("/auth", authRouter);

volunteerPulse.get("/", (req, res) => {
  res.send("Hello from Volunteer Pulse");
});
