'use client'
import React from 'react'
import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'

function Hero({data}:{data:any}) {

    return (

        <section id='home' className=' mt-0 min-h-screen w-full gap-2 flex flex-col justify-center px-4 items-center'>
            <div className=' bg-gradient-to-tl from-[rgb(255,134,96)] to-[rgb(128,0,255)] w-56 flex justify-center h-56 rounded-full'>
                <Image src="/Avatar.png" alt="Avatar" width={224} height={224} />
            </div>
            <div className=' w-full '>
                <h1 className={`text-white text-center text-5xl font-bold`} >
                    code your <span className='text-transparent bg-clip-text bg-gradient-to-tl from-[rgb(255,134,96)] to-[rgb(128,0,255)] '>ideas</span>
                </h1>
            </div>
            <div className='  max-w-4xl'>
                <div className='text-[#C5C5C5] text-center px-18 md:px-48'>
                   <PrismicRichText field={data.primary.herotext} />
                </div>
            </div>
            <div className=' mt-2 gap-2 flex flex-col sm:flex-row '>
                <div onClick={(e) => {
                    e.preventDefault()
                    fetch('/CVAntonioMoccia.pdf').then(res => {
                        return res.blob()
                    }).then(response => {
                        const blob = new Blob([response], { type: 'application/pdf' })
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a')
                        link.href = url;
                        link.download = 'AntonioMocciaCV.pdf';
                        link.click();
                        window.URL.revokeObjectURL(url);                 
                    })

                }} className=' text-center cursor-pointer lg:hover:bg-white lg:hover:text-black bg-transparent py-2 px-6 text-white border-white rounded-full border-2'>Download CV</div>
                {<a href='#contacts' className=' text-center cursor-pointer lg:hover:bg-white lg:hover:text-black bg-white py-2 px-6 text-black border-black rounded-full border-2'>Speak me about your idea</a>}
            </div>
        </section>
    )
}

export default Hero