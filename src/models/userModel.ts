import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "ALready Exist"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Already Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
