import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io";

function Footer() {
    return (
        <section id='footer' className='lg:px-52 mt-20 py-12 lg:pt-24 flex justify-end gap-12 flex-col bg-[rgb(34,34,34)] w-full px-5'>



            
            <div className=' flex  h-auto items-center gap-3'>
                {/**GITHUB */}
                <Link href={'https://github.com/AntonioMoccia'}>
                    <FaGithub className={' text-white text-xl'} />
                </Link>

                {/**INSTAGRAM*/}
                <Link href={'https://www.instagram.com/antoniomoccia_'}>
                    <FaInstagram className={' text-white text-xl'} />
                </Link>

                {/**LINKEDIN */}
                <Link href={'https://www.linkedin.com/in/antonio-moccia-01ba35130/'}>
                    <FaLinkedin className={' text-white text-xl'} />
                </Link>
            </div>
        </section>
    )
}

export default Footer

