# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Verify Installation ✅

The project is already set up. Verify it's running:

```bash
# You should see the dev server at http://localhost:5173
# If not running, start it with:
npm run dev
```

## Step 2: Update Your Information (5 minutes)

Open `src/data/portfolioData.js` and update these critical fields:

### Must Update Now:
```javascript
// Line 1: Your name
export const navigation = {
  name: "Your Name Here",  // ← Change this
  
// Line 100: Your email (appears in 3 places)
export const contact = {
  email: "your.email@example.com",  // ← Change this
  
// Line 101-102: Your social links
  github: "https://github.com/yourusername",  // ← Change this
  linkedin: "https://linkedin.com/in/yourusername",  // ← Change this
```

### Save and Check:
- The browser will auto-reload
- You should see your name in the navbar
- Verify the changes appear

## Step 3: Add Your CV

1. Export your CV as a PDF
2. Name it exactly: `cv.pdf`
3. Place it in the `public/` folder
4. The "Download CV" button will now work

## Step 4: Update Key Content (10 minutes)

Still in `src/data/portfolioData.js`:

### Hero Section (Lines 1-10):
```javascript
export const hero = {
  label: "Your Job Title",  // e.g., "Full Stack Developer"
  heading: "Your Catchy Headline",  // Make it memorable!
  subtext: "Your elevator pitch...",  // 1-2 sentences
```

### Projects (Lines 50-80):
```javascript
export const projects = {
  featured: {
    title: "Your Best Project Name",
    problem: "What problem did it solve?",
    solution: "How did you solve it?",
    github: "https://github.com/you/project",  // Real link
```

### Experience (Lines 90-95):
```javascript
{
  period: "2023 — Present",
  role: "Your Current/Recent Role",
  company: "Company Name",
  description: [
    "Key achievement 1",
    "Key achievement 2"
  ]
}
```

## Step 5: Quick Visual Check

Open http://localhost:5173 and scroll through:

- [ ] Hero shows your name and title
- [ ] About section has your story
- [ ] Skills reflect your expertise
- [ ] Projects show real work
- [ ] Experience is accurate
- [ ] Contact info is correct
- [ ] All links work

## Step 6: Test Contact Form

1. Scroll to Contact section
2. Fill out the form
3. Click "Send Message"
4. Should open your email client
5. If not, check email in `portfolioData.js`

## Step 7: Mobile Check

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Select "iPhone 12 Pro" or similar
4. Scroll through entire site
5. Test hamburger menu
6. Verify everything looks good

## Step 8: Build & Deploy (When Ready)

```bash
# Build for production
npm run build

# Test the build locally
npm run preview

# Deploy (choose one):
# - Vercel: vercel
# - Netlify: netlify deploy --prod
# - GitHub Pages: npm run deploy (after setup)
```

## 🎯 Priority Checklist

Do these FIRST:

- [ ] Change name in navigation
- [ ] Update all email addresses
- [ ] Add GitHub/LinkedIn URLs
- [ ] Upload CV to public folder
- [ ] Update hero heading
- [ ] Add at least 1 real project
- [ ] Update experience section
- [ ] Test contact form
- [ ] Check mobile view

## ⚡ Common First-Time Issues

### "My changes don't appear"
- Save the file (Ctrl+S / Cmd+S)
- Check browser auto-reloaded
- Hard refresh (Ctrl+Shift+R)

### "Contact form doesn't work"
- Verify email in `contact` object
- Check email in `navigation.cta.mailto`
- Make sure format is: `your.email@example.com`

### "CV download doesn't work"
- File must be named exactly: `cv.pdf`
- Must be in `public/` folder (not `src/`)
- Restart dev server after adding

### "Site looks broken on mobile"
- This shouldn't happen - it's fully responsive
- Try different device in DevTools
- Check browser console for errors

## 📝 Content Writing Tips

### Hero Heading (Most Important!)
❌ "I'm a developer"
✅ "Building AI Systems That Scale"

❌ "Welcome to my portfolio"
✅ "Crafting Digital Experiences"

### Project Descriptions
❌ "A website I built"
✅ "E-commerce platform serving 10K+ users"

❌ "Used React and Node"
✅ "Reduced load time by 60% using React optimization"

### Experience Bullets
❌ "Worked on features"
✅ "Built authentication system handling 50K daily users"

❌ "Used various technologies"
✅ "Architected microservices reducing costs by 40%"

## 🎨 Quick Customization

### Change Colors (Optional)
Edit `tailwind.config.js`:
```javascript
colors: {
  'text-primary': '#0D0D0D',  // Change to your color
}
```

### Change Fonts (Optional)
Edit `index.html`:
```html
<!-- Replace Inter and Syne with your fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont...">
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## 🚀 Ready to Deploy?

Once you've updated the content:

1. **Build**: `npm run build`
2. **Test**: `npm run preview`
3. **Deploy**: See `DEPLOYMENT.md` for options

### Fastest Deploy (Vercel):
```bash
npm install -g vercel
vercel
```

Follow prompts, and you're live in 2 minutes!

## 📚 More Help

- **Detailed customization**: See `CUSTOMIZATION_GUIDE.md`
- **Deployment options**: See `DEPLOYMENT.md`
- **Project overview**: See `README.md`
- **Full summary**: See `PROJECT_SUMMARY.md`

## 💪 You Got This!

Your portfolio is production-ready. Just add your content and deploy!

**Time to land that dream job! 🎉**

---

**Questions?** Check the documentation files or browser console for errors.
