import React from 'react'
import Image from 'next/image'
import PageBox from './_components/pageBox'


export default function Home() {
  return (
    <div className='relative h-screen w-screen bg-black'>
      <PageBox type='home' title='Professional Cloud Hosting' />
    </div>
  )
}
