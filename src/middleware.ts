import { NextResponse } from "next/server";
import { auth } from "@/auth";

const PUBLIC_PATHS = ["/", "/login", "/signup", "/terms", "/privacy"];

export default auth((req) => {
  const { nextUrl } = req;
  const session = req.auth;
  const role = session?.user?.role;
  const path = nextUrl.pathname;

  if (PUBLIC_PATHS.includes(path)) {
    // If already signed in, bounce away from auth pages.
    if (session && (path === "/login" || path === "/signup")) {
      const dest = role === "PARENT" ? "/parent" : "/student";
      return NextResponse.redirect(new URL(dest, nextUrl));
    }
    return NextResponse.next();
  }

  if (!session) {
    const url = new URL("/login", nextUrl);
    url.searchParams.set("next", path);
    return NextResponse.redirect(url);
  }

  if (path.startsWith("/student") && role !== "STUDENT") {
    return NextResponse.redirect(new URL("/parent", nextUrl));
  }
  if (path.startsWith("/parent") && role !== "PARENT") {
    return NextResponse.redirect(new URL("/student", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  // Skip API routes, _next assets, and the favicon.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
