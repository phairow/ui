import { NextRequest, NextResponse } from 'next/server'
import { domainConfig } from './domain.config';

const {
  protocol,
  apiPath,
  suffix,
  actualPort,
} = domainConfig;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith(apiPath)) {
    return rewriteForApiCore(request);
  }

  // use path rewrite to support domain specific routes
  return rewriteForDomain(request);
}

function rewriteForApiCore(request: NextRequest) {
  const domain = parseDomain(request);
  // const pathname = request.nextUrl.pathname.replace(apiPath, '');
  const pathname = request.nextUrl.pathname;

  return NextResponse.rewrite(`${protocol}${domain}${suffix}${actualPort}${pathname}`);;
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
  matcher: '/((?!_next/static|_next/image|.*\\..*|favicon.ico).*)',
}