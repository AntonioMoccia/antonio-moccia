
import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import React from 'react'

export type Experience = {
  period: string
  company_name: string
  company_logo?: {
    url?:string
  }
  description?: RichTextField
}
function ExperienceCard({ experience }: { experience: Experience }) {

  return (
    <div className='  min-w-full lg:min-w-[50vw] justify-between items-center flex-col  text-white bg-transparent flex '>
      <div className=' w-full flex justify-between px-3 py-2'>
        <h1 className=' text-xl'>
          {experience.company_logo?.url ? <img src={experience.company_logo.url} /> : ''}{experience.company_name}
        </h1>
        <h4 className=' text-sm text-[#8491A0]'>{experience.period}</h4>
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