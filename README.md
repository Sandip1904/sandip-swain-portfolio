# Sandip Swain — Software Engineer, Frontend & Python Developer Portfolio

A production-ready React.js + Vite developer portfolio built strictly from Sandip Swain's CV.

## Tech Stack
- **React.js (Functional Components & Hooks)**
- **Vite**
- **JavaScript (ES6+) & JSX**
- **React Router DOM**
- **Framer Motion & Lucide React**
- **Custom CSS3 Design System** (`variables.css`, `global.css`, `animations.css`, `responsive.css`)

## Project Structure
```text
sandip-swain-portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── SkillCard.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Hero.jsx
│   │   ├── Languages.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Strengths.jsx
│   ├── styles/
│   │   ├── animations.css
│   │   ├── global.css
│   │   ├── responsive.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Setup & Execution Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```
