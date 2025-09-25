import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
    const { pathname } = req.nextUrl;
    
    // Let NextAuth handle its own routes
    if (pathname.startsWith('/api/auth')) {
        return NextResponse.next();
    }
    
    // Don't protect public CMS pages (sign-in, unauthorized)
    if (pathname === '/cms/sign-in' || pathname === '/cms/unauthorized') {
        return NextResponse.next();
    }
    
    // Protect CMS routes
    if (pathname.startsWith('/cms')) {
        // If no session, redirect to CMS sign-in page
        if (!req.auth) {
            const signInUrl = new URL('/cms/sign-in', req.url);
            signInUrl.searchParams.set('callbackUrl', pathname);
            return NextResponse.redirect(signInUrl);
        }
        
        // If user doesn't have CMS access, redirect to unauthorized
        if (!req.auth.user?.hasCMSAccess) {
            return NextResponse.redirect(new URL('/cms/unauthorized', req.url));
        }
    }
    
    return NextResponse.next();
});

export const config = {
    matcher: ['/cms/:path*', '/api/auth/:path*']
};