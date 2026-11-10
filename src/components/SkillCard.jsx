import React from 'react';
import { Code2 } from 'lucide-react';

export default function SkillCard({ category, subtitle, skills }) {
  return (
    <div className="glass-card" style={{ padding: '1.65rem', display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{category}</h3>
          <span className="mono-badge" style={{ color: 'var(--accent-blue)' }}>
            {skills.length} {skills.length === 1 ? 'Skill' : 'Skills'}
          </span>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{subtitle}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              padding: '0.9rem 1rem',
              borderRadius: '0.85rem',
              background: 'rgba(59, 130, 246, 0.05)',
              border: '1px solid var(--border-glass)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span style={{ fontWeight: 600, fontSize: '0.96rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                <Code2 size={15} color="var(--accent-blue)" />
                {skill.name}
              </span>
              <span className="mono-badge" style={{ fontSize: '0.72rem', color: 'var(--accent-violet)' }}>
                {skill.tag}
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
