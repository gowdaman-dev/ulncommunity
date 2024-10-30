import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa6"
function Team() {
    return (
        <div
            className='md:py-8 py-4 w-full flex flex-col justify-start items-center'
        >
            <div className="flex md:flex-row flex-col w-full justify-start gap-8 p-4 py-8">
                <h3
                    className='bg-primary text-ulndark w-fit  font-black text-2xl p-2 rounded-lg h-fit'
                >
                    Team
                </h3>
                <p
                    className='md:w-2/3 text-justify'
                >
                    Meet the skilled and experienced team behind our successful web inovation strategies.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-8">
                <div className="flex flex-col justify-between items-between bg-ulngray border border-ulndark border-b-8 rounded-[50px] p-8">
                    <div className="flex w-full justify-between items-start pb-8 border-b border-ulndark">
                        <div className="flex items-end gap-2">
                            <Image src={"/profiles/1.png"} alt='gowdaman' className='' height={90} width={90} />
                            <div className="flex items-start flex-col justify-end w-fit">
                                <h1 className='font-semibold'>Gowdaman P</h1>
                                <p className='text-sm text-ulndark'>Founder & CEO</p>
                            </div>
                        </div>
                        <Link href={'/'} className='bg-ulndark rounded-full h-8 min-w-8 flex items-center justify-center text-ulngray '>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className="h-full py-4 text-justify text-sm">
                        Over 5 years of experience, I specialize in building responsive web applications from front-end to back-end.
                    </div>
                </div>
                <div className="flex flex-col justify-between items-between bg-ulngray border border-ulndark border-b-8 rounded-[50px] p-8">
                    <div className="flex w-full justify-between items-start pb-8 border-b border-ulndark">
                        <div className="flex items-end gap-2">
                            <Image src={"/profiles/1.png"} alt='gowdaman' className='' height={90} width={90} />
                            <div className="flex items-start flex-col justify-end w-fit">
                                <h1 className='font-semibold'>Gowdaman P</h1>
                                <p className='text-sm text-ulndark'>Founder & CEO</p>
                            </div>
                        </div>
                        <Link href={'/'} className='bg-ulndark rounded-full h-8 min-w-8 flex items-center justify-center text-ulngray '>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className="h-full py-4 text-justify text-sm">
                        Over 5 years of experience, I specialize in building responsive web applications from front-end to back-end.
                    </div>
                </div>
                <div className="flex flex-col justify-between items-between bg-ulngray border border-ulndark border-b-8 rounded-[50px] p-8">
                    <div className="flex w-full justify-between items-start pb-8 border-b border-ulndark">
                        <div className="flex items-end gap-2">
                            <Image src={"/profiles/1.png"} alt='gowdaman' className='' height={90} width={90} />
                            <div className="flex items-start flex-col justify-end w-fit">
                                <h1 className='font-semibold'>Gowdaman P</h1>
                                <p className='text-sm text-ulndark'>Founder & CEO</p>
                            </div>
                        </div>
                        <Link href={'/'} className='bg-ulndark rounded-full h-8 min-w-8 flex items-center justify-center text-ulngray '>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className="h-full py-4 text-justify text-sm">
                        Over 5 years of experience, I specialize in building responsive web applications from front-end to back-end.
                    </div>
                </div>
                <div className="flex flex-col justify-between items-between bg-ulngray border border-ulndark border-b-8 rounded-[50px] p-8">
                    <div className="flex w-full justify-between items-start pb-8 border-b border-ulndark">
                        <div className="flex items-end gap-2">
                            <Image src={"/profiles/1.png"} alt='gowdaman' className='' height={90} width={90} />
                            <div className="flex items-start flex-col justify-end w-fit">
                                <h1 className='font-semibold'>Gowdaman P</h1>
                                <p className='text-sm text-ulndark'>Founder & CEO</p>
                            </div>
                        </div>
                        <Link href={'/'} className='bg-ulndark rounded-full h-8 min-w-8 flex items-center justify-center text-ulngray '>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className="h-full py-4 text-justify text-sm">
                        Over 5 years of experience, I specialize in building responsive web applications from front-end to back-end.
                    </div>
                </div>
                <div className="md:flex hidden flex-col justify-between items-between bg-ulngray border border-ulndark border-b-8 rounded-[50px] p-8">
                    <div className="flex w-full justify-between items-start pb-8 border-b border-ulndark">
                        <div className="flex items-end gap-2">
                            <Image src={"/profiles/1.png"} alt='gowdaman' className='' height={90} width={90} />
                            <div className="flex items-start flex-col justify-end w-fit">
                                <h1 className='font-semibold'>Gowdaman P</h1>
                                <p className='text-sm text-ulndark'>Founder & CEO</p>
                            </div>
                        </div>
                        <Link href={'/'} className='bg-ulndark rounded-full h-8 min-w-8 flex items-center justify-center text-ulngray '>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className="h-full py-4 text-justify text-sm">
                        Over 5 years of experience, I specialize in building responsive web applications from front-end to back-end.
                    </div>
                </div>
                <div className="md:flex hidden flex-col justify-between items-between bg-ulngray border border-ulndark border-b-8 rounded-[50px] p-8">
                    <div className="flex w-full justify-between items-start pb-8 border-b border-ulndark">
                        <div className="flex items-end gap-2">
                            <Image src={"/profiles/1.png"} alt='gowdaman' className='' height={90} width={90} />
                            <div className="flex items-start flex-col justify-end w-fit">
                                <h1 className='font-semibold'>Gowdaman P</h1>
                                <p className='text-sm text-ulndark'>Founder & CEO</p>
                            </div>
                        </div>
                        <Link href={'/'} className='bg-ulndark rounded-full h-8 min-w-8 flex items-center justify-center text-ulngray '>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <div className="h-full py-4 text-justify text-sm">
                        Over 5 years of experience, I specialize in building responsive web applications from front-end to back-end.
                    </div>
                </div>
            </div>
            <Link href={'/'} className='md:hidden bg-ulndark text-ulngray p-4 min-w-full text-center rounded-3xl'>
                View All
            </Link>
        </div>
    )
}

export default Team