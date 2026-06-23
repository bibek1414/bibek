import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // Check if the host is the non-www version
  // Replace 'bibekbhattarai14.com.np' with your actual root domain if different
  if (host === 'bibekbhattarai14.com.np') {
    url.hostname = 'www.bibekbhattarai14.com.np';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Only run proxy on page routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
