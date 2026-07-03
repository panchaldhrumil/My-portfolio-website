import React from 'react'
import Navbar from '../Navbar'
import Work from './Work'
import Footer from '../Footer'

const Project = () => {
  return (
    <div style={{ paddingTop: 'var(--nav-height, 64px)' }}>
      <Navbar />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
