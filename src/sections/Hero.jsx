import React from 'react';
import { ArrowRight, Download, Mail, Github, ExternalLink, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import Button from '../components/Button';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="section-padding" style={{ paddingTop: '4.5rem', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#10B981',
                fontSize: '0.82rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 10px #10B981'
                }}
              />
              <span>{personalInfo.availabilityText}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.35rem, 5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                marginBottom: '1rem'
              }}
            >
              Hi, I&apos;m <span className="gradient-text">Sandip Swain.</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
                fontWeight: 600,
                color: 'var(--accent-blue)',
                marginBottom: '1.25rem'
              }}
            >
              {personalInfo.title}
            </h2>

            <p
              style={{
                fontSize: '1.06rem',
                color: 'var(--text-secondary)',
                maxWidth: '620px',
                marginBottom: '2rem'
              }}
            >
              {personalInfo.heroIntro}
            </p>

            <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '2.25rem' }}>
              <Button href="#projects" variant="primary">
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </Button>
              <Button
                href={personalInfo.resumePath}
                download={personalInfo.resumeFileName}
                variant="secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </Button>
              <Button href="#contact" variant="ghost">
                <Mail size={17} />
                <span>Contact Me</span>
              </Button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.6rem 1.05rem',
                  borderRadius: '0.75rem',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}
              >
                <Github size={17} color="var(--accent-blue)" />
                <span>GitHub ({personalInfo.githubLabel})</span>
              </a>

              <a
                href={personalInfo.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.6rem 1.05rem',
                  borderRadius: '0.75rem',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}
              >
                <ExternalLink size={17} color="var(--accent-violet)" />
                <span>Hugging Face ({personalInfo.huggingfaceLabel})</span>
              </a>
            </div>
          </div>

          <div className="glass-card animate-float" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.45rem' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }} />
              </div>
              <span className="mono-badge" style={{ color: 'var(--text-muted)' }}>
                sandip_profile.py
              </span>
            </div>

            <pre
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.82rem',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                overflowX: 'auto',
                marginBottom: '1.5rem'
              }}
            >
{`class SoftwareEngineer:
    def __init__(self):
        self.name = "Sandip Swain"
        self.degree = "B.Tech in CSE (2022-2025)"
        self.location = "Bhubaneswar, Odisha"
        self.stack = [
            "Python", "JavaScript",
            "React.js", "HTML5", "CSS3",
            "Gradio", "Hugging Face APIs"
        ]
        self.focus = [
            "AI-Powered URL Safety",
            "Cybersecurity Platforms",
            "Modern Web Applications"
        ]`}
            </pre>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
                <Terminal size={18} color="var(--accent-blue)" style={{ marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>Python & AI</div>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
                <Cpu size={18} color="var(--accent-violet)" style={{ marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>React.js UI</div>
              </div>
              <div style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'var(--bg-tertiary)', textAlign: 'center' }}>
                <ShieldCheck size={18} color="#10B981" style={{ marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>URL Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
