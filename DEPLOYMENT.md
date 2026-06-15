# Deployment Guide

This guide covers deploying your portfolio to various hosting platforms.

## 🚀 Build for Production

Before deploying, create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized assets ready for deployment.

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel offers the simplest deployment with automatic builds and HTTPS.

#### Steps:

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via CLI**:
```bash
cd portfolio
vercel
```

3. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

#### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### Option 2: Netlify

Another excellent option with drag-and-drop deployment.

#### Steps:

1. **Via Netlify CLI**:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

2. **Via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/` folder
   - Or connect your Git repository

#### Configuration:
Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**:
```javascript
export default defineConfig({
  base: '/portfolio/', // Your repo name
  plugins: [react()],
})
```

4. **Deploy**:
```bash
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

---

### Option 4: AWS S3 + CloudFront

For enterprise-grade hosting with CDN.

#### Steps:

1. **Build the project**:
```bash
npm run build
```

2. **Create S3 Bucket**:
   - Go to AWS S3 Console
   - Create bucket (e.g., `my-portfolio`)
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html`

3. **Upload files**:
```bash
aws s3 sync dist/ s3://my-portfolio --delete
```

4. **Set Bucket Policy**:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-portfolio/*"
    }
  ]
}
```

5. **Create CloudFront Distribution**:
   - Origin: Your S3 bucket
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Default Root Object: `index.html`
   - Custom Error Response: 404 → /index.html (200)

---

### Option 5: Firebase Hosting

Google's hosting solution with global CDN.

#### Steps:

1. **Install Firebase CLI**:
```bash
npm install -g firebase-tools
```

2. **Login and Initialize**:
```bash
firebase login
firebase init hosting
```

3. **Configuration**:
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub auto-deploy: Optional

4. **Deploy**:
```bash
npm run build
firebase deploy
```

---

## 🔧 Pre-Deployment Checklist

- [ ] All content updated (no placeholders)
- [ ] All links tested and working
- [ ] CV file added to public folder
- [ ] Email addresses correct
- [ ] Images optimized
- [ ] Build runs without errors
- [ ] Tested production build locally
- [ ] Meta tags updated for SEO
- [ ] Analytics added (optional)

## 🧪 Test Production Build Locally

Before deploying, test the production build:

```bash
npm run build
npm run preview
```

Visit the local preview URL to verify everything works.

## 🌐 Custom Domain Setup

### For Vercel/Netlify:
1. Add domain in platform dashboard
2. Update DNS records:
   - Type: A or CNAME
   - Name: @ or www
   - Value: Provided by platform

### For GitHub Pages:
1. Add `CNAME` file to `public/` folder with your domain
2. Update DNS:
   - Type: A
   - Name: @
   - Value: GitHub Pages IPs

## 📊 Add Analytics (Optional)

### Google Analytics:

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics:

```bash
npm install @vercel/analytics
```

Add to `src/main.jsx`:
```javascript
import { inject } from '@vercel/analytics';
inject();
```

## 🔒 Security Headers

Add security headers for production:

### Netlify (_headers file):
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Vercel (vercel.json):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🚨 Troubleshooting

### Build Fails:
- Check Node.js version (use v18+)
- Clear node_modules and reinstall
- Check for console errors

### 404 on Refresh:
- Configure redirects to index.html
- See platform-specific redirect rules above

### Slow Loading:
- Optimize images (use WebP format)
- Enable compression on hosting platform
- Use CDN (CloudFront, Cloudflare)

### Broken Links:
- Use relative paths, not absolute
- Check base URL in vite.config.js
- Test all navigation after deployment

## 📈 Post-Deployment

1. **Test Everything**:
   - All pages load correctly
   - Forms work
   - Links open correctly
   - Mobile responsive
   - Fast loading times

2. **Submit to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools

3. **Share Your Portfolio**:
   - LinkedIn profile
   - GitHub profile
   - Resume/CV
   - Email signature

## 🔄 Continuous Deployment

Set up automatic deployments:

### Vercel/Netlify with GitHub:
- Push to main branch → Auto-deploy
- Pull requests → Preview deployments

### GitHub Actions:
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 💡 Pro Tips

1. **Use Environment Variables**: Store API keys securely
2. **Enable HTTPS**: Always use SSL certificates
3. **Monitor Performance**: Use Lighthouse scores
4. **Set Up Monitoring**: Track uptime and errors
5. **Regular Updates**: Keep dependencies updated

---

**Your portfolio is now live! 🎉**

Share it with the world and start landing those opportunities!
