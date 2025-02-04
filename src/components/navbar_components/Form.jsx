import { WidthFull } from "@mui/icons-material"
import "./Formstyle.css"

import React from 'react'

const Form = () => {
  return (
    <div style={{width:'100vw'}}>
       <form action="">
            <label htmlFor="">Your Name</label> 
            <input type="text"></input> 
            
            <label htmlFor="">Your Email</label> 
            <input type="text"></input>  
           
            <label htmlFor="">Message</label> 
            <textarea name="" rows={6} placeholder="Type your message here" id=""></textarea>
            
            <button className="btn" style={{maxWidth:'600px',textAlign:'center'}} >Submit</button>
       </form> 
    </div>
  )
}

export default Form
