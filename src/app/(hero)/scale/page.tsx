import React from 'react'
import PageBox from '../../_components/pageBox'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale',
}
export default function Scale() {
  return (
    <div className='relative h-screen w-screen'>
      <PageBox type="scale" title="Scale your app to infinity" />
    </div>
  )
}
