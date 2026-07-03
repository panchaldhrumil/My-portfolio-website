import React, { useRef, useState } from 'react';
import './Formstyle.css';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────
// Web3Forms — free, no account needed, emails delivered instantly.
//
// ONE-TIME SETUP (30 seconds):
//   1. Go to https://web3forms.com
//   2. Enter YOUR email address → click "Create Access Key"
//   3. Copy the key that appears and paste it below:
// ─────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

const Form = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errors, setErrors]  = useState({});

  // ── Validation ──────────────────────────────────────────────────
  const validate = (data) => {
    const errs = {};
    if (!data.from_name.trim())   errs.from_name  = 'Name is required.';
    if (!data.from_email.trim())  errs.from_email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email))
                                  errs.from_email = 'Enter a valid email address.';
    if (!data.message.trim())     errs.message    = 'Message cannot be empty.';
    else if (data.message.trim().length < 10)
                                  errs.message    = 'Message must be at least 10 characters.';
    return errs;
  };

  // ── Submit ──────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      from_name:  formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      message:    formRef.current.message.value,
    };

    const errs = validate(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setErrors({});
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject:    `Portfolio Contact — from ${data.from_name}`,
          name:       data.from_name,
          email:      data.from_email,
          message:    data.message,
          botcheck:   '',        // honeypot — leave empty
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        formRef.current.reset();
      } else {
        console.error('Web3Forms error:', json);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
    }
  };

  // ── Success screen ──────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="form-wrapper">
        <motion.div
          className="contact-form success-state"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <FaCheckCircle size={52} color="#38bdf8" />
          <h2>Message Sent!</h2>
          <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
          <button className="submit-btn" onClick={() => setStatus('idle')}>
            Send another message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      <motion.form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        noValidate
      >
        <h2>Get in Touch</h2>
        <p className="form-subtitle">
          Have a question or want to work together? Drop a message below.
        </p>

        {/* Error banner */}
        <AnimatePresence>
          {status === 'error' && (
            <motion.div
              className="form-error-banner"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <FaExclamationCircle size={14} />
              Something went wrong. Please try again or email&nbsp;
              <a href="mailto:dhrumil.techwork@gmail.com" style={{ color: '#fca5a5' }}>
                dhrumil.techwork@gmail.com
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name */}
        <div className="form-field">
          <label htmlFor="from_name">Your Name</label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            placeholder="e.g. Rahul Sharma"
            className={errors.from_name ? 'input-error' : ''}
            onChange={() => errors.from_name && setErrors(e => ({ ...e, from_name: '' }))}
          />
          {errors.from_name && <span className="field-error">{errors.from_name}</span>}
        </div>

        {/* Email */}
        <div className="form-field">
          <label htmlFor="from_email">Your Email</label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            placeholder="e.g. rahul@example.com"
            className={errors.from_email ? 'input-error' : ''}
            onChange={() => errors.from_email && setErrors(e => ({ ...e, from_email: '' }))}
          />
          {errors.from_email && <span className="field-error">{errors.from_email}</span>}
        </div>

        {/* Message */}
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="What would you like to discuss?"
            className={errors.message ? 'input-error' : ''}
            onChange={() => errors.message && setErrors(e => ({ ...e, message: '' }))}
          />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <><span className="spinner" /> Sending…</>
          ) : (
            <><FaPaperPlane size={13} /> Send Message</>
          )}
        </button>
      </motion.form>
    </div>
  );
};

export default Form;
