import userModel from "../modals/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
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

    // Set JWT cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
    });

    // Store user in session
    req.session.user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      provider: "local",
      photo: user.photo || null,
    };

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Missing details" });

    const user = await userModel.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Password is incorrect" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set JWT cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
    });

    // Store user in session for persistence
    req.session.user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      provider: "local",
      photo: user.photo || null,
    };

    return res.status(200).json({ message: "User login successfully" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// AUTH CHECK (ME)
export const me = async (req, res) => {
  // For Google/Passport login, req.user will be set by Passport
  // For local/email login, req.session.user will be set
  const user = req.user || req.session.user;
  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  // Return minimal user info
  const { _id, name, email, provider, photo } = user;
  res.json({ _id, name, email, provider, photo });
};

// LOGOUT
export const logout = async (req, res) => {
  try {
    // Destroy express-session session (if used)
    if (req.session) {
      req.session.destroy(() => {
        res.clearCookie('connect.sid', { path: '/' });
        res.clearCookie('token', {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          path: '/',
        });
        return res.json({ success: true, message: "Logged out" });
      });
    } else {
      // Just clear JWT cookie if not using sessions
      res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        path: '/',
      });
      return res.json({ success: true, message: "Logged out" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
