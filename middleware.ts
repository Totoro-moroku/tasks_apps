import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@/types/schema'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })

  const { data } = await supabase.auth.getSession()

  const isPublicUrl = ["/login", "/signup"].includes(req.nextUrl.pathname)

  if (!isPublicUrl && !data.session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // if (!isPublicUrl && data.session) {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

  return res
}

export const config = {
  matcher: '/:path*'
}
