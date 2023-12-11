import Banner from '@/components/Banner'
import Education from '@/components/Education'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Knowladges from '@/components/Knowladge'
import NavBar from '@/components/NavBar'
import { createClient } from '../prismicio'
import {  HomeDocumentDataSlicesSlice } from '../../prismicio-types'
import { poppins } from '@/constants/Poppins'


function getSliceByName(slices: HomeDocumentDataSlicesSlice[], name: string) : any {
  return slices.filter(slice => {
    return slice.slice_type === name
  })[0]
}

export default async function Home() {

  const PrismicClient = await createClient()

  const home = await PrismicClient.getByUID('home', 'home')


  return (
    <main className={`flex min-h-screen flex-col items-center ${poppins.className} `}>
      {/* <Banner /> */}
      <NavBar />
      <Hero data={getSliceByName(home.data.slices, 'hero')} />
      <Knowladges data={getSliceByName(home.data.slices,'knowladges')} />
      <Experiences data={getSliceByName(home.data.slices, 'experiences')} />
      <Education data={getSliceByName(home.data.slices, 'education')} />
      <Footer />
    </main>
  )
}
