import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const hasCheckedOut = request.cookies.get("hasCheckedOut");

  if (hasCheckedOut) {
    return NextResponse.redirect(
      new URL("/dashboard/my-deposits", request.url)
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/invest/checkout",
};
