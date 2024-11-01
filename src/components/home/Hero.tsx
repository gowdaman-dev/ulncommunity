import Link from 'next/link'
import React from 'react'
import HeroImg from './HeroImg'

function Hero() {
    return (
        <div className="w-full min-h-[515px] overflow-hidden flex flex-nowrap md:flex-row flex-col justify-between items-start content-space-between md:py-20 py-10 pt-[5rem]">
            <div className="w-full box-border min-h-fit  flex flex-col flex-nowrap justify-start items-start gap-6">
                <div className="">
                    <span className="md:text-6xl text-4xl font-black text-[#000000ff]">
                    Crafting Digital Solutions for a New Era of Innovation
                    </span>
                </div>

                <div className="">
                    <span className="text-[20px] text-[#000000ff]">
                        Our Software Company helps your Business Growth and Online Success with Expert Developers, SEO, PPC, and Content Creation Solutions.
                    </span>
                </div>

                <Link href="/contact"
                    className='bg-ulndark text-white px-6 py-3 rounded-md hover:bg-black hover:text-ulngray transition-colors ease-linear duration-200'
                >
                    Book a consultation
                </Link>
            </div>

            <div className="w-full md:h-[500px] h-fit relative">
                <HeroImg/>
            </div>
        </div>
    )
}

export default Hero