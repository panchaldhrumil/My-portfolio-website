import React from 'react'
// import Home  from "./navbar_components/Home";
// import About from './navbar_components/About';
// import Project from './navbar_components/Project';
// import Contact from './navbar_components/Contact';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';  //for to use react icons we have to install icon library via "npm i react-icons"
import { FaTimes } from "react-icons/fa"; // A clean "times" (×) symbol
import './navbar_components/Navbar.css'


const Navbar = () => {

  const [islaptopview , setislaptopview]=useState(window.innerWidth>=1024) ;
  const [click,setclick]=useState(true) ;

 const handleclick=()=>{setclick(!click)} ;
  

  useEffect(() => {
    const handleResize = () => {
      setislaptopview(window.innerWidth >= 1024);  //we just have made one function which will update the value of "islaptopview"
    };

    window.addEventListener("resize", handleResize); // we have applied the "resize" "eventlistener" on window so whenever window size is being changed the "handlesize" function will be triggered 

    return () => {
      window.removeEventListener("resize", handleResize); //after thriggering the handlesize function, it will return the new value of "islaptopview"
    };
  }, []);

  return (
    <div style={{display:'flex' ,padding:'10px', justifyContent:'space-between' ,height:'10%',width:'100vw',position:'fixed',zIndex:'20',backgroundColor:'#0A192F' , top:'0px'  }}  >
      {/* <nav style={{width:'100%' , height:'10%' ,position:'fixed',top:'0px' , display:'flex',justifyContent:'space-around' ,margin:'0px'  }} >
          <div className="left" style={{position:'fixed',left:'15px',margin:'0px'}}><h3>Portfolio</h3></div>
          <div className="right" style={{display:'flex',marginTop:'0px',marginRight:'200px',columnGap:'15px' ,position:'fixed' ,right:'20px' }} >
         <Link to="/Home"> Home </Link>  
         <Link to="/About"> About </Link>   
         <Link to="/Project"> Project </Link>  
         <Link to="/Contact"> Contact </Link>   
          </div>
      </nav> */}
      <div>
        <Link to={"/"} >
          <h1 style={{fontFamily:'outfit',color: '#E6F1FF '}}>Portfolio</h1>
        </Link>
      </div>

      <div style={{ display:'flex',gap:'20px',marginRight:'20px' }}>

      <ul className={islaptopview ?'flex':(click?'beautify row':'beautify column')} style={{ listStyleType:'none',gap:'20px',marginRight:'20px',marginTop:'13px'}} >
      {/* <ul className='navul' > */}
       
       <div >
         <Link to={"/"}>
           <h3 style={{fontWeight:'bold',color: '#E6F1FF '}}>Home</h3>
         </Link>
       </div>

       <div>
         <Link to={"/Contact"}>
           <h3 style={{fontWeight:'bold',color: '#E6F1FF '}} >Contact</h3>
         </Link>
       </div>

       <div>
         <Link to={"/About"}>
           <h3 style={{fontWeight:'bold',color: '#E6F1FF '}} >About</h3>
         </Link>
       </div>

       <div>
         <Link to={"/Project"}>
           <h3 style={{fontWeight:'bold',color: '#E6F1FF '}} >Project</h3>
         </Link>
       </div>

     </ul>
     

   { islaptopview?null: (click? <div className='Hamburger' onClick={handleclick} > <FaBars size={20} style={{color:"white"}} /> </div> :
                                <div className='Hamburger' onClick={handleclick} > <FaTimes size={20} style={{color:"red"}} /> </div>  ) }

       
      </div>

     

    </div>
  )
}


export default Navbar

