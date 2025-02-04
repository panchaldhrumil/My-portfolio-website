import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Herosection2 from '../background/Herosection2'
import Form from './Form'

const Contact = () => {
  return (
    <div>
      {/* <h3>Contact</h3> */}
      <Navbar />
      <Herosection2 heading="CONTACT" para="Lets have a chat"/>
      <Form />
      <Footer />

    </div>
  )
}

export default Contact
