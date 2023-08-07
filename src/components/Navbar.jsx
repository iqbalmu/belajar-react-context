import React from 'react'
import { useAppContext } from '../context/app-context'

function Navbar() {
  const context = useAppContext();

  return (
    <div className='flex w-3/4 mt-4 mx-auto px-5 py-3 gap-7 items-center justify-center'>
      <img src="./public/vite.svg" alt="vite-icon" />
      <h1 className='text-2xl font-bold text-center'>
        {context.title}
      </h1>
      <div className="count font-extrabold text-xl rounded-full ring-2 text-center px-4 py-1">
        {context.count}
      </div>
    </div>
  )
}

export default Navbar   