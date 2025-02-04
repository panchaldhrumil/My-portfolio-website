import './Herosection.css'
import React from 'react'
import backgroundimg from '../../assets/background_img.jpg'
import { Link } from 'react-router-dom';
import professional from '../../assets/professional_pic.png'



const Herosection = () => {
  return (
    // <div className='container'>
    //   {/* <div> 
    //   <img src={backgroundimg} alt="background" style={{overflow:'hidden',width:'100vw'}} />
    //   </div> */}
    //   <div style={{display:'flex',position:'absolute',top:'270px',width:'100vw', alignItems:'center' , flexDirection:'column' , gap:'20px'}}>
    //     <div className="img1">
    //       <div>
    //          <h1 style={{color:'beige'}} > Hello,  </h1>
    //          <h3> I'm Dhrumil Panchal </h3>   
    //       </div>
    //       <div >
    //         <img src={professional} className='mypic' alt="My_Pic" />
    //       </div>
    //     </div>

    //         <p className='psize' style={{fontSize:'15px'}}>
    //                  And I'm a Developer
    //               "Passionate about building innovative solutions, I turn ideas into reality with clean, efficient code, always striving to push boundaries in web development."

    //                      Expertise in website development, frontend design, and crafting seamless digital experiences...
    //         </p>
    //     <div style={{gap:'10px',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
    //       <Link className='btn' to='/project'>Projects</Link>
    //       <Link className='btn' to='/contact'>Contact</Link>
    //     </div>
    //   </div>

    // </div>
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div style={{ display: 'flex', position: 'absolute', top: '170px', width: '100vw', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
        <div className="img1" >
          <div  style={{ display: 'flex' , gap:'20px' ,  justifyContent: 'center', alignitmes: 'center'  }}>
            <div  styel={{ display: 'felx', felxdirection: 'column', justifyContent: 'center', alignitmes: 'center', position:'relative' , top:'50px' }}>
              <h1 style={{ color: 'beige' }} > Hello,  </h1>
              <h2> I'm Dhrumil Panchal </h2>
            </div>
            <div >
              <img src={professional} className='mypic blackbac' alt="My_Pic" />
            </div>
          </div>


          <p className='psize' style={{ fontSize: '20px' }}>
            And I'm a Developer
            "Passionate about building innovative solutions, I turn ideas into reality with clean, efficient code, always striving to push boundaries in web development."
            Expertise in website development, frontend design, and crafting seamless digital experiences...
          </p>

        </div>

        <div style={{ gap: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
          <Link className='btn' to='/project'>Projects</Link>
          <Link className='btn' to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Herosection
