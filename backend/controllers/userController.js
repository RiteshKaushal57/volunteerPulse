import userModel from "../modals/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "Missing details" });
    }

    const existingUser = await userModel.findOne({
      email: email.toLowerCase(),
    });
    if (existingUser)
      return res.status(400).json({ message: "This email already exists" });

    const hashPassword = await bcrypt.hash(password, 8);

    const user = await userModel.create({
      email: email.toLowerCase(),
      password: hashPassword,
      name,
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Missing details" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ message: "User does not exist" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(400).json({ message: "Password is incorrect" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({ message: "User login successfully" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
