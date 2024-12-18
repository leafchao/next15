import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { login, password } = await request.json()

  const res = await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login,
      password,
    }),
  })

  const data = await res.json()

  // BFF
  // 把拿到的token 通过cookie 的形式种植到前端
  const response = NextResponse.json(
    {
      success: true,
      msg: data.message
    }
    // {
    //   headers: {
    //     'Set-Cookie': `token=${data.data.token}; path=/; HttpOnly; Max-Age=86400`,
    //   },
    // }
  )

  response.cookies.set('token', data.data.token, {
    path: '/',
    httpOnly: true,
    maxAge: 86400,
  })
  return response
}
