import { NextRequest, NextResponse } from 'next/server'
import db from '@/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 2
  const query = searchParams.get('query') || ''

  const data = db.data.posts
  let filterData = data.filter(item => {
    const {id, ...rest} = item
    return Object.values(rest).some(value => value.toString().toLowerCase().includes(query.toLowerCase()))
  })

  const total = filterData.length
  const startIndex = (page - 1) * limit
  const endIndex = Math.min(startIndex + limit, total)

  filterData = startIndex >=total ? [] : filterData.slice(startIndex, endIndex)
  return NextResponse.json({
    code: 0,
    message: '添加成功',
    data:{
      total,
      list: filterData
    },
  })
}

export async function POST(request: Request) {
  const data = await request.json()
  await db.update(({ posts }) =>
    posts.unshift({
      id: Math.random().toString(36).slice(-8),
      ...data,
    })
  )
  return NextResponse.json({
    code: 0,
    message: '添加成功',
    data,
  })
}
