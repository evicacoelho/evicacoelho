import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

interface ContactProps {
  content: {
    contactTitle: string;
    contactText: string;
    email: string;
    linkedin: string;
    github: string;
  };
}

declare global {
  interface Window {
    emailJSInitialized?: boolean;
  }
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials not configured. Please set environment variables.');
      }

      // Initialize EmailJS (only once per session)
      if (!window.emailJSInitialized) {
        emailjs.init(publicKey);
        window.emailJSInitialized = true;
      }

      // Send email
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: content.email,
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send email. Please try again.'
      );
    }
  };

  return (
    <div className="window window--medium">
      <div className="title-bar title-bar--inactive">
        <span>{content.contactTitle}.exe</span>
      </div>
      <div className="window-body">
        <div className="contact-content">
          <h3 className="contact-intro">{content.contactText}</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={5}
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="button"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status === 'success' && (
              <div className="form-message success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-message error">
                ✗ Error: {errorMessage}
              </div>
            )}
          </form>

          <div className="contact-links">
            <p className="contact-label">Or reach out directly:</p>
            <div className="contact-buttons">
              <a
                href={`mailto:${content.email}`}
                className="button contact-link-btn"
              >
                Email
              </a>
              <a
                href={content.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="button contact-link-btn"
              >
                LinkedIn
              </a>
              <a
                href={content.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button contact-link-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
