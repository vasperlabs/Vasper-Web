import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Geo information from headers (set by Vercel Edge or CDN)
  const country = request.headers.get("x-vercel-ip-country") ?? "GB";
  const city = request.headers.get("x-vercel-ip-city") ?? "unknown";

  // Set geo headers for downstream use
  response.headers.set("x-geo-country", country);
  response.headers.set("x-geo-city", city);

  // Default locale — can be extended with full i18n routing
  const locale = country === "GB" ? "en-GB" : "en";
  response.headers.set("x-locale", locale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
