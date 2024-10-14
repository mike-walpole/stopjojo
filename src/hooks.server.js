/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Get the country from the request headers
  const country = event.request.headers.get('x-vercel-ip-country') || '';

  // Check if the request is coming from Sweden
  if (country === 'SE') {
    // Get the current URL
    const url = new URL(event.request.url);
    
    // Check if we're not already on the Swedish subdomain
    if (!url.hostname.startsWith('se.')) {
      // Create the new URL for the Swedish subdomain
      url.hostname = `se.${url.hostname}`;

      // Return the response with the redirect
      return Response.redirect(url.toString(), 302);
    }
  }

  // If not from Sweden or already on the correct subdomain, continue with the request as normal
  const response = await resolve(event);
  return response;
}
