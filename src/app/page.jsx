import Hero from '@/components/home/Hero'
import React from 'react'

function page() {
  return (
    <main
      className='flex flex-col items-center justify-start min-h-screen py-2 pt-[4rem] w-full px-10'
    >
      <Hero />
    </main>
  )
}

export default page