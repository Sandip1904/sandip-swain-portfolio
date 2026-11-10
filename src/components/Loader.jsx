import React from 'react';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}
    >
      <div
        style={{
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '1rem',
          background: 'var(--accent-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '1.25rem',
          color: '#FFFFFF',
          boxShadow: '0 0 30px var(--glow-blue)'
        }}
      >
        SS
      </div>
      <p className="mono-badge" style={{ color: 'var(--text-secondary)' }}>
        SANDIP SWAIN // PORTFOLIO
      </p>
    </div>
  );
}
