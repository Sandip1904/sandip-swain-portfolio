import React from 'react';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      className="glass-card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1.25rem'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span
            className="mono-badge"
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '999px',
              background: 'rgba(59, 130, 246, 0.14)',
              color: 'var(--accent-blue)'
            }}
          >
            {project.badge}
          </span>
          <span className="mono-badge" style={{ color: 'var(--text-muted)' }}>
            #{project.number}
          </span>
        </div>

        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.65rem' }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.1rem' }}>
          {project.shortDescription}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
          {project.bullets.map((bullet, idx) => (
            <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="mono-badge"
              style={{
                fontSize: '0.73rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '0.5rem',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-glass)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
          <button
            type="button"
            onClick={() => onSelect(project)}
            style={{
              flex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              padding: '0.65rem 1rem',
              borderRadius: '0.7rem',
              background: 'var(--accent-gradient)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.86rem'
            }}
          >
            {project.hasInteractiveDemo ? <Sparkles size={15} /> : <Layers size={15} />}
            <span>{project.hasInteractiveDemo ? 'View Details & Live Demo' : 'View Details'}</span>
          </button>

          {project.profileLinks &&
            project.profileLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.65rem 0.9rem',
                  borderRadius: '0.7rem',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.84rem'
                }}
              >
                <span>{link.label}</span>
                <ExternalLink size={14} />
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
