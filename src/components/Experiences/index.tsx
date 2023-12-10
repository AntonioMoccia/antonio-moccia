import React from 'react'
import ExperienceCard, { Experience } from './ExperienceCard'
import TextGradient from '../TextGradient'
import { Poppins } from 'next/font/google'

const ExperiencesData: Experience[] = [
  {
    date: 'dec 2018 - gen 2019',
    title: 'Lutech SPA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, neque officiis amet tenetur dicta dignissimos cupiditate distinctio at, repellat deserunt delectus, nobis aspernatur ipsum rem. Eveniet sequi minima nostrum libero?'
  },
  {
    date: 'dec 2018 - gen 2019',
    title: 'Lutech SPA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, neque officiis amet tenetur dicta dignissimos cupiditate distinctio at, repellat deserunt delectus, nobis aspernatur ipsum rem. Eveniet sequi minima nostrum libero?'
  }
]

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['devanagari', 'latin', 'latin-ext']
})


function Experiences() {
  return (
    <section className='lg:px-80 min-h-screen w-full pt-20 px-5'>
      <h1 className={`uppercase text-2xl font-bold text-white w-full text-center ${poppins.className}`}>
        <TextGradient>
          My experiences
        </TextGradient>
      </h1>
      <div className='mt-8 flex gap-8 flex-col '>
        {
          ExperiencesData.map((experience: Experience, index: number) => {
            return (<ExperienceCard key={index} experience={experience} />)
          })
        }
      </div>
    </section>
  )
}

export default Experiences