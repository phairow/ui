import { type NextRequest, NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log('in middleware')
  // use path rewrite to support domain specific routes
  const domainRespone = rewriteForDomain(request);
  if (domainRespone) {
    return domainRespone;
  }
}

function rewriteForDomain(request: NextRequest) {
  const domain = parseDomain(request);

  return NextResponse.rewrite(new URL(`/${domain}${request.nextUrl.pathname}`, request.url));;
}

function parseDomain(request: NextRequest) {
  let hostname = request.nextUrl.hostname;

  if (request.headers.has('x-forwarded-host')) {
    hostname = request.headers.get('x-forwarded-host') ?? hostname;
  } else if (request.headers.has('host')) {
    hostname = request.headers.get('host') ?? hostname;
  }

  hostname = hostname.split(':')[0];

  const url = hostname.replace(/\.local$/, '');
  const matchDomain = url.match(/.*?([a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+)$/);

  if (matchDomain) {
    return matchDomain[1];
  }

  return request.nextUrl.hostname;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}