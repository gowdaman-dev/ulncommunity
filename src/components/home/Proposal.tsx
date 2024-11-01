import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Proposal() {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center p-8 bg-ulngray rounded-3xl">
            <div
                className='flex flex-col justify-center items-start p-4 gap-4 md:w-1/2 w-full'
            >
                <h2
                    className='font-bold text-xl'
                >Let’s make things happen</h2>
                <p>Contact us today to learn more about how our expert web and mobile app development services can empower your business to grow and succeed online with high-quality, reliable solutions tailored to your needs. </p>
                <Link
                    href="/contact"
                    className="bg-ulndark rounded-xl text-ulngray p-2"
                >Get your free proposal</Link>
            </div>
            <Image src={'/images/proposal.png'} width={250} height={250} alt="proposal" className='mx-auto md:flex hidden' />
        </div>
    )
}

export default Proposal