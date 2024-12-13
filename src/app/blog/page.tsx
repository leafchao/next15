
import React from 'react'
import List from './_components/blogList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '博客列表',
}

function Page() {
  console.log('Page render...')
  return (
    <div>
      <List />
    </div>
  )
}

export default Page
