import React from 'react'

export type Experience = {
  date: string
  title: string
  icon?: string
  description?: string
}
function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className='  min-w-full lg:min-w-[50vw] justify-between items-center flex-col  text-white bg-transparent flex '>
      <div className=' w-full flex justify-between px-3 py-2'>
        <h1 className=' text-xl'>
          {experience.icon ? <experience.icon /> : ''}{experience.title}
        </h1>
        <h4 className=' text-sm text-[#8491A0]'>{experience.date}</h4>
      </div>
      <div className=' px-3'>
    <p className='text-[#C5C5C5]'>
      {experience.description}
    </p>
      </div>
    </div>
  )
}

export default ExperienceCard