import React from 'react'
import ExperienceCard, { Experience } from '../ExperienceCard'
import TextGradient from '../TextGradient'

function Experiences({data}:{data:any}) {

  return (
    <section id="experiences" className='lg:px-48 md:px-36 w-full pt-20 px-5'>
      <h1 className={`uppercase text-2xl font-bold text-white w-full text-center`}>
        <TextGradient>
          My experiences
        </TextGradient>
      </h1>
      <div className='mt-8 md:grid md:grid-cols-2 flex gap-8 flex-col '>
        {
          data.items.map((experience: Experience, index: number) => {
            return (<ExperienceCard key={index} experience={experience} />)
          })
        }
      </div>
    </section>
  )
}

export default Experiences