import React from 'react';
import { ArrowUp, Github, ExternalLink, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-glass)',
        padding: '4rem 0 2.5rem'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              {personalInfo.name}
            </h3>
            <p style={{ color: 'var(--accent-blue)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.65rem' }}>
              {personalInfo.roleSubtitle}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              {personalInfo.location}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.85rem' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['home', 'about', 'skills', 'projects', 'education', 'strengths', 'contact'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    textTransform: 'capitalize'
                  }}
                >
                  {id}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.85rem' }}>
              Profiles & Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
                <Github size={15} />
                <span>{personalInfo.githubLabel}</span>
              </a>
              <a href={personalInfo.huggingface} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
                <ExternalLink size={15} />
                <span>{personalInfo.huggingfaceLabel}</span>
              </a>
              <a href={personalInfo.emailHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
                <Phone size={15} />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: '1.75rem',
            borderTop: '1px solid var(--border-glass)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1rem',
              borderRadius: '0.7rem',
              background: 'var(--surface-glass)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
