import React from 'react'
import './work.css'
// import pulsometer from '../../assets/pulsometer_project.jpg'
import { NavLink } from 'react-router-dom'

const Workcard = (props) => {
  return (
 
      <div className="card">
       <img src={props.imgsrc} alt=''  />
       <div style={{justifyContent:'center'}} >
       <h2>{props.title}</h2>
       <p>{props.text}</p>
       </div>
      <div>
       <div style={{ display:'flex', gap:'10px',justifyContent:'center'}}>
        <NavLink to={props.view} className="btn">View</NavLink>
        <NavLink to="url.com" className="btn">Source</NavLink>
       </div>
       </div>
      </div>

  )
}

export default Workcard