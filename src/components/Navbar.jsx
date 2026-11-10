import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled ? 'var(--surface-glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
        transition: 'all 0.25s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.75rem'
        }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontWeight: 800,
            fontSize: '1.05rem',
            letterSpacing: '0.04em'
          }}
        >
          <span
            style={{
              width: '2.1rem',
              height: '2.1rem',
              borderRadius: '0.55rem',
              background: 'var(--accent-gradient)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '0.85rem'
            }}
          >
            SS
          </span>
          <span>{personalInfo.logoText}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary Navigation" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '0.6rem',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(59, 130, 246, 0.12)' : 'transparent'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href={personalInfo.resumePath}
            download={personalInfo.resumeFileName}
            className="desktop-nav"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1rem',
              borderRadius: '0.7rem',
              background: 'var(--accent-gradient)',
              color: '#FFFFFF',
              fontSize: '0.86rem',
              fontWeight: 600
            }}
          >
            <Download size={15} />
            <span>Resume</span>
          </a>
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '0.5rem',
              borderRadius: '0.6rem',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)'
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-glass)',
            padding: '1rem 1.5rem 1.5rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: '0.6rem',
                  fontWeight: activeSection === item.id ? 600 : 500,
                  color: activeSection === item.id ? 'var(--accent-blue)' : 'var(--text-primary)',
                  background: activeSection === item.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent'
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
              style={{
                marginTop: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: '0.7rem',
                background: 'var(--accent-gradient)',
                color: '#FFFFFF',
                fontWeight: 600
              }}
            >
              <Download size={16} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
