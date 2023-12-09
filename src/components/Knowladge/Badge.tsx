import React from 'react'

function Badge({ knowladge }: { knowladge: { name: string, level: number } }) {
    return (
        <div className=' min-w-full lg:min-w-[50vw] justify-between items-center px-5  text-white  bg-[rgb(34,34,34)] flex rounded-xl h-20'>
            <div>
                <h1 className=''>{knowladge.name}</h1>
            </div>
            <div>
                <p>{knowladge.level} / 10</p>
            </div>
        </div>
    )
}

export default Badge