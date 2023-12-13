'use client'
import React, { useEffect, useState } from 'react'
import NextImage from '../NextImage';

import TextGradient from '../TextGradient'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';




type Course = {
  course_title: string,
  course_image: {
    url: string,
    alt: string,
    dimensions: {
      height: number,
      width: number
    }
  },
  course_platform: string
}


function Education({ data }: { data: any }) {
  const [innerWidth, setInnerWidth] = useState(0)
  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [])
  return (
    <section id='education' className='lg:px-48 md:px-36 w-full pt-20 px-5'>
      <h1 className={`uppercase text-2xl font-bold text-white w-full text-center`}>
        <TextGradient>
          My education
        </TextGradient>
      </h1>
      <div className='mt-20'>
        {/*   <h4 className=' text-white w-full text-center mb-4 text-lg'>Courses</h4> */}
        <Swiper
          spaceBetween={50}
          slidesPerView={innerWidth >= 1200 ? 2 : 1}
          className='h-90'
          scrollbar={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {
            data.items.map(({ course_title, course_image, course_platform }: Course, index: number) => (
              <SwiperSlide key={index} className=' rounded-lg text-white h-72 w-28 lg:w-40 bg-[rgb(34,34,34)] '>
                <div className='w-full h-full flex flex-col justify-between pb-10 items-center'>
                  <div className='w-full px-4  h-14  flex items-center'>
                    {/**TITLE */}
                    <h1 className=' text-xl font-semibold'>{course_title}</h1>
                  </div>
                  <div className='w-full px-4'>
                    <NextImage image={course_image} />
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