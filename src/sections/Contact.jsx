import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, ExternalLink, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields before preparing your email.'
      });
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${trimmedSubject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatus({
      type: 'success',
      message: `Validated! Opening your email client addressed to ${personalInfo.email} (frontend-only direct mailto handoff).`
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Get In Touch"
          title="Contact"
          highlight="Sandip Swain"
          subtitle="Reach out directly via email, phone, GitHub, or Hugging Face for entry-level Software Engineer, Frontend, or Python Developer opportunities."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href={personalInfo.emailHref} className="glass-card" style={{ padding: '1.35rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail size={22} color="var(--accent-blue)" />
              <div>
                <div className="mono-badge" style={{ color: 'var(--text-muted)' }}>Email</div>
                <div style={{ fontWeight: 600 }}>{personalInfo.email}</div>
              </div>
            </a>

            <a href={personalInfo.phoneHref} className="glass-card" style={{ padding: '1.35rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Phone size={22} color="var(--accent-blue)" />
              <div>
                <div className="mono-badge" style={{ color: 'var(--text-muted)' }}>Phone</div>
                <div style={{ fontWeight: 600 }}>{personalInfo.phone}</div>
              </div>
            </a>

            <div className="glass-card" style={{ padding: '1.35rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin size={22} color="var(--accent-violet)" />
              <div>
                <div className="mono-badge" style={{ color: 'var(--text-muted)' }}>Location</div>
                <div style={{ fontWeight: 600 }}>{personalInfo.location}</div>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: '1.35rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <Github size={22} color="var(--accent-blue)" />
              <div>
                <div className="mono-badge" style={{ color: 'var(--text-muted)' }}>GitHub Profile</div>
                <div style={{ fontWeight: 600 }}>{personalInfo.github}</div>
              </div>
            </a>

            <a
              href={personalInfo.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ padding: '1.35rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <ExternalLink size={22} color="var(--accent-violet)" />
              <div>
                <div className="mono-badge" style={{ color: 'var(--text-muted)' }}>Hugging Face Profile</div>
                <div style={{ fontWeight: 600 }}>{personalInfo.huggingface}</div>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }} noValidate>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Prepare a Direct Message</h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              Client-side validated form that prepares a pre-addressed email to <strong>{personalInfo.email}</strong> via your mail client.
            </p>

            <div>
              <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Your Name *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.65rem',
                  border: '1px solid var(--border-glass)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div>
              <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Your Email *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.65rem',
                  border: '1px solid var(--border-glass)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div>
              <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Software Engineer / Python Developer Opportunity"
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.65rem',
                  border: '1px solid var(--border-glass)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div>
              <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message for Sandip Swain..."
                style={{
                  width: '100%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '0.65rem',
                  border: '1px solid var(--border-glass)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  resize: 'vertical'
                }}
              />
            </div>

            {status.type !== 'idle' && (
              <div
                role="alert"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  fontSize: '0.85rem',
                  background: status.type === 'error' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                  color: status.type === 'error' ? '#EF4444' : '#10B981',
                  border: `1px solid ${status.type === 'error' ? 'rgba(239,68,68,0.35)' : 'rgba(16,185,129,0.35)'}`
                }}
              >
                {status.type === 'error' ? <AlertCircle size={17} /> : <CheckCircle2 size={17} />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.4rem',
                borderRadius: '0.75rem',
                background: 'var(--accent-gradient)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.92rem'
              }}
            >
              <Send size={16} />
              <span>Validate & Open in Email Client</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
