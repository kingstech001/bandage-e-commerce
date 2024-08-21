import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // const url = request.nextUrl.clone();
  // const token = request.cookies.get('authToken');

  // // Redirect to login if the user is not authenticated
  // if (!token && url.pathname === '/Checkout') {
  //   return NextResponse.redirect(new URL('/Login', request.url));
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: ['/Checkout'],
};
