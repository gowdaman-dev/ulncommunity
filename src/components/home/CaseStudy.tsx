import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CaseStudy() {
    return (
        <div
            className='md:py-8 py-4'
        >
            <div className="flex md:flex-row flex-col w-full justify-start gap-8 p-4 py-8">
                <h3
                    className='bg-primary text-ulndark w-fit  font-black text-2xl p-2 rounded-lg h-fit'
                >
                    Case Study
                </h3>
                <p
                    className='md:w-2/3 text-justify'
                >
                    Explore Real-Life Examples of Our Proven Success through Our Project Case Studies.
                </p>
            </div>
            <div className="w-full snap-x overflow-x-auto scrollbar-hide">
            <div className="snap-x snap-mandatory max-md:w-max md:bg-ulndark max-md:space-x-4 cursor-default bg-white rounded-3xl overflow-x-scroll grid grid-cols-3 place-items-center md:p-8 p-4">
                <div className="snap-center bg-ulndark rounded-3xl p-4 max-md:w-[300px] text-white px-4 flex flex-col items-start justify-between h-full">
                    <p className=''>We crafted a fresh, visually engaging design aligned with EzyShop’s brand, optimizing for easy navigation and higher engagement.</p>
                    <Link href={'/'} className='flex float-left items-center gap-2 py-4 text-primary'>Learn more <span><Image src={"/graphics/graphics41.png"} width={20} height={20} alt='study case 1'/></span></Link>
                </div>
                <div className="snap-center bg-ulndark rounded-3xl p-4 max-md:w-[300px] text-white px-4 flex flex-col items-start justify-between h-full border-r border-l">
                    <p className=''>  By prioritizing responsive design and optimizing images and code, we ensured faster loading and seamless mobile browsing.</p>
                    <Link href={'/'} className='flex float-left items-center gap-2 py-4 text-primary'>Learn more <span><Image src={"/graphics/graphics41.png"} width={20} height={20} alt='study case 1'/></span></Link>
                </div>
                <div className="snap-center bg-ulndark rounded-3xl p-4 max-md:w-[300px] text-white px-4 flex flex-col items-start justify-between h-full">
                    <p className=''> Implemented SEO best practices, like optimized metadata and structured content, to boost EzyShop’s search visibility and align with user search intent.</p>
                    <Link href={'/'} className='flex float-left items-center gap-2 py-4 text-primary'>Learn more <span><Image src={"/graphics/graphics41.png"} width={20} height={20} alt='study case 1'/></span></Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CaseStudy