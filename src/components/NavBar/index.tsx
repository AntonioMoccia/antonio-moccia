'use client'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { HiMenu } from "react-icons/hi";
import gsap from 'gsap';



function NavBar() {
  const [open, setOpen] = useState(false)
  const navItemsRef = useRef(null)
  useEffect(() => {
    console.log(open);

    if (!open && window.innerWidth<=1024) {
      gsap.to(navItemsRef.current, {
        y: '-150%'
      })
    } else {
      gsap.to(navItemsRef.current, {
        y: 0
      })
    }

  }, [open])
  return (
    <nav className='bg-[rgb(34,34,34)] w-screen fixed top-0 left-0 right-0 px-4 lg:px-20 h-16 flex justify-between z-50'>
      <div className='absolute z-30 right-4 h-full cursor-pointer lg:hidden flex justify-center items-center text-xl  text-white'
        onClick={() => {
          setOpen(!open)
        }}
      >
        <HiMenu />
      </div>

      <div className='text-white h-full flex items-center relative z-30'>/\///</div>
      {/* navbar items*/}
      <div ref={navItemsRef} className='bg-[rgb(34,34,34)] lg:w-auto lg:h-full  lg:translate-y-0 translate-y-[-150%] h-[40vh] flex justify-center items-center lg:top-0 bottom-0 z-0 w-full absolute lg:relative top-16 left-0 lg:right-0 '>
        <ul className='flex flex-col gap-2 items-center justify-center h-full lg:flex-row  lg:gap-10'>
          <Link href={'/#Home'}><li className='text-white w-full text-center text-2xl py-2 lg:text-sm'>Home</li></Link>
          <Link href={'/#knowladges'}><li className='text-white w-full text-center text-2xl py-2  lg:text-sm'>Knowladges</li></Link>
          {/* <Link href={'/#'}><li className='text-white w-full text-center text-2xl py-2'>Contacts</li></Link> */}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar