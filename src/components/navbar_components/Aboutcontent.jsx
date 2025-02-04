import React from 'react'
import './Aboutcontent.css'
import { Link } from 'react-router-dom';

const Aboutcontent = () => {
  return (
    <div className='Aboutcontainer'>
        {/* <div style={{fontSize:'30px'}}>
        WHO AM I?
        </div> */}
        <div className='content'>
      Hi, I'm Dhrumil Panchal, a passionate web developer and an undergraduate student pursuing a B.Tech in Electrical Engineering at Sardar Vallabhbhai National Institute of Technology (SVNIT) Surat. I thrive on problem-solving and innovation, constantly exploring new technologies to build impactful solutions. My projects, such as Pulsometer, an ESP32-based heart rate monitoring system, and Get Me Chai, a dynamic frontend project, reflect my enthusiasm for development. Currently, I'm diving deeper into the world of AI & ML, aiming to bridge the gap between intelligent systems and real-world applications. With a strong foundation in web development, I'm always eager to learn, create, and contribute to cutting-edge solutions.
      </div>
      <div>
        <Link to={'/Contact'}>
           <h3 className='btn' style={{fontWeight:'bold',color: 'black'}} >About</h3>
        </Link>
      </div>
    </div>
  )
}

export default Aboutcontent
