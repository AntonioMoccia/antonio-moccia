import React from 'react'
import CircleProgress from '../CircleProgress'

function Badge({ knowladge }: { knowladge: { name: string, level: number, image: string } }) {
    return (
        <div className=' min-w-full   justify-between items-center px-5 py-3  text-white  bg-[rgb(34,34,34)] flex rounded-xl h-26'>
            <div className='flex w-[100px] h-full flex-col items-center justify-center'>
                <img className='w-14 h-auto' src={knowladge.image} />
                {/*                 <h1 className=''>{knowladge.name}</h1> */}
            </div>
            <div className='h-full w-auto'>
            <CircleProgress percentage={knowladge.level} circleWidth={60} />
{/*                 <p>{knowladge.level} / 10</p> */}
            </div>
        </div>
    )
}

export default Badge