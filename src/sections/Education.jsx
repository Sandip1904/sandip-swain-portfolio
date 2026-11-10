import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Academic Timeline"
          title="Education &"
          highlight="Engineering Credentials"
          subtitle="Formal academic training in Computer Science & Engineering and Mining Engineering."
        />

        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {educationData.map((item) => (
            <div key={item.id} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span
                  className="mono-badge"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '999px',
                    background: 'rgba(59, 130, 246, 0.14)',
                    color: 'var(--accent-blue)'
                  }}
                >
                  <GraduationCap size={15} />
                  <span>{item.type}</span>
                </span>

                <span className="mono-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-violet)' }}>
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                {item.degree}
              </h3>

              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '0.35rem' }}>
                {item.institution}
              </p>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1rem' }}>
                <MapPin size={14} />
                <span>{item.location}</span>
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {item.highlights.map((h, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
