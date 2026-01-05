// import React from 'react'
// import './Aboutcontent.css'
// import { Link } from 'react-router-dom';

// const Aboutcontent = () => {
//   return (
//     <div className='Aboutcontainer'>
//         {/* <div style={{fontSize:'30px'}}>
//         WHO AM I?
//         </div> */}
//         <div className='content'>
//           <div>
//             I’m passionate about finance and aiming to
//               transition into financial analysis, risk, or data-driven decision-making roles.
//               Always eager to learn, solve problems, and take on challenging opportunities. so this was all about my Basic Intro but what makes me diffrent from the rest of the crowd is, You may find someone who is naturally more talented than me but i can gurantee you, that it is hard for you to find someone having more willingness to learn, more curiosity and more workoholic than me. what i belive is, obsession beats talent every single time. and i am the one who is obsessed with growth and always tend to make my 
//       </div>
//       <div>
//        {"tommorow >> past"}.
//        </div>
//       </div>
//       <div>
//         <Link to={'/Contact'}>
//            <h3 className='btn' style={{fontWeight:'bold',color: 'black'}} >About</h3>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Aboutcontent




import React, { useState } from 'react'
import './Aboutcontent.css'
import { Link } from 'react-router-dom'


import ifta1 from '../../assets/ifta1.jpeg'
import ifta2 from '../../assets/ifta2.jpeg'
import ifta3 from '../../assets/ifta3.jpeg'

import Hacktoberfest1 from '../../assets/Hacktoberfest1.jpeg'
import Hacktoberfest2 from '../../assets/Hacktoberfest2.jpeg'
import Hacktoberfest3 from '../../assets/Hacktoberfest3.jpeg'

import suchi1 from '../../assets/suchi1.jpeg'
import suchi2 from '../../assets/suchi2.jpeg'

import mun1 from '../../assets/mun1.jpg'
import mun2 from '../../assets/mun2.jpeg'

const AchievementCard = ({ title, desc, images }) => {
  const [expanded, setExpanded] = useState(false)
  const [activeImg, setActiveImg] = useState(null)
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % images.length)
  const prev = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <>
      <div className="achievement-card">
        {/* IMAGE SLIDER */}
        <div className="slider">
          <img
            src={images[index]}
            alt={title}
            onClick={() => setActiveImg(images[index])}
          />

          {images.length > 1 && (
            <>
              <button className="nav left" onClick={prev}>❮</button>
              <button className="nav right" onClick={next}>❯</button>
            </>
          )}
        </div>

        {/* CONTENT */}
        <h3>{title}</h3>

        <p className={`desc ${expanded ? 'expanded' : ''}`}>
          {desc}
        </p>

        <button
          className="read-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </div>

      {/* IMAGE MODAL */}
      {activeImg && (
        <ImageModal img={activeImg} onClose={() => setActiveImg(null)} />
      )}
    </>
  )
}

/* ===== IMAGE MODAL ===== */

const ImageModal = ({ img, onClose }) => {
  const [zoom, setZoom] = useState(1)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img}
          alt="Zoomed"
          style={{ transform: `scale(${zoom})` }}
        />

        <div className="zoom-controls">
          <button onClick={() => setZoom(z => Math.min(z + 0.2, 3))}>＋</button>
          <button onClick={() => setZoom(z => Math.max(z - 0.2, 1))}>－</button>
          <button onClick={onClose}>✕</button>
        </div>
      </div>
    </div>
  )
}


const Aboutcontent = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">Who Am I?</h2>

      <div className="about-content">
        <p>
          I’m deeply interested in finance and currently working towards
          transitioning into roles involving <span>financial analysis</span>,
          <span> risk assessment</span>, and <span>data-driven decision making</span>.
        </p>

        <p>
          so this was all about my Basic Intro,
          What sets me apart is not just skill, but mindset. You may find someone
          more naturally talented than me, but i can gurantee you, it’s rare to find someone 
          having more willingness to learn, more curiosity and more workoholic than me.
        </p>

        <p className="highlight">
          I strongly believe that <strong>obsession beats talent</strong> every
          single time.
          and i am the one who is obsessed with growth and always tend to make my,
        </p>

        <p className="tagline">Tomorrow &gt;&gt; Past</p>
      </div>

       <h2 className="about-title achievement-title">Achievements</h2>

      <div className="achievement-grid">
        <AchievementCard
          title="National Finalist"
          desc="I qualified as a National Finalist in the FinTech Olympiad conducted by IFTA, competing among thousands of participants nationwide.What makes this even more special is that the competition was participated in solo, and out of all participants, only 125 candidates made it to the national finalist stage, and I’m grateful to be one of them."
          images={[ifta1, ifta2, ifta3]}
        />

        <AchievementCard
          title="Software Engineering intern at Suchi Semicon "
          desc="I am glad to have successfully completed my internship at Suchi Semicon, Surat, where I got the opportunity to work on a real-world industry project that strengthened both my technical and problem-solving skills.This internship not only enhanced my technical knowledge but also gave me exposure to how industries manage and validate their critical workflows digitally."
          images={[suchi1, suchi2]}
        />

        <AchievementCard
          title="Open Source Contributor"
          desc="I participated in Hacktoberfest 2025 and i earned all the badges upto super contributer badge. Also only first 10 thousands people around the worlds will get merchandise. and i am grateful i was one of them. But here’s the best part — as appreciation for contributing to open source, a tree is being planted on my behalf in Ammanambakkam village, Chengalpattu taluk, Kancheepuram district, Tamil Nadu, India."
          images={[Hacktoberfest1, Hacktoberfest2,Hacktoberfest3]}
        />

        <AchievementCard
          title="Delegate of Pakistan – Model United Nations (MUN)"
          desc="Represented Pakistan as a delegate in a Model United Nations conference, actively participating in high-level diplomatic debates, policy negotiations, and resolution drafting on international affairs. Advocated national interests while maintaining diplomatic decorum, engaging in strategic alliances, and addressing complex global challenges. The experience strengthened my skills in public speaking, research, negotiation, and geopolitical analysis"
          images={[mun1, mun2]}
        />

      </div>


      <Link to="/Contact" className="about-btn">
        Let’s Connect
      </Link>
    </section>
  )
}

export default Aboutcontent
