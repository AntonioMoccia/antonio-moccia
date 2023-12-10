'use client'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['devanagari', 'latin', 'latin-ext']
})

function Hero() {
    return (

        <section id='Home' className=' mt-0 min-h-screen w-full gap-2 flex flex-col justify-center px-4 items-center'>
            <div className='  bg-gradient-to-tl from-[rgb(255,134,96)] to-[rgb(128,0,255)] w-56 flex justify-center h-56 rounded-full'>
                <img src="/Avatar.png" alt="Avatar" />
            </div>
            <div className=' w-full '>
                <h1 className={`text-white text-center text-5xl font-bold ${poppins.className}`} >
                    code your <span className='text-transparent bg-clip-text bg-gradient-to-tl from-[rgb(255,134,96)] to-[rgb(128,0,255)] '>ideas</span>
                </h1>
            </div>
            <div className='  max-w-4xl'>
                <p className='text-[#C5C5C5] text-center px-18 md:px-48'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis neque ex, eaque magni libero quae soluta labore esse animi! Ullam ipsa dolores veritatis maiores tempora magni vitae error quas.
                </p>
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
                        /*   document.removeChild(link) */
                        //                        const url = URL.createObjectURL(new Blob(response)))                        
                    })

                }} className=' text-center cursor-pointer lg:hover:bg-white lg:hover:text-black bg-transparent py-2 px-6 text-white border-white rounded-full border-2'>Download CV</div>
                {<a className=' text-center cursor-pointer lg:hover:bg-white lg:hover:text-black bg-white py-2 px-6 text-black border-black rounded-full border-2'>Speak me about your idea</a>}
            </div>
        </section>
    )
}

export default Hero