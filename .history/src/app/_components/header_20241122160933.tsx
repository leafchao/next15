import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="w-full absolute top-0 left-0 z-10">
      <div className="flex flex-row justify-between items-center container mx-auto p-8">
        <Link className="text-3xl font-bold text-white" href="/">
          Home
        </Link>
        <div className="flex space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </div>
    </div>
  )
}
