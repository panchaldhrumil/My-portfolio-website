import React from 'react';
import './Aboutcontent.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaEnvelope } from 'react-icons/fa';

const Aboutcontent = () => {
  return (
    <section className="about-container">

      {/* ── Heading ── */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        Who Am I?
      </motion.h2>

      {/* ── Bio ── */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <p>
          I'm a B.Tech Electrical Engineering student at NIT Surat with a strong passion for Artificial Intelligence, Data Science, Backend Engineering, and Machine Learning. I enjoy building technology that solves real-world problems, transforming raw data into actionable insights, and continuously exploring how intelligent systems can create meaningful impact.
        </p>

        <p>
          I'm currently strengthening my expertise through hands-on projects, Data Structures & Algorithms, SQL, backend development, and AI applications. Every project I build is an opportunity to learn, improve, and become a better engineer than I was yesterday.
        </p>

        <p>
          What defines me isn't knowing everything—it's my willingness to learn relentlessly, embrace challenges, and stay consistent. I believe long-term success comes from curiosity, discipline, and continuous improvement rather than short-term talent.
        </p>

        { <p className="highlight">
          Build. Learn. Improve. Repeat.
        </p> }


      </motion.div>

      {/* ── Explore section ── */}
      <motion.div
        className="about-explore"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h3 className="about-explore__heading">Explore My Work</h3>
        <p className="about-explore__sub">
          Dive into the things I've built and the milestones I've earned.
        </p>

        <div className="about-explore__cards">

          {/* Projects card */}
          <Link to="/project" className="explore-card explore-card--projects">
            <div className="explore-card__icon"><FaCode size={28} /></div>
            <div className="explore-card__body">
              <h4>Projects</h4>
              <p>ML models, full-stack apps, data dashboards &amp; more.</p>
            </div>
            <span className="explore-card__arrow">→</span>
          </Link>

          {/* Achievements card */}
          <Link to="/achievements" className="explore-card explore-card--achievements">
            <div className="explore-card__icon"><FaTrophy size={28} /></div>
            <div className="explore-card__body">
              <h4>Achievements</h4>
              <p>Competitions, open-source contributions &amp; certifications.</p>
            </div>
            <span className="explore-card__arrow">→</span>
          </Link>

        </div>
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.25 }}
        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        <Link to="/contact" className="about-btn">
          <FaEnvelope size={14} style={{ marginRight: '8px' }} />
          Let's Connect
        </Link>
      </motion.div>

    </section>
  );
};

export default Aboutcontent;
