'use client'
import React from 'react'

function WorkingProcess() {
    const [activeIndex, setActiveIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const accordionData = [
        {
            title: 'Step 1: Research & Discovery',
            content: 'We start by understanding your business goals, target audience, and market landscape to develop a comprehensive strategy.'
        },
        {
            title: 'Step 2: Strategy Development',
            content: 'Based on our research, we create a customized plan that outlines the key objectives, tactics, and timelines for your campaign.'
        },
        {
            title: 'Step 3: Implementation',
            content: 'Our team of experts will execute the strategy, optimizing for performance and making adjustments as needed to drive results.'
        },
        {
            title: 'Step 4: Monitoring & Reporting',
            content: 'We continuously monitor the campaign performance, providing regular updates and detailed reports to keep you informed.'
        },
        {
            title: 'Step 5: Optimization & Refinement',
            content: 'We analyze the data to identify areas for improvement and make adjustments to optimize the campaign for better results.'
        },
        {
            title: 'Step 6: Ongoing Support',
            content: 'We provide ongoing support and guidance to help you achieve your business goals and maximize the impact of your digital marketing efforts.'
        },
    ];
    return (
        <div className='flex flex-col gap-4'>
            {accordionData.map((item, index) => (
                <div key={index} className={`w-full relative select-none ease-linear transition-all duration-200 ${index == activeIndex ? "bg-primary h-[8rem]" : "bg-ulngray"} border-black border border-b-4 rounded-3xl p-4`}>
                    <div onClick={() => toggleAccordion(index)} className='flex items-center justify-between'>
                        <h2>{item.title}</h2> <div className={`h-10 w-10 rounded-full border flex items-center justify-center`}> <p>{activeIndex === index ? '-' : '+'}</p></div>
                    </div>
                    <div className={` absolute ${index == activeIndex ? "opacity-1":"opacity-0"}`}>{item.content}</div>
                </div>
            ))}
        </div>
    );
}

export default WorkingProcess