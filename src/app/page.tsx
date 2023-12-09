import Hero from '@/components/Hero'
import Knowladges from '@/components/Knowladge'
import NavBar from '@/components/NavBar'
import Image from 'next/image'


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center `}>
      <NavBar />
      <Hero />
      <Knowladges />
    </main>
  )
}
