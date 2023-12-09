import React from 'react'

function TextGradient({children}:{children:React.ReactNode}) {
  return (
    <span className='text-transparent bg-clip-text bg-gradient-to-tl from-[rgb(255,134,96)] to-[rgb(128,0,255)] '>{children}</span>
  )
}

export default TextGradient