import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, localizePath } from "@/i18n/config";

const oneYear = 60 * 60 * 24 * 365;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];
  const saved = request.cookies.get(localeCookie)?.value;

  if (isLocale(segment)) {
    const response = NextResponse.next();
    if (saved !== segment) {
      response.cookies.set(localeCookie, segment, { path: "/", maxAge: oneYear, sameSite: "lax" });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = localizePath(isLocale(saved) ? saved : defaultLocale, pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)"],
};
