import React from 'react';
import { Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { languagesData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section id="languages" className="section-padding" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <SectionTitle
          badge="Communication"
          title="Spoken"
          highlight="Languages"
          subtitle="Multilingual communication proficiency as listed in my CV."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.35rem',
            maxWidth: '920px',
            margin: '0 auto'
          }}
        >
          {languagesData.map((item) => (
            <div key={item.id} className="glass-card" style={{ padding: '1.6rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: '0.8rem',
                  background: 'rgba(139, 92, 246, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Globe size={20} color="var(--accent-violet)" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.language}</h3>
                  <span
                    className="mono-badge"
                    style={{
                      padding: '0.15rem 0.55rem',
                      borderRadius: '999px',
                      background: 'rgba(59, 130, 246, 0.14)',
                      color: 'var(--accent-blue)'
                    }}
                  >
                    {item.proficiency}
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
