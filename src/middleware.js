import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @param {NextRequest} req 
 * @param {NextResponse} res 
 * @returns 
 */
export default async function middleware(req, res) {
    if (!req.nextUrl.pathname.startsWith("/cms"))
        return NextResponse.next();

    return NextResponse.redirect('/cms/login');
}