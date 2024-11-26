import React from 'react'
import home from '../../../public/home.jpg'
import performance from '../../../public/performance.jpg'
import reliability from '../../../public/reliability.jpg'
import scale from '../../../public/scale.jpg'
import Image from 'next/image'

const IMG_TYPE = {
  home,
  performance,
  reliability,
  scale,
}

type ImgType = keyof typeof IMG_TYPE;

export default function PageBox(props: { type: ImgType; title: string }) {
  const { type, title } = props

  return (
    <div className="w-[100%] h-[100%] relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMG_TYPE[type]}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r  from-gray-900"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1>{title}</h1>
      </div>
    </div>
  )
}
