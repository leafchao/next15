import React from 'react'
import PageBox from './_components/pageBox'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className='relative h-screen w-screen '>
      <PageBox type='home' title='Professional Cloud Hosting' />
    </div>
  )
}
