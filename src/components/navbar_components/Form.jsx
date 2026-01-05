// import { WidthFull } from "@mui/icons-material"
// import "./Formstyle.css"

// import React from 'react'

// const Form = () => {
//   return (
//     <div style={{width:'100vw'}}>
//        <form action="">
//             <label htmlFor="">Your Name</label> 
//             <input type="text"></input> 
            
//             <label htmlFor="">Your Email</label> 
//             <input type="text"></input>  
           
//             <label htmlFor="">Message</label> 
//             <textarea name="" rows={6} placeholder="Type your message here" id=""></textarea>
            
//             <button className="btn" style={{maxWidth:'600px',textAlign:'center'}} >Submit</button>
//        </form> 
//     </div>
//   )
// }

// export default Form


import "./Formstyle.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="contact-form">
        <h2>Get in Touch</h2>

        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
