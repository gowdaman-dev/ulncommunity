import React from 'react'

const banner:string[] = [
    "Github",
    "ReactJs",
    "NodeJs",
    "NextJs",
    "FastAPI",
    "Flask",
]

function BannerImg() {
    return (
        <div
            className='w-full py-2 border-t-[1px] border-b-[1px] border-gray-100 bg-cover bg-center bg-no-repeat md:flex hidden justify-between items-center'
        >
            {
                banner.map((item, index) => {
                    return (
                        <h1
                            key={index}
                            className='text-zinc-200 text-4xl font-bold'
                        >
                            {item}
                        </h1>
                    )
                })
            }
        </div>
    )
}

export default BannerImg