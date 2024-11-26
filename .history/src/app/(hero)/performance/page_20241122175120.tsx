import React from 'react'
import PageBox from '../_components/pageBox'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'performance',
}

export default function Performance() {
  return (
    <div className='relative h-screen w-screen'>
      <PageBox type='performance' title='Performance' />
    </div>
  )
}
