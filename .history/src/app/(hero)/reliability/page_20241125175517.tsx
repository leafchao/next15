import React from 'react'
import PageBox from '../../_components/pageBox'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'reliability',
}

export default function Reliability() {
  return (
    <div className='relative h-screen w-screen'>
      <PageBox type="reliability" title="Reliability" />
    </div>
  )
}
