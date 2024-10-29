import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navLinks = [
    {
        title: 'About Us',
        path: '/about'
    },
    {
        title: 'Services',
        path: '/services'
    },
    {
        title: 'Use Cases',
        path: '/usecases'
    },
    {
        title: 'Pricing',
        path: '/pricing',
    },
    {
        title: 'Blog',
        path: '/blog',
    }
]


function NavBar() {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-white text-black font-space-grotesk px-10 fixed w-full z-10'
        >
            <div className="logo grid place-items-center">
                <Link href='/'>
                    <Image src='/logo.svg' alt='logo' width={180} height={2800} />
                </Link>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-4">
                {navLinks.map((link, index) => (
                    <Link
                    className='text-black hover:text-gray-500 transition-colors ease-linear duration-300'
                    key={index} 
                    href={link.path}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <Link href='/Quatation'>
                <button className='bg-transparent border border-black hover:bg-black hover:text-white transition-colors ease-linear duration-300 text-black py-2 px-4 rounded'>
                    Get Quotation
                </button>
            </Link>
        </nav>
    )
}

export default NavBar