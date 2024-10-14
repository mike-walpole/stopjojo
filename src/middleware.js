import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  // Get the country from the request headers
  const country = request.geo.country || '';

  // Check if the request is coming from Sweden
  if (country === 'SE') {
    // Get the current hostname
    const hostname = request.headers.get('host');
    
    // Create the new URL for the Swedish subdomain
    const url = new URL(request.url);
    url.hostname = `se.${hostname}`;

    // Return the response with the redirect
    return NextResponse.redirect(url);
  }

  // If not from Sweden, continue with the request as normal
  return NextResponse.next();
}
