import React from 'react'
import TextGradient from '../TextGradient'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['devanagari', 'latin', 'latin-ext']
})

function Education() {
  return (
    <section className='lg:px-80 min-h-screen w-full pt-20 px-5'>
      <h1 className={`uppercase text-2xl font-bold text-white w-full text-center ${poppins.className}`}>
        <TextGradient>
          My educations
        </TextGradient>
      </h1>
    </section>
  )
}

export default Education