'use client'
import React from 'react'
import { photos } from '@/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// nextjs15 并行路由拦截有问题
function Page({ params }: { params: { id: string } }) {
  console.log('params= ', params.id)
  const photo = photos.find((photo) => photo.id === params.id)!
  const router = useRouter()
  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]"
      onClick={() => router.back()}
    >
      <Image
        onClick={(e) => e.stopPropagation()}
        src={photo.src}
        alt={photo.alt}
        width={300}
        height={300}
        className="rounded-lg"
      />
    </div>
  )
}

export default Page
