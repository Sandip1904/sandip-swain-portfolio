import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];
  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionTitle
          badge="Technical Arsenal"
          title="Categorized"
          highlight="Technical Skills"
          subtitle="Organized across programming languages, modern web technologies, frameworks, APIs, core software concepts, and cybersecurity."
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
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.55rem 1.05rem',
                  borderRadius: '999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  background: active ? 'var(--accent-gradient)' : 'var(--surface-glass)',
                  color: active ? '#FFFFFF' : 'var(--text-secondary)',
                  border: active ? 'none' : '1px solid var(--border-glass)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredCategories.map((group) => (
            <SkillCard
              key={group.id}
              category={group.category}
              subtitle={group.subtitle}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
