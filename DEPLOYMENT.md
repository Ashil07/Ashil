# Deployment Guide

This guide will help you deploy your portfolio website live. Here are the best options:

## Option 1: Vercel (Recommended - Easiest & Free)

Vercel is perfect for React/Vite projects and offers free hosting with automatic deployments.

### Steps:

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional)**:
   - In Vercel dashboard, go to your project → Settings → Domains
   - Add your custom domain

**That's it!** Vercel handles everything automatically.

---

## Option 2: Netlify (Also Very Easy & Free)

### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional)**:
   - In Netlify dashboard → Site settings → Domain management
   - Add your custom domain

---

## Option 3: GitHub Pages (Free, but needs more setup)

### Steps:

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Update vite.config.ts**:
   Add `base: '/YOUR_REPO_NAME/'` to the config (replace YOUR_REPO_NAME)

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Option 4: Other Hosting Options

- **Cloudflare Pages**: Similar to Vercel/Netlify
- **Render**: Free tier available
- **Surge.sh**: Simple static hosting
- **Firebase Hosting**: Google's hosting service

---

## Before Deploying

Make sure to:
1. ✅ Test your build locally: `npm run build`
2. ✅ Check the `build` folder is created
3. ✅ Test the built site locally (if possible)
4. ✅ Remove any console.logs or debug code
5. ✅ Update any hardcoded localhost URLs

---

## Quick Commands

```bash
# Build for production
npm run build

# Preview production build locally (if you install serve)
npx serve -s build
```

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html

