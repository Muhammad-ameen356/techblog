import Blog from "@/models/blogModel";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const allBlogPosts = await Blog.find({ isActive: true });

    return NextResponse.json(
      { message: "success", data: allBlogPosts },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 404 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, userId } = body;

    const userData = await User.findById({ _id: userId }).select("-password");

    if (!userData)
      return NextResponse.json({ message: "User Not Found" }, { status: 400 });

    console.log(userData, "userData");

    const newBlog = new Blog({
      title,
      content,
      user: {
        ...userData,
      },
    });

    const savedBlog = await newBlog.save();

    return NextResponse.json(
      { message: "Blog Created Successfully", data: savedBlog },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 400 });
  }
}
