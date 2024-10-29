import texts from '@/app/texts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroImg from './HeroImg'

function Hero() {
    return (
        <div className="w-full min-h-[515px] overflow-hidden flex flex-nowrap md:flex-row flex-col justify-between items-start content-space-between py-20">
            <div className="w-full box-border min-h-fit  flex flex-col flex-nowrap justify-start items-start gap-6">
                <div className="">
                    <span className="text-6xl font-black text-[#000000ff]">
                        Navigating the digital landscape for success
                    </span>
                </div>

                <div className="">
                    <span className="text-[20px] text-[#000000ff]">
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </span>
                </div>

                <Link href="/contact"
                    className='bg-ulndark text-white px-6 py-3 rounded-md hover:bg-black hover:text-ulngray transition-colors ease-linear duration-200'
                >
                    Book a consultation
                </Link>
            </div>

            <div className="w-full h-[500px] relative">
                <HeroImg/>
            </div>
        </div>
    )
}

export default Hero