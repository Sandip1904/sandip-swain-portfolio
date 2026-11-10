import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        404
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        style={{
          padding: '0.75rem 1.4rem',
          borderRadius: '0.75rem',
          background: 'var(--accent-gradient)',
          color: '#FFFFFF',
          fontWeight: 600
        }}
      >
        Return to Sandip Swain Portfolio
      </Link>
    </div>
  );
}
