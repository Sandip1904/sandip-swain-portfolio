import React from 'react';

export default function SectionTitle({ badge, title, highlight, subtitle, align = 'center' }) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '720px' : '100%',
        margin: align === 'center' ? '0 auto 3.5rem auto' : '0 0 3rem 0'
      }}
    >
      {badge && (
        <span
          className="mono-badge"
          style={{
            display: 'inline-block',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            background: 'rgba(59, 130, 246, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: 'var(--accent-blue)',
            marginBottom: '0.9rem',
            textTransform: 'uppercase'
          }}
        >
          {badge}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.85rem, 3.5vw, 2.65rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '0.9rem'
        }}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
