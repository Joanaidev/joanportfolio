# Deploy Joan's Portfolio to Vercel

## 🚨 QUICK FIX FOR 404 ERROR

If you're getting a 404 error after deployment:

1. **Go to Vercel Dashboard** → Your Project → Settings
2. **Change Output Directory** from `dist` to `dist/public`
3. **Redeploy** the project

## Quick Deployment Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Joan Alonge AI Portfolio - Ready for deployment"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - **IMPORTANT**: Change Output Directory to `dist/public`
   - No environment variables needed (portfolio uses local chat system)
   - Click "Deploy"

## Project Configuration

The portfolio is optimized for Vercel deployment with:

✅ **Static Build Configuration** - `vercel.json` configured for SPA
✅ **Local Chat System** - No external API dependencies 
✅ **Responsive Design** - Works perfectly on mobile and desktop
✅ **SEO Optimized** - Meta tags and Open Graph for social sharing
✅ **Fast Performance** - All assets optimized for quick loading

## Build Commands

Vercel will automatically use:
- **Build Command**: `vite build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Features That Work Out of the Box

- ✅ Smart chat system with Joan's portfolio data
- ✅ Correctly answers location questions (Joan is in Canada)
- ✅ All navigation sections work smoothly
- ✅ Mobile-responsive design
- ✅ Professional animations and interactions
- ✅ Contact information and LinkedIn integration

## No Additional Setup Required

Since the portfolio uses a local-only chat system, no environment variables or external API keys are needed for deployment. Everything works immediately after deployment!

## Custom Domain (Optional)

After deployment, you can add a custom domain like `joanalonge.com` in the Vercel dashboard under Project Settings > Domains.