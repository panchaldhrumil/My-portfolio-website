import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Herosection2 from '../background/Herosection2'
import Aboutcontent from './Aboutcontent'
import { TbBackground } from 'react-icons/tb'

const About = () => {
  return (
    <div>
      {/* <h3>About</h3> */}
      <Navbar />
      <Herosection2 heading="WHO AM I" style={{ backgroundColor:'#172A45' }} />
      <Aboutcontent />
      <Footer />
     
    </div>
  )
}

export default About
