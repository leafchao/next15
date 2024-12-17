import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'

async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const photo = photos.find((photo) => photo.id === params.id)!
  return (
    <div className="container mx-auto pt-8">
      <Image
        src={photo.src}
        alt=""
        width={300}
        height={300}
        className="rounded-lg  block mx-auto"
      />

      <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 mt-5 leading-8">
        <p>
          <strong>Title:</strong>
          {photo.alt}
        </p>
        <p>
          <strong>Price:</strong>
          {photo.price}
        </p>
        <p>
          <strong>Desc:</strong>tide command person slave biggest during asleep
          trace studying supper claws each possibly modern price minerals bar
          simply whose pale letter copy trunk localunion crop shaking instant
          avoid mud properly post choose difficult clean lungs shout vertical
          then frame frog southern introduced uncle rhythm range happily
          shorterclaws third suddenly floating practical depth mix after smile
          hall noise dawn slowly mighty tribe copper hill greatly nearest cell
          is beside yes heat
        </p>
      </div>
    </div>
  )
}

export default Page
