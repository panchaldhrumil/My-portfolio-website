import React, { useState, useEffect } from 'react';
import './work.css';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus, FaSearchMinus, FaExpand } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Lightbox ─────────────────────────────────────────────────────────────── */
const Lightbox = ({ images, startIndex, title, onClose }) => {
  const [idx, setIdx]   = useState(startIndex);
  const [zoom, setZoom] = useState(1);

  const prev = () => { setZoom(1); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = () => { setZoom(1); setIdx((i) => (i + 1) % images.length); };

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')    onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="lb-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
      >
        {/* Close */}
        <button className="lb-close" onClick={onClose} aria-label="Close lightbox">
          <FaTimes size={16} />
        </button>

        {/* Counter */}
        {images.length > 1 && (
          <div className="lb-counter">{idx + 1} / {images.length}</div>
        )}

        {/* Image */}
        <motion.div
          className="lb-img-wrap"
          onClick={(e) => e.stopPropagation()}
          key={idx}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <img
            src={images[idx]}
            alt={title}
            style={{ transform: `scale(${zoom})` }}
            className="lb-img"
          />
        </motion.div>

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button
              className="lb-nav lb-nav--left"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              className="lb-nav lb-nav--right"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <FaChevronRight size={18} />
            </button>
          </>
        )}

        {/* Zoom controls */}
        <div className="lb-zoom" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setZoom((z) => Math.min(z + 0.25, 4))} aria-label="Zoom in">
            <FaSearchPlus size={14} />
          </button>
          <button onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))} aria-label="Zoom out">
            <FaSearchMinus size={14} />
          </button>
          <button onClick={() => setZoom(1)} aria-label="Reset zoom" style={{ fontSize: '12px' }}>
            1:1
          </button>
        </div>

        {/* Dot strip */}
        {images.length > 1 && (
          <div className="lb-dots" onClick={(e) => e.stopPropagation()}>
            {images.map((_, i) => (
              <span
                key={i}
                className={`lb-dot ${i === idx ? 'lb-dot--active' : ''}`}
                onClick={() => { setZoom(1); setIdx(i); }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

/* ── Workcard ─────────────────────────────────────────────────────────────── */
const Workcard = ({ imgsrc, title, text, techStack, github, live }) => {
  const images = Array.isArray(imgsrc) ? imgsrc : [imgsrc];
  const [imgIndex,    setImgIndex]    = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % images.length);
  };

  return (
    <>
      <motion.div
        className="card"
        whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(56,189,248,0.18)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Image slider */}
        <div className="card__img-wrap">
          <img
            src={images[imgIndex]}
            alt={title}
            className="card__img"
            onClick={() => setLightboxOpen(true)}
            title="Click to view full size"
          />

          {/* Expand hint */}
          <div className="card__expand-hint" onClick={() => setLightboxOpen(true)}>
            <FaExpand size={11} /> View full size
          </div>

          {images.length > 1 && (
            <>
              <button className="card__nav card__nav--left"  onClick={prevImg} aria-label="Previous image">
                <FaChevronLeft size={12} />
              </button>
              <button className="card__nav card__nav--right" onClick={nextImg} aria-label="Next image">
                <FaChevronRight size={12} />
              </button>
              <div className="card__dots">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`card__dot ${i === imgIndex ? 'card__dot--active' : ''}`}
                    onClick={() => setImgIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Body */}
        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <p className="card__desc">{text}</p>

          {techStack && techStack.length > 0 && (
            <div className="card__tags">
              {techStack.map((tag) => (
                <span key={tag} className="card__tag">{tag}</span>
              ))}
            </div>
          )}

          <div className="card__actions">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-outline card__btn">
                <FaGithub size={14} /> GitHub
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="btn card__btn">
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox portal */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          startIndex={imgIndex}
          title={title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default Workcard;