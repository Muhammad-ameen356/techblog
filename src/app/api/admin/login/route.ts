import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json({ message: "User not exist" }, { status: 400 });

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      name: user.username,
      email: user.email,
      isVerified: user.isVerified,
      isAdmin: user.isAdmin,
    };

    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (err) {
    return NextResponse.json({ error: "ERROR", err }, { status: 500 });
  }
}
