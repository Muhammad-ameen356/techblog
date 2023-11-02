import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body, "body");

    const { username, email, password } = body;

    const findUser = await User.findOne({ username });
    if (findUser)
      return NextResponse.json(
        { message: "User name Already Exist" },
        { status: 400 }
      );

    const findEmail = await User.findOne({ email });
    if (findEmail)
      return NextResponse.json(
        { message: "Email Already Exist" },
        { status: 400 }
      );

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);

    const nweUser = new User({
      username,
      email,
      password: hash,
    });

    const savedUser = await nweUser.save();

    return NextResponse.json({
      message: "User Created Successfully",
      savedUser,
    });
  } catch (err: any) {
    return NextResponse.json({ error: "ERROR", err }, { status: 500 });
  }
}
