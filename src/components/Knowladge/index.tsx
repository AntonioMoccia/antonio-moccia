import React from 'react'
import Badge from './Badge'
import { Poppins } from 'next/font/google'
import TextGradient from '../TextGradient'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    subsets: ['devanagari', 'latin', 'latin-ext']
})

const knowladges = [
    {
        name: 'Tailwind css',
        level: 10
    },
    {
        name: 'Tailwind css',
        level: 10
    },
    {
        name: 'Tailwind css',
        level: 10
    },
    {
        name: 'Tailwind css',
        level: 10
    }
]

function Knowladges() {
    return (
        <section id='knowladges' className=' py-10 flex justify-center gap-12 flex-col  w-full px-5'>
            <h1 className={`uppercase text-2xl font-bold text-white w-full text-center ${poppins.className}`}>
                <TextGradient>
                    My knowladges
                </TextGradient>
            </h1>
            <div className='flex flex-col items-center justify-center gap-4 w-full '>
                {
                    knowladges.map((knowladge, index) => {
                        return (
                            <Badge key={index} knowladge={knowladge} />
                        )
                    })
                }
            </div>
        </section>
    )
}



export default Knowladges