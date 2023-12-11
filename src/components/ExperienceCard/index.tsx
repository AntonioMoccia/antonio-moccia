
import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

import React from 'react'
import NextImage from '../NextImage'

export type Experience = {
  period: string
  company_name: string
  company_logo?: {
    url: string,
    alt: string,
    dimensions: {
      height: number,
      width: number
    }
  }
  description?: RichTextField
}
function ExperienceCard({ experience }: { experience: Experience }) {

  return (
    <div className='  min-w-full justify-between items-center flex-col  text-white bg-transparent flex '>
      <div className=' w-full flex justify-between px-3 py-2 items-center'>
        <h1 className=' text-xl h-full flex items-center gap-2'>
          {experience.company_logo?.url ? <div className=' w-11 h-auto'><NextImage image={experience.company_logo} /></div> : ''}{experience.company_name}
        </h1>
        <h4 className=' text-sm flex items-center justify-center text-[#8491A0]'>{experience.period}</h4>
      </div>
      <div className=' px-3'>
        <div className='text-[#C5C5C5]'>
          <PrismicRichText field={experience.description} />
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard