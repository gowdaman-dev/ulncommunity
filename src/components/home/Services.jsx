import texts from '@/app/texts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
    {
        title: "Web Development",
        img: "/images/image1.png",
        link: "/web-development",
    },
    {
        title: "Mobile Development",
        img: "/images/image2.png",
        link: "/mobile-development",
    },
    {
        title: "Hosting",
        img: "/images/image3.png",
        link: "/hosting",
    },
    {
        title: "SEO Service",
        img: "/images/image4.png",
        link: "/seo",
    },
    {
        title: "Ui/UX Design",
        img: "/images/image5.png",
        link: "/digital-marketing",
    },
    {
        title: "Social Media Marketing",
        img: "/images/image5.png",
        link: "/social-media-marketing",
    },
]

function Services() {
    return (
        <div className="flex flex-col w-full md:border-t-[0] border-t-[1px]">
            <div className="flex md:flex-row flex-col w-full justify-start gap-8 p-4 py-8">
                <h3
                    className='bg-primary text-ulndark w-fit  font-black text-2xl p-2 rounded-lg h-fit w-fit'
                >
                    Services
                </h3>
                <p
                    className='md:w-2/3 text-justify'
                >
                    At our company, we offer a comprehensive range of development and hosting services to support business growth in the digital age. Our expertise includes:
                </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-8">
                <div className="flex w-full justify-center items-between bg-ulngray border border-ulndark border-b-8 rounded-2xl p-4">
                    <div className="flex flex-col justify-between">
                        <h3 className=" 
                        bg-primary text-ulndark w-fit  p-2 rounded-lg
                        text-xl font-black">
                            {services[0].title}
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <div className="bg-ulndark p-2 rounded-full">
                                <Image
                                    src={'/graphics/graphics41.png'}
                                    alt={"BGR"}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <Link href={"/web-development"} className="rounded-lg">Learn More</Link>
                        </div>
                    </div>
                    <Image
                        src={"/images/image1.png"}
                        alt={"Web Development"}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex w-full justify-center items-between bg-primary border border-ulndark border-b-8 rounded-2xl p-4">
                    <div className="flex flex-col justify-between">
                        <h3 className=" 
                        bg-white text-ulndark w-fit p-2 rounded-lg
                        text-xl font-black">
                            {services[1].title}
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <div className="bg-ulndark p-2 rounded-full">
                                <Image
                                    src={'/graphics/graphics41.png'}
                                    alt={"BGR"}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <Link href={"/web-development"} className="rounded-lg">Learn More</Link>
                        </div>
                    </div>
                    <Image
                        src={"/images/image2.png"}
                        alt={"Web Development"}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex w-full justify-center items-between bg-ulndark border border-ulndark border-b-8 rounded-2xl p-4">
                    <div className="flex flex-col justify-between">
                        <h3 className=" 
                        bg-white text-ulndark w-fit p-2 rounded-lg
                        text-xl font-black">
                            {services[2].title}
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <div className="bg-white p-2 rounded-full">
                                <Image
                                    src={'/graphics/graphics42.png'}
                                    alt={"BGR"}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <Link href={"/web-development"} className="rounded-lg text-white">Learn More</Link>
                        </div>
                    </div>
                    <Image
                        src={"/images/image3.png"}
                        alt={"Web Development"}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex w-full justify-center items-between bg-ulngray border border-ulndark border-b-8 rounded-2xl p-4">
                    <div className="flex flex-col justify-between">
                        <h3 className=" 
                        bg-primary text-ulndark w-fit  p-2 rounded-lg
                        text-xl font-black">
                            {services[3].title}
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <div className="bg-ulndark p-2 rounded-full">
                                <Image
                                    src={'/graphics/graphics41.png'}
                                    alt={"BGR"}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <Link href={"/web-development"} className="rounded-lg">Learn More</Link>
                        </div>
                    </div>
                    <Image
                        src={"/images/image4.png"}
                        alt={"Web Development"}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex w-full justify-center items-between bg-primary border border-ulndark border-b-8 rounded-2xl p-4">
                    <div className="flex flex-col justify-between">
                        <h3 className=" 
                        bg-white text-ulndark w-fit p-2 rounded-lg
                        text-xl font-black">
                            {services[4].title}
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <div className="bg-ulndark p-2 rounded-full">
                                <Image
                                    src={'/graphics/graphics41.png'}
                                    alt={"BGR"}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <Link href={"/web-development"} className="rounded-lg">Learn More</Link>
                        </div>
                    </div>
                    <Image
                        src={"/images/image5.png"}
                        alt={"Web Development"}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex w-full justify-center items-between bg-ulndark border border-ulndark border-b-8 rounded-2xl p-4">
                    <div className="flex flex-col justify-between">
                        <h3 className=" 
                        bg-white text-ulndark w-fit p-2 rounded-lg
                        text-xl font-black">
                            {services[5].title}
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <div className="bg-white p-2 rounded-full">
                                <Image
                                    src={'/graphics/graphics42.png'}
                                    alt={"BGR"}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <Link href={"/web-development"} className="rounded-lg text-white">Learn More</Link>
                        </div>
                    </div>
                    <Image
                        src={"/images/image1.png"}
                        alt={"Web Development"}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services