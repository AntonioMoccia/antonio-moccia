import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { IoIosMail , IoIosPhonePortrait} from "react-icons/io";

function Footer() {
    return (
        <section id='footer' className='lg:px-80 py-12 lg:pt-24 flex justify-start gap-12 flex-col bg-[rgb(34,34,34)] w-full px-5'>
            <div className=' flex flex-col gap-4'>
                {/**NUMBER PHONE */}
                <div className='flex gap-2 items-center text-white '>
                    <IoIosPhonePortrait className={' text-white text-xl'} /><a href='tel:+393314487994'>+39 3314487994</a>
                </div>
                {/** EMAIL */}
                <div className='flex gap-2 items-center text-white '>
                    <IoIosMail className={' text-white text-xl'} /><a href='mailto:+393314487994'>moccia.ant@gmail.com</a>
                </div>
            </div>

            <div className=' flex  h-10 items-center gap-3'>
                {/**GITHUB */}
                <Link href={'https://github.com/AntonioMoccia'}>
                    <FaGithub className={' text-white text-2xl'} />
                </Link>

                {/**INSTAGRAM*/}
                <Link href={'https://www.instagram.com/antoniomoccia_'}>
                    <FaInstagram className={' text-white text-2xl'} />
                </Link>

                {/**LINKEDIN */}
                <Link href={'https://www.linkedin.com/in/antonio-moccia-01ba35130/'}>
                    <FaLinkedin className={' text-white text-2xl'} />
                </Link>
            </div>
        </section>
    )
}

export default Footer