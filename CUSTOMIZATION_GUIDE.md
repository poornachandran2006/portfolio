# Portfolio Customization Guide

This guide will help you quickly customize your portfolio with your personal information.

## 🎯 Quick Start Checklist

### 1. Update Personal Information

Open `src/data/portfolioData.js` and update:

#### Navigation & Branding
```javascript
export const navigation = {
  name: "Your Name", // Update with your name
  cta: {
    mailto: "your.email@example.com" // Your email
  }
}
```

#### Hero Section
```javascript
export const hero = {
  label: "Your Title", // e.g., "Full Stack Developer"
  heading: "Your Headline", // Main tagline
  subtext: "Your description...",
  stats: [
    { number: "X+", label: "Your Stat" },
    // Update with your achievements
  ]
}
```

#### Contact Information
```javascript
export const contact = {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "Your Location"
}
```

### 2. Add Your Projects

Update the `projects` object with your actual projects:

```javascript
export const projects = {
  featured: {
    title: "Your Main Project",
    problem: "What problem does it solve?",
    solution: "How did you solve it?",
    techStack: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project",
    caseStudy: "https://yourproject.com"
  }
}
```

### 3. Update Experience

Replace placeholder experience with your actual work history:

```javascript
export const experience = {
  timeline: [
    {
      period: "2023 — Present",
      role: "Your Role",
      company: "Company Name",
      description: [
        "Achievement 1",
        "Achievement 2"
      ],
      techStack: ["Tech1", "Tech2"]
    }
  ]
}
```

### 4. Add Education Details

```javascript
export const education = {
  degree: "Your Degree",
  institution: "Your University/College",
  year: "Start Year — End Year"
}
```

### 5. Update Skills

Modify skill levels based on your expertise:

```javascript
export const skills = {
  categories: {
    Frontend: [
      { name: "React.js", level: 90, proficiency: "Advanced" },
      // Adjust levels (0-100) based on your skills
    ]
  }
}
```

### 6. Add Certifications

```javascript
export const certifications = {
  items: [
    {
      name: "Certification Name",
      issuer: "Issuing Organization",
      date: "Year",
      verifyUrl: "https://verify-link.com" // or null
    }
  ]
}
```

### 7. Get Testimonials

Replace placeholder testimonials:

```javascript
export const testimonials = {
  items: [
    {
      quote: "Actual testimonial text...",
      author: "Person's Name",
      role: "Their Title/Company",
      initials: "AB" // Two letters for avatar
    }
  ]
}
```

## 📄 Add Your CV

1. Export your CV as a PDF
2. Name it `cv.pdf`
3. Place it in the `public/` folder
4. The "Download CV" button will automatically work

## 🎨 Customize Colors (Optional)

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'bg-primary': '#FFFFFF',
      'text-primary': '#0D0D0D',
      // Modify these hex values
    }
  }
}
```

## 🖼️ Update Favicon

1. Create your favicon (16x16, 32x32, or SVG)
2. Replace `public/favicon.svg` with your icon
3. Update the reference in `index.html` if needed

## 📱 Social Media Links

Update in both `contact` and `footer` objects in `portfolioData.js`:

```javascript
export const footer = {
  social: [
    { icon: "Github", url: "https://github.com/yourusername" },
    { icon: "Linkedin", url: "https://linkedin.com/in/yourusername" },
    { icon: "Mail", url: "mailto:your.email@example.com" }
  ]
}
```

## 🔍 SEO Optimization

Update meta tags in `index.html`:

```html
<title>Your Name — Your Title</title>
<meta name="description" content="Your description...">
<meta property="og:title" content="Your Name — Your Title">
```

## 🚀 Testing Your Changes

After making changes:

1. Save all files
2. Check the browser (should auto-reload)
3. Test on mobile view (browser dev tools)
4. Verify all links work
5. Test the contact form

## 📝 Content Writing Tips

### Hero Section
- Keep it punchy and memorable
- Focus on what makes you unique
- Use action-oriented language

### About Section
- Tell your story authentically
- Highlight your approach/philosophy
- Show personality while staying professional

### Project Descriptions
- Start with the problem
- Explain your solution
- Highlight technical challenges overcome
- Include measurable results if possible

### Experience Bullets
- Use action verbs (Built, Designed, Implemented)
- Quantify achievements when possible
- Focus on impact, not just tasks

## ⚠️ Common Mistakes to Avoid

1. ❌ Don't leave placeholder text like "[Your Name]"
2. ❌ Don't use broken links (test all URLs)
3. ❌ Don't forget to update email addresses everywhere
4. ❌ Don't use low-quality or missing images
5. ❌ Don't skip mobile testing

## ✅ Pre-Launch Checklist

- [ ] All personal information updated
- [ ] All placeholder text replaced
- [ ] All links tested and working
- [ ] CV uploaded to public folder
- [ ] Email addresses correct everywhere
- [ ] Social media links updated
- [ ] Projects have real descriptions
- [ ] Skills accurately reflect expertise
- [ ] Tested on mobile devices
- [ ] No console errors in browser
- [ ] Contact form works
- [ ] All sections scroll smoothly

## 🆘 Need Help?

If you encounter issues:

1. Check browser console for errors (F12)
2. Verify all imports in components
3. Make sure data structure matches expected format
4. Clear browser cache and reload
5. Restart the dev server

## 🎯 Pro Tips

1. **Keep it updated**: Regularly add new projects and skills
2. **Get real testimonials**: Reach out to colleagues/clients
3. **Optimize images**: Use compressed images for faster loading
4. **A/B test**: Try different headlines and descriptions
5. **Get feedback**: Ask peers to review before going live

---

**Remember**: Your portfolio is a living document. Update it regularly as you grow and learn!
