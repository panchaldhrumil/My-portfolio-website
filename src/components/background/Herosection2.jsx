import React, { Component } from 'react'
import background2 from '../../assets/background2.jpg'
import './Herosection2.css'


class Herosection2 extends Component {
    render(){
        return (
            <div>
                <div>
                     <img src={background2} alt="background" style={{ backgroundSize:'cover',width:'100vw'}} />
                </div>
               <div className='text'>
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.para}</p>
               </div>
            </div>
          )
    }
 
}

export default Herosection2
