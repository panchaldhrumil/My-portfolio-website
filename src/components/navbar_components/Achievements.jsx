import React, { useState } from 'react';
import './Achievements.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';

// ── Certificate images ────────────────────────────────────────────────────────
import brandx from '../../assets/achivements/BrandX/BraadX.jpeg';

import ifta1 from '../../assets/achivements/fintech_olympiad/ifta1.jpeg';
import ifta2 from '../../assets/achivements/fintech_olympiad/ifta2.jpeg';
import ifta3 from '../../assets/achivements/fintech_olympiad/ifta3.jpeg';

import hack1 from '../../assets/achivements/hacktober_fest/Hacktoberfest1.jpeg';
import hack2 from '../../assets/achivements/hacktober_fest/Hacktoberfest2.jpeg';
import hack3 from '../../assets/achivements/hacktober_fest/Hacktoberfest3.jpeg';

// ── Data ──────────────────────────────────────────────────────────────────────
const achievementsData = [
  {
    title: 'Fintech Olympiad — National Finalist',
    description:
      'Qualified as a National Finalist in the FinTech Olympiad conducted by IFTA, competing solo among thousands of participants nationwide. Out of all entries, only 125 candidates reached the national finalist stage.',
    date: '2024',
    category: 'Competition',
    images: [ifta1, ifta2, ifta3],
  },
  {
    title: 'BRANDX Business Case Competition',
    description:
      'Participated in the BRANDX Business Case Competition, tackling a real-world strategic marketing challenge. Presented data-driven recommendations and creative go-to-market strategies under time pressure.',
    date: '2024',
    category: 'Competition',
    images: [brandx],
  },
  {
    title: 'Hacktoberfest 2025 — Super Contributor',
    description:
      'Earned all Hacktoberfest badges up to the Super Contributor level. Among the first 10,000 contributors worldwide to receive exclusive merchandise, and had a tree planted on my behalf in Ammanambakkam village, Tamil Nadu, India.',
    date: 'October 2025',
    category: 'Open Source',
    images: [hack1, hack2, hack3],
  },
];

// ── Image lightbox ─────────────────────────────────────────────────────────────
const Lightbox = ({ images, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);
  const [zoom, setZoom] = useState(1);

  const prev = () => { setZoom(1); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = () => { setZoom(1); setIdx((i) => (i + 1) % images.length); };

  return (
    <motion.div
      className="ach-lightbox-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="ach-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="ach-lightbox-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="ach-lightbox-img-wrap">
          <img
            src={images[idx]}
            alt="Certificate"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        {images.length > 1 && (
          <>
            <button className="ach-lightbox-nav ach-lightbox-nav--left" onClick={prev}>❮</button>
            <button className="ach-lightbox-nav ach-lightbox-nav--right" onClick={next}>❯</button>
            <div className="ach-lightbox-counter">{idx + 1} / {images.length}</div>
          </>
        )}

        <div className="ach-zoom-controls">
          <button onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}>＋</button>
          <button onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))}>－</button>
          <button onClick={() => setZoom(1)}>⟳</button>
        </div>
      </div>
    </motion.div>
  );
};

// ── Achievement card ──────────────────────────────────────────────────────────
const AchievementCard = ({ data, index }) => {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);

  const openLightbox = (i) => { setLightboxStart(i); setLightboxOpen(true); };

  return (
    <>
      <motion.div
        className="ach-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.1 }}
        whileHover={{ y: -6 }}
      >
        {/* Image slider */}
        <div className="ach-card__img-wrap">
          <img
            src={data.images[sliderIdx]}
            alt={data.title}
            className="ach-card__img"
            onClick={() => openLightbox(sliderIdx)}
            title="Click to enlarge"
          />
          <div className="ach-card__img-hint">🔍 Click to enlarge</div>

          {data.images.length > 1 && (
            <>
              <button
                className="ach-card__nav ach-card__nav--left"
                onClick={() => setSliderIdx((i) => (i - 1 + data.images.length) % data.images.length)}
              >❮</button>
              <button
                className="ach-card__nav ach-card__nav--right"
                onClick={() => setSliderIdx((i) => (i + 1) % data.images.length)}
              >❯</button>
              <div className="ach-card__dots">
                {data.images.map((_, i) => (
                  <span
                    key={i}
                    className={`ach-card__dot ${i === sliderIdx ? 'ach-card__dot--active' : ''}`}
                    onClick={() => setSliderIdx(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="ach-card__body">
          <div className="ach-card__meta">
            <span className="ach-card__category">{data.category}</span>
            <span className="ach-card__date">{data.date}</span>
          </div>
          <h3 className="ach-card__title">{data.title}</h3>
          <p className="ach-card__desc">{data.description}</p>
        </div>
      </motion.div>

      {lightboxOpen && (
        <Lightbox
          images={data.images}
          startIndex={lightboxStart}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────
const Achievements = () => {
  return (
    <div className="ach-page">
      <Navbar />

      {/* Banner */}
      <div className="ach-banner">
        <div className="ach-banner__content">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            Competitions, certifications, and milestones along the journey.
          </motion.p>
        </div>
      </div>

      {/* Cards */}
      <section className="ach-section">
        <div className="ach-grid">
          {achievementsData.map((item, i) => (
            <AchievementCard key={item.title} data={item} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;
