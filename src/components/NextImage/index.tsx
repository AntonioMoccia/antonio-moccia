import Image from 'next/image'
import React from 'react'

type NextImageProps = {
    image: {
        url: string,
        alt: string,
        dimensions: {
            width: number,
            height: number
        }
    },
    className?: string
}

function NextImage({ image, className }: NextImageProps) {
    return (
        <Image className={className} src={image.url} width={image.dimensions.width} height={image.dimensions.height} alt={image.alt} />
    )
}

export default NextImage