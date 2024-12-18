import { NextRequest, NextResponse } from 'next/server'

// export function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   return NextResponse.json({
//     time: new Date().toLocaleTimeString(),
//     searchParams
//   })
// }

export function GET() {
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
  })
}

export function POST() {}
