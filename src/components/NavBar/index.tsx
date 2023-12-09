import React from 'react'
import Logo from './Logo'
import Link from 'next/link'



function NavBar() {
  return (
    <div className='bg-[rgb(34,34,34)] w-screen fixed top-0 left-0 right-0 z-50 h-16 flex justify-between '>
       {/*  <Logo /> */}
     {/*    <div className=' bg-green-300 w-screen absolute left-0'>
            <ul className='flex flex-col gap-8 items-center justify-start pt-52 h-full '>
                <Link href={'/#'}><li className='bg-red-200 w-full text-center text-4xl py-2'>Home</li></Link>
                <Link href={'/#'}><li className='bg-red-200 w-full text-center text-4xl py-2'>Knowladge</li></Link>
                <Link href={'/#'}><li className='bg-red-200 w-full text-center text-4xl py-2'>Contacts</li></Link>
            </ul>
        </div> */}
    </div>
  )
}

export default NavBar