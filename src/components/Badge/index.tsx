'use client'
import React, { useEffect } from 'react'
import CircleProgress from '../CircleProgress'
import Image from 'next/image'
import NextImage from '../NextImage'

function Badge({ knowladge }: { knowladge: { title: string, level: number, technologylogo: { url: string, alt: string, dimensions: { width: number, height: number } } } }) {

    return (
        <div className=' min-w-full justify-between items-center px-5 py-3  text-white  bg-[rgb(34,34,34)] flex rounded-xl h-26'>
            <div className='  flex w-auto h-full flex-row gap-4 items-center justify-center'>
                <NextImage image={knowladge.technologylogo} className='w-14 h-auto rounded-md' />
                {<h1 className=' font-semibold'>{knowladge.title}</h1>}
            </div>
            <div className='h-full w-auto'>
                <CircleProgress percentage={knowladge.level} circleWidth={60} />
            </div>
        </div>
    )
}

export default Badge