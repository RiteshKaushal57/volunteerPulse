import jwt from "jsonwebtoken";

// This controller will be used in the Google callback route
export const googleAuthCallback = (req, res) => {
  try {
    // req.user is set by Passport after successful authentication
    const user = req.user;

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set JWT as a secure cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Redirect to frontend (change URL as needed)
    res.redirect("http://localhost:5173");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
