import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("chat_token")?.value;

    if (!token && request.nextUrl.pathname.startsWith("/conversations")) return NextResponse.redirect(new URL("/chat", request.url));

    return NextResponse.next();
}

export const config = {
  matcher: ["/conversations/:path*"],
};