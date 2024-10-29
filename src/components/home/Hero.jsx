import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col md:flex-row justify-center h-fit w-full items-center md:items-start py-10'>
            <div className="w-full md:w-1/2 h-fit flex flex-col gap-4 px-4 md:px-8 justify-between">
                <h1 className='text-4xl md:text-6xl font-bold text-center md:text-left'>
                    Crafting Digital Solutions <br className='md:flex hidden' /> for a New Era of Innovation
                </h1>
                <p className='text-center md:text-left'>
                    Empowering Businesses with Full-Stack Development, MERN Stack, FastAPI, Flask, and Reliable Web Hosting Solutions. From robust web applications to seamless hosting, we provide end-to-end support for your digital journey.
                </p>
                <Link href='/contact'
                    className='w-fit  bg-ulndark text-white rounded-md py-2 px-4 text-center md:text-left'
                >
                    Book a consultation
                </Link>
            </div>
            <div className="w-full md:w-1/2 h-auto flex flex-col items-center gap-4 px-4 md:px-8 ">
                <Image
                    src='/hero.svg'
                    alt='Hero Image'
                    sizes='object-cover'
                    height={500}
                    width={500}
                />
            </div>
        </div>
    )
}

export default Hero