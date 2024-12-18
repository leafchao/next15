import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
  console.log(request.nextUrl.pathname, '🤑')
  if(request.nextUrl.pathname.startsWith('/login')){
    const token = request.cookies.get('token')?.value
    if(!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

// export const config = {
//   matcher: ['/about/:path*']
// }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    // 除下方的文件外，都匹配
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}