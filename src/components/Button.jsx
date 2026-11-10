import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  href,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  className = '',
  ariaLabel
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.55rem',
    padding: '0.8rem 1.45rem',
    borderRadius: '0.85rem',
    fontWeight: 600,
    fontSize: '0.92rem',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  const variants = {
    primary: {
      background: 'var(--accent-gradient)',
      color: '#FFFFFF',
      boxShadow: '0 10px 25px -5px var(--glow-blue)'
    },
    secondary: {
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-highlight)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-glass)'
    }
  };

  const combinedStyle = { ...baseStyle, ...(variants[variant] || variants.primary) };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        style={combinedStyle}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={combinedStyle}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
