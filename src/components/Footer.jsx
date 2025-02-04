import './Footer.css'
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState , useEffect} from 'react';

const Footer = () => {

    const [islaptopview , setIsLaptopView]=useState(window.innerWidth>=1040) ;

    useEffect(() => {
        const handleResize = () => {
          setIsLaptopView(window.innerWidth >= 1040);
        };
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className={islaptopview?'footcontainer' : 'footcontainer container_mob' }  >
      <div className="left" style={{marginLeft:'20px'}}>
          <ul style={{listStyleType:'none'}}>
            <li style={{display:'flex',gap:'5px',alignItems:'center'}}> 
                <div><PhoneIcon/></div> 
                <div style={{color:'#E6F1FF'}}>+91 7016263685</div>
            </li>
            <li style={{display:'flex',gap:'5px',alignItems:'center'}}> 
                <div><EmailIcon /></div>  
                 <div style={{color:'#E6F1FF'}}>dhrumil.techwork@gmail.com</div>
            </li>
          </ul>
      </div>
      <div className="right" style={{marginRight:'30px'}}>
           <ul style={{listStyleType:'none', display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
            <li style={{display:'flex',gap:'5px',alignItems:'center'}}> 
                <div><SchoolIcon style={{paddingTop:'5px'}}/></div> 
                 <div style={{color:'#E6F1FF'}} >Sophomere at SVNIT</div> 
            </li>
            <li style={{color:'#E6F1FF'}} >This is me Dhrumil Panchal. i enjoy discussing new projects and new challenges</li>
            <li>
               {/* <Link  to={"www.linkedin.com/in/dhrumil-panchal-4b8411288"} ><LinkedInIcon/></Link>  //wrong way to write */}
               <a 
              href="https://www.linkedin.com/in/dhrumil-panchal-4b8411288" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginRight: '10px', color: 'inherit' }}
                className="icon-link"
              >
              <LinkedInIcon style={{ fontSize: '24px' }}/>
            </a>
                {/* <GitHubIcon src='https://github.com/panchaldhrumil' /> //wrong way to write */}
             <a 
              href="https://github.com/panchaldhrumil" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
                className="icon-link"
            >
              <GitHubIcon style={{ fontSize: '24px' }}/>
            </a>
            </li>
           </ul>
      </div>
    </div>
  )
}

export default Footer
