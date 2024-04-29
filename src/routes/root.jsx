import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
import Hero from "../components/layouts/Hero"
import Testimonials from '../components/testimonials/Testimonials'


function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Testimonials />
    </>
  )
}

export default Root
