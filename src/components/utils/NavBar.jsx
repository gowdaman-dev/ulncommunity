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

const NavBar = () => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-white text-black relative '
        >
            <div
                className=" text-black flex justify-between items-center w-full"
            >
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" width={200} height={100} />
                    </Link>
                </div>
                <div className="md:flex hidden">
                    <ul className="flex justify-between items-center gap-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link
                    href="/contact"
                    className="contact"
                >
                    <button
                        className="hover:bg-black text-black hover:text-white border border-black transition-colors ease-linear duration-200 px-4 py-2 rounded-md"
                    >
                        Request a quote
                    </button>
                </Link>
            </div>

        </nav>
    );
};

export default NavBar;
