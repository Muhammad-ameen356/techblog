import Blog from "@/models/blogModel";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  try {
    const userData = await Blog.findById({ _id: id });
    if (!userData)
      return NextResponse.json({ message: "user not found" }, { status: 404 });

    return NextResponse.json({ data: userData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err }, { status: 400 });
  }
}
