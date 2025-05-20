import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "../modals/userModel.js"; // Adjust path as needed

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URI,
    },
    async (accessToken, refreshToken, profile, done) => {
      // Always define a fallback/default photo
      const photoUrl =
        profile.photos?.[0]?.value ||
        profile._json?.picture ||
        "https://ui-avatars.com/api/?name=User&background=4F46E5&color=fff";

      try {
        let user = await userModel.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = await userModel.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            provider: "google",
            photo: photoUrl, // Always set photo, even if default
          });
        } else {
          // Update photo if needed
          user.photo = photoUrl;
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id); // or user._id
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
