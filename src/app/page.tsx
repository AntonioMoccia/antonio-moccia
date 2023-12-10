import Banner from '@/components/Banner'
import Education from '@/components/Education'
import Experiences from '@/components/Experiences'
import Hero from '@/components/Hero'
import Knowladges from '@/components/Knowladge'
import NavBar from '@/components/NavBar'
import Image from 'next/image'


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center `}>
      {/* <Banner /> */}
      <NavBar />
      <Hero />
      <Knowladges />
      <Experiences />
      <Education />
    </main>
  )
}
