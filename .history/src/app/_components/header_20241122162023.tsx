import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="w-full absolute top-0 left-0 z-10">
      <div className="flex flex-row justify-between items-center container mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="flex space-x-4 text-xl">
          <Link
            className={pathname === '/performance' ? 'text-purple-500' : ''}
            href="/performance"
          >
            Performance
          </Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </div>
    </div>
  )
}
