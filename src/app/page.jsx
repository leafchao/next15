import React from 'react'

function Page() {
  console.log('Page render...')
  return <div className="flex mt-6 p-6 bg-gray-500 text-white rounded-lg">@children</div>
}

export default Page
