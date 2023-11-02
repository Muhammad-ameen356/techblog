import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/admin";

  const token = request.cookies.get("token");
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }
  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin", "/admin/dashboard"],
};
