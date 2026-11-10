import React, { useState } from 'react';
import { X, ExternalLink, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [demoUrlInput, setDemoUrlInput] = useState('https://huggingface.co/sandip25800');

  const filters = ['All', 'Python & AI', 'Cybersecurity', 'React & Frontend', 'Web Systems'];

  const visibleProjects =
    selectedFilter === 'All'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedFilter);

  const evaluateUrlSafety = (rawUrl) => {
    const value = (rawUrl || '').trim().toLowerCase();
    if (!value) {
      return { status: 'Suspicious', color: '#F59E0B', reason: 'Empty URL input provided.' };
    }
    if (
      value.includes('free-prize') ||
      value.includes('login-verify-account') ||
      value.includes('http://192.168.') ||
      value.includes('@') ||
      value.endsWith('.xyz') ||
      value.endsWith('.top')
    ) {
      return {
        status: 'Malicious',
        color: '#EF4444',
        reason: 'Detected high-risk phishing keywords, raw IP host, or untrusted TLD signature.'
      };
    }
    if (!value.startsWith('https://')) {
      return {
        status: 'Suspicious',
        color: '#F59E0B',
        reason: 'Missing HTTPS transport encryption or non-standard URL scheme.'
      };
    }
    return {
      status: 'Safe',
      color: '#10B981',
      reason: 'Valid HTTPS protocol and clean domain structure with zero known phishing indicators.'
    };
  };

  const scanResult = evaluateUrlSafety(demoUrlInput);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Portfolio Showcase"
          title="Featured"
          highlight="Project Experience"
          subtitle="Five real-world software projects from my CV spanning AI-powered URL analysis, cybersecurity awareness, e-commerce, online examinations, and responsive UI prototyping."
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2.75rem'
          }}
        >
          {filters.map((filter) => {
            const active = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: '999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  background: active ? 'var(--accent-gradient)' : 'var(--surface-glass)',
                  color: active ? '#FFFFFF' : 'var(--text-secondary)',
                  border: active ? 'none' : '1px solid var(--border-glass)'
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '1.65rem'
          }}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(8, 11, 18, 0.82)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem'
            }}
            onClick={() => setActiveProject(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '720px',
                width: '100%',
                maxHeight: '88vh',
                overflowY: 'auto',
                padding: '2rem',
                background: 'var(--bg-secondary)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="mono-badge" style={{ color: 'var(--accent-blue)' }}>
                  {activeProject.badge}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                  style={{
                    padding: '0.4rem',
                    borderRadius: '0.5rem',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <h3 id="modal-project-title" style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                {activeProject.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                {activeProject.shortDescription}
              </p>

              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                Key Implementation Details (CV Verified)
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {activeProject.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {activeProject.hasInteractiveDemo && (
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '0.9rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-highlight)',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div className="mono-badge" style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
                    Interactive Rule-Based URL Classification Preview
                  </div>
                  <input
                    type="text"
                    value={demoUrlInput}
                    onChange={(e) => setDemoUrlInput(e.target.value)}
                    placeholder="Enter a URL to test classification..."
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '0.6rem',
                      border: '1px solid var(--border-glass)',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem'
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: scanResult.color }}>
                    {scanResult.status === 'Safe' && <CheckCircle2 size={18} />}
                    {scanResult.status === 'Suspicious' && <AlertTriangle size={18} />}
                    {scanResult.status === 'Malicious' && <ShieldAlert size={18} />}
                    <span>Classification: {scanResult.status}</span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                    {scanResult.reason}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="mono-badge"
                    style={{
                      padding: '0.3rem 0.7rem',
                      borderRadius: '0.5rem',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-glass)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {activeProject.profileLinks &&
                  activeProject.profileLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.65rem 1.1rem',
                        borderRadius: '0.7rem',
                        background: 'var(--accent-gradient)',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.86rem'
                      }}
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={15} />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
