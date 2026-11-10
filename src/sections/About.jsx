import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo, aboutHighlights, cvFacts } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="About Me"
          title="Engineering Secure, Scalable &"
          highlight="User-Focused Software"
          subtitle="Grounded strictly in my academic background, hands-on technical projects, and software engineering focus."
        />

        <div className="glass-card" style={{ padding: '2.25rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.85rem' }}>
            Professional Summary
          </h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {personalInfo.summary}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {cvFacts.map((fact) => (
            <div key={fact.label} className="glass-card" style={{ padding: '1.5rem' }}>
              <div className="gradient-text" style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.3rem' }}>
                {fact.value}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                {fact.label}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                {fact.detail}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {aboutHighlights.map((item) => (
            <div key={item.id} className="glass-card" style={{ padding: '1.6rem' }}>
              <span className="mono-badge" style={{ color: 'var(--accent-blue)', display: 'block', marginBottom: '0.45rem' }}>
                {item.category}
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
