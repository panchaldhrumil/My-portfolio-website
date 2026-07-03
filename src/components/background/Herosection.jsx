import './Herosection.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import professional from '../../assets/professional_pic.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  }),
};

const Herosection = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* Photo */}
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={professional} className="mypic" alt="Dhrumil Panchal" />
        </motion.div>

        {/* Text block */}
        <div className="hero-text-block">
          <motion.p
            className="hero-greeting"
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Dhrumil Panchal
          </motion.h1>

          <motion.p
            className="hero-role"
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            B.Tech EE @ NIT Surat
          </motion.p>

          <motion.p
            className="hero-bio"
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Passionate about building intelligent software that solves real-world problems through AI, data, and scalable systems. Currently exploring Agentic AI,machine learning, data analytics, and full-stack development while continuously strengthening my problem-solving skills. Visit the{' '}
            <Link to="/About" className="hero-inline-link">About</Link> page to know more.
          </motion.p>

          <motion.div
            className="hero-cta"
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Link className="btn" to="/project">View Projects</Link>
            <Link className="btn-outline" to="/contact">Contact Me</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
