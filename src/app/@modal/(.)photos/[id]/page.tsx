'use client'
import React from 'react'
import { photos } from '@/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// nextjs15 并行路由拦截有问题
function Page(props: { params: { id: string } }) {
  const router = useRouter()
  const id = props.params.id
  const photo = photos.find((photo) => photo.id === id)!
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
