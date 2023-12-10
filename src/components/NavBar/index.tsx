'use client'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import gsap from 'gsap';

type NavItem = {
  link: string,
  label: string
}

function NavBar() {
  const [open, setOpen] = useState(false)
  const navItemsRef = useRef(null)
  const NAV_LINKS: NavItem[] = [
    {
      label: 'Home',
      link: '/#home'
    },
    {
      label: 'Knowladges',
      link: '/#knowladges'
    },
    {
      label: 'Experiences',
      link: '/#experiences'
    },
    {
      label: 'Education',
      link: '/#education'
    }
  ]

  function toggleOpenClose() {
    if (!open && window.innerWidth < 1024) {
      gsap.to(navItemsRef.current, {
        x: '100%'
      })
    } else {
      gsap.to(navItemsRef.current, {
        x: 0
      })
    }
  }

  useEffect(() => {
    toggleOpenClose()
  }, [open])
  return (
    <nav className='bg-[rgb(34,34,34)] w-screen fixed top-0 left-0 right-0 px-4 lg:px-80 h-16 flex justify-between z-50'>
      <div className='absolute z-30 right-4 h-full cursor-pointer lg:hidden flex justify-center items-center text-xl  text-white'
        onClick={() => {
          setOpen(!open)
        }}
      >
        {open ? <CgClose /> : <HiMenu />}
      </div>

      <Logo />

      {/* navbar items*/}
      <div ref={navItemsRef} className='bg-[rgb(34,34,34)] lg:w-auto lg:h-full lg:translate-x-0 translate-x-[100%] h-screen flex justify-center items-center lg:top-0  bottom-0 z-0 w-screen absolute lg:relative top-16 left-0 lg:right-0 '>
        <ul className='flex flex-col gap-8 items-center justify-start pt-24 lg:pt-0  w-full  h-full lg:flex-row lg:gap-10'>
          {
            NAV_LINKS.map(({ link, label }: NavItem, index) => {
              return (
                <Link href={link} key={index} onClick={() => { setOpen(false) }} className=' text-2xl lg:text-sm font-normal text-white'><li>{label}</li></Link>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
/**lg:translate-y-0 translate-y-[-150%] */