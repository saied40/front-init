import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlProxy = createMiddleware(routing);

export function proxy(request: NextRequest) {
  if (["/login", "/signin", "/auth", "/en/login", "/en/signin", "/en/auth", "/ar/login", "/ar/signin", "/ar/auth"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/en/auth/login", request.url));
  }

  if (["/register", "/signup", "/en/register", "/en/signup", "/ar/register", "/ar/signup"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/en/auth/register", request.url));
  }

  return intlProxy(request);
};

export const config = {
  /* matcher: ["/login", "/register", "/auth", "/profile/:path*", "/dashboard/:path*"], */
  /* Match all pathnames except for
  - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  - … the ones containing a dot (e.g. `favicon.ico`) */
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
