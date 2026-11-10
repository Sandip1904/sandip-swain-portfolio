import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { strengthsData } from '../data/portfolioData';

export default function Strengths() {
  return (
    <section id="strengths" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Core Competencies"
          title="Professional"
          highlight="Strengths"
          subtitle="Core attributes that drive my day-to-day software development and problem-solving workflow."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.4rem'
          }}
        >
          {strengthsData.map((item) => (
            <div key={item.id} className="glass-card" style={{ padding: '1.75rem' }}>
              <div
                style={{
                  width: '2.6rem',
                  height: '2.6rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(59, 130, 246, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                <CheckCircle2 size={20} color="var(--accent-blue)" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.55rem' }}>
                {item.title}
              </h3>
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
