'use client'
import React, { useEffect, useState } from 'react'
import TextGradient from '../TextGradient'
import { Poppins } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['devanagari', 'latin', 'latin-ext']
})
type Course = {
  title: string,
  image: string,
  platform: string
}
const Courses: Course[] = [
  {
    title: 'React js',
    image: './attestato-react.jpg',
    platform: 'udemy'
  },  {
    title: 'React js',
    image: './attestato-react.jpg',
    platform: 'udemy'
  },  {
    title: 'React js',
    image: './attestato-react.jpg',
    platform: 'udemy'
  },{
    title: 'React js',
    image: './attestato-react.jpg',
    platform: 'udemy'
  },
]


function Education() {
    const [innerWidth,setInnerWidth] = useState(0)
  useEffect(()=>{
    setInnerWidth(window.innerWidth)
  },[])
  return (
    <section id='education' className='lg:px-80 min-h-screen w-full pt-20 px-5'>
      <h1 className={`uppercase text-2xl font-bold text-white w-full text-center ${poppins.className}`}>
        <TextGradient>
          My educations
        </TextGradient>
      </h1>
      <div className='mt-20'>
      {/*   <h4 className=' text-white w-full text-center mb-4 text-lg'>Courses</h4> */}
        <Swiper
          spaceBetween={50}
          slidesPerView={innerWidth >= 900 ? 2 : 1}
          className=' h-96'
          scrollbar={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {
            Courses.map(({ title, image, platform }: Course, index: number) => (
              <SwiperSlide key={index} className=' rounded-lg text-white h-72 w-28 lg:w-40 bg-[rgb(34,34,34)] '>
                <div className='w-full h-full flex flex-col justify-between py-10 items-center'>
                  <div className='w-full px-4  h-8  flex items-center'>
                    {/**TITLE */}
                    <h1 className=' text-xl font-semibold'>{title}</h1>
                  </div>
                  <div className='w-full px-4'>
                    <img src={image} />
                  </div>
            
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Education