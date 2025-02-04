import React from 'react'
import Navbar from '../Navbar'
import Work from './Work'
import Footer from '../Footer'
import Herosection2 from '../background/Herosection2'


const Project = () => {
  return (
    <div>
      {/* <h3>Project</h3> */}
      <Navbar />
      <Herosection2 heading="PROJECTS" para=" Below shown are my projects"/>
      <Work />
      <Footer />
    </div>
  )
}

export default Project
