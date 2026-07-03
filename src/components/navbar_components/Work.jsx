import React from 'react';
import './work.css';
import Workcard from './Workcard';
import projectcardData from '../../components/data/data';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <section className="work-section">
      <motion.div
        className="work-section__header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="work-section__title">Projects</h2>
        <p className="work-section__subtitle">
          A selection of work spanning data science, machine learning, and full-stack development.
        </p>
      </motion.div>

      <div className="workcontainer">
        {projectcardData.map((val, ind) => (
          <motion.div
            key={ind}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (ind % 3) * 0.1 }}
          >
            <Workcard
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              techStack={val.techStack}
              github={val.github}
              live={val.live}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
