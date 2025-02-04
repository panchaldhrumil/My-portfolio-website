import React from 'react'
import './work.css'
import Workcard from './Workcard'
import projectcardData  from '../../components/data/data'

const Work = (props) => {
  return (
    <div className='workcontainer'>

         {projectcardData .map((val,ind)=>{
          return (
              <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              />
          );
         })}
    </div>
  )
}

export default Work
