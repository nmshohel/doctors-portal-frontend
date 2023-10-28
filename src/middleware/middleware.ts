import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {getToken} from "next-auth/jwt"
 
// This function can be marked `async` if using `await` inside
export async  function middleware(request: NextRequest) {

    const token=await getToken({req:request})
    console.log(token, "middle ware token---------------------------------------------------------------------")
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}