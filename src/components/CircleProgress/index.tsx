import React from 'react'

function CircleProgress({percentage,circleWidth}:{percentage:number,circleWidth:number}) {
    const radius = 25
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100
    return (
    <div>
        <svg
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
            <linearGradient id='gradient'>
                <stop offset='10%' stop-color='rgb(255,255,255)' />
                <stop offset='100%' stop-color='#ddd' />
            </linearGradient>
            <circle 
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth={'0.3rem'}
                r={radius}
                className=' fill-none '
            />
            <circle 
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth={'0.3rem'}
                r={radius}
                stroke='url(#gradient)'
                style={{
                    strokeDasharray:dashArray,
                    strokeDashoffset:dashOffset,
                    strokeLinecap:'round',
                    strokeLinejoin:'round'
                }}
                className=' fill-none '
                transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
            />
            <text 
            x={'50%'}
            y={'50%'}
            dy={'0.3em'}
            textAnchor='middle' 
            className='text-white stroke-white text-xs stroke-1'>
                {percentage / 10}/10
            </text>
        </svg>
    </div>
  )
}

export default CircleProgress