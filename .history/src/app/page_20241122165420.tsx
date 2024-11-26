import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative h-screen w-screen bg-black'>
      <div className='absolute inset-0'>
        <Image />
        <div></div>
      </div>
      <div>
        <h1>name</h1>
      </div>
    </div>
  )
}
