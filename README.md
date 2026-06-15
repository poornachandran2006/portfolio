# Poornachandran - Full Stack AI Engineer Portfolio

A production-grade, recruiter-focused personal portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to impress senior engineering recruiters and hiring managers at top tech companies.

## 🚀 Features

- **Stunning Animations**: Smooth scroll-triggered animations using Framer Motion
- **Custom Cursor**: Premium cursor experience with interactive hover states
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with optimized assets
- **Clean Architecture**: Well-structured, maintainable codebase
- **Production Ready**: Built with best practices and modern web standards

## 📦 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v3 (JIT mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Detection**: react-intersection-observer
- **Fonts**: Google Fonts (Inter & Syne)

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📝 Customization

All content is centralized in `src/data/portfolioData.js`. Update this file to personalize:

- Personal information
- Skills and expertise
- Projects and case studies
- Work experience
- Education details
- Certifications
- Testimonials
- Contact information

### Key Files to Update:

1. **src/data/portfolioData.js** - All content and data
2. **public/** - Add your CV as `cv.pdf` for the download button
3. **index.html** - Update meta tags if needed

## 🎨 Design System

### Colors
- Background Primary: `#FFFFFF`
- Background Secondary: `#F8F8F6`
- Text Primary: `#0D0D0D`
- Text Secondary: `#4A4A4A`
- Accent: `#0A0A0A`

### Typography
- Display Font: Syne (headings)
- Body Font: Inter (text)

### Components
All components are organized in:
- `src/components/layout/` - Navbar, Footer
- `src/components/sections/` - Page sections
- `src/components/ui/` - Reusable UI components

## 📱 Sections

1. **Hero** - Eye-catching introduction with animated geometric visuals
2. **About** - Professional background and approach
3. **Skills** - Tabbed interface showcasing technical expertise
4. **Projects** - Featured projects with detailed case studies
5. **Experience** - Timeline of professional journey
6. **Education** - Academic background
7. **Certifications** - Professional credentials
8. **Testimonials** - Client/colleague recommendations
9. **Contact** - Contact form and social links

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📄 Deployment

Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## ⚡ Performance Features

- Lazy loading for non-critical sections
- Optimized animations with GPU acceleration
- Debounced scroll listeners
- Minimal bundle size
- Fast initial page load

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact Form

The contact form uses `mailto:` links. For a production backend:
1. Set up a form handling service (FormSpree, Netlify Forms, etc.)
2. Update the form submission logic in `src/components/sections/Contact.jsx`

## 🔧 Customization Tips

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add data to `src/data/portfolioData.js`
3. Import and add to `src/App.jsx`

### Changing Colors
Update `tailwind.config.js` theme colors

### Modifying Animations
Edit animation variants in `src/components/ui/AnimatedSection.jsx`

## 📚 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── AnimatedSection.jsx
│   │       ├── CustomCursor.jsx
│   │       ├── SectionHeading.jsx
│   │       ├── Tag.jsx
│   │       ├── ScrollProgress.jsx
│   │       ├── BackToTop.jsx
│   │       └── LoadingScreen.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Design Philosophy

This portfolio follows a minimal, editorial design approach:
- Clean, spacious layouts
- Subtle animations that enhance UX
- Professional color palette
- Typography-focused design
- Premium feel without being flashy

## 📝 License

This project is open source and available for personal use.

## 🙏 Credits

Built with modern web technologies and best practices for maximum impact.

---

**Built with ❤️ by Poornachandran**
