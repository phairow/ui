import { NextRequest, NextResponse } from 'next/server'
import { domainConfig } from './domain.config';
import { loadDomain } from './services/domain.service';

const {
  protocol,
  apiPath,
  suffix,
  port,
  actualPort,
} = domainConfig;

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // allowing paths with `.` to pass through unless they are for api
  if (!pathname.startsWith('/api') && /(\..*){1,}/.test(pathname)) {
    return;
  }

  // for dev mode, proxy api calls to core
  if (pathname.startsWith(apiPath)) {
    return rewriteForApiCore(request, pathname);
  }

  const originalHostname = getHostname(request);
  const originalProtocol = `${getProtocol(request)}://`;
  const redirectProtocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
  const redirectDomain = await getRedirectHostForDomain(request);
  const redirectHostname = redirectDomain ? `www.${redirectDomain}${suffix}${port}`
    : (hasSubdomain(originalHostname) ? originalHostname : `www.${originalHostname}`);
  
  if (redirectHostname !== originalHostname || redirectProtocol !== originalProtocol) {
    return NextResponse.redirect(
      `${redirectProtocol}${redirectHostname}${pathname}`,
      301
    );
  }

  // use path rewrite to support domain specific routes
  return rewriteForDomain(request, pathname);
}

function hasSubdomain(hostname: string) {
  // if hostname has more than one dot then it has a subdomain
  // otherwise is naked domain
  //
  // TODO: in the future we could add a setting to 
  // allow each domain to chose a preference naked vs www.
  const clean = hostname.split(':')[0].replace(/\.local$/, '');
  
  return /(\..*){2,}/.test(clean);
}

const redirectData: any = {};
async function getRedirectHostForDomain(request: NextRequest) {
  const domain = parseDomain(request);

  if (!redirectData[domain]) {
    let domainData: any;
    if (process.env.NODE_ENV === 'production') {
      domainData = await loadDomain(domain);
    } else {
      domainData = await (await fetch(`http://www.${domain}${suffix}${actualPort}/api/v1/domains/${domain}`)).json()
    }

    redirectData[domain] = domainData.redirect || undefined;
  }

  return redirectData[domain];
}

function rewriteForApiCore(request: NextRequest, pathname: string) {
  const domain = parseDomain(request);

  return NextResponse.rewrite(`${protocol}www.${domain}${suffix}${actualPort}${pathname}`);;
}

function rewriteForDomain(request: NextRequest, pathname: string) {
  const domain = parseDomain(request);

  return NextResponse.rewrite(new URL(`/${domain}${pathname}`, request.url));;
}

function getProtocol(request: NextRequest) {
  let protocol = request.nextUrl.protocol;

  if (request.headers.has('x-forwarded-proto')) {
    protocol = request.headers.get('x-forwarded-proto') ?? protocol;
  }

  return protocol;
}

function getHostname(request: NextRequest) {
  let hostname = request.nextUrl.hostname;

  if (request.headers.has('x-forwarded-host')) {
    hostname = request.headers.get('x-forwarded-host') ?? hostname;
  } else if (request.headers.has('host')) {
    hostname = request.headers.get('host') ?? hostname;
  }

  return hostname;
}

function parseDomain(request: NextRequest) {
  let hostname = getHostname(request);

  hostname = hostname.split(':')[0];

  const url = hostname.replace(/\.local$/, '');
  const matchDomain = url.match(/.*?([a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+)$/);

  if (matchDomain) {
    return matchDomain[1];
  }

  return request.nextUrl.hostname;
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}