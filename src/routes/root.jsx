import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
import Hero from "../components/layouts/Hero"
import Testimonials from '../components/testimonials/Testimonials'
import ImageWithText from '../components/layouts/ImageWithText'
import Image1 from '../components/utils/Image1'
import Image2 from '../components/utils/Image2'
import Image3 from '../components/utils/Image3'
import Image4 from '../components/utils/Image4'
import Banner from '../components/layouts/Banner'


function Root() {

  return (
    <>
      <Hero />
      <Testimonials />
      <ImageWithText title={"Body Editor"} text={"Our groundbreaking technology empowers individuals of all backgrounds to effortlessly transform their bodies to perfection. With our user-friendly interface, no prior skills or expertise are required."}>
        <Image1 />
      </ImageWithText>
      <ImageWithText reverse={true} title={"Magic Retouch"} text={"Effortlessly make your selfies shine with natural-looking enhancements that exude professionalism and charm."}>
      <Image2 />
      </ImageWithText>
      <ImageWithText title={"Magic Protection"} text={"Our advanced technology seamlessly integrates body adjustments while expertly safeguarding the background from any distortions."}>
        <Image3 />
      </ImageWithText>
      <ImageWithText reverse={true} title={"Magic Remover"} text={"It works tirelessly to automatically detect objects within your visuals, leaving you with the ease of a single click to remove them"}>
        <Image4 />
      </ImageWithText>
      <Banner />
    </>
  )
}

export default Root
