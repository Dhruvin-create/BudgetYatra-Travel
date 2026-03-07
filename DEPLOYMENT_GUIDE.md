# Deployment Guide - BudgetYatra

Complete guide to deploy your BudgetYatra website to production.

## Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Push to GitHub** (follow GITHUB_SETUP.md first)

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `budgetyatra-travel`
   - Click "Import"

4. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. **Environment Variables** (if needed):
   - Click "Environment Variables"
   - Add any `.env` variables
   - Example: `NEXT_PUBLIC_API_URL=https://api.example.com`

6. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://budgetyatra-travel.vercel.app`

### Automatic Deployments:

- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- No manual work needed!

### Custom Domain (Optional):

1. Go to Project Settings → Domains
2. Add your domain: `budgetyatra.com`
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-60 minutes)

---

## Option 2: Netlify

Another excellent option with similar features.

### Steps:

1. **Push to GitHub** (follow GITHUB_SETUP.md first)

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign Up" with GitHub

3. **Import Project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select `budgetyatra-travel` repository

4. **Configure Build**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: (leave empty)

5. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at: `https://random-name.netlify.app`

6. **Custom Domain**:
   - Site settings → Domain management
   - Add custom domain

---

## Option 3: Railway

Good for full-stack apps with databases.

### Steps:

1. **Push to GitHub**

2. **Go to Railway**:
   - Visit [railway.app](https://railway.app)
   - Sign up with GitHub

3. **New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `budgetyatra-travel`

4. **Configure**:
   - Railway auto-detects Next.js
   - Click "Deploy"

5. **Get URL**:
   - Settings → Generate Domain
   - Your site: `https://budgetyatra-travel.up.railway.app`

---

## Option 4: Self-Hosted (VPS/Cloud)

For advanced users who want full control.

### Requirements:
- VPS (DigitalOcean, AWS, Linode, etc.)
- Node.js 18+ installed
- PM2 or similar process manager

### Steps:

1. **SSH into your server**:
```bash
ssh user@your-server-ip
```

2. **Install Node.js**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Clone repository**:
```bash
git clone https://github.com/YOUR_USERNAME/budgetyatra-travel.git
cd budgetyatra-travel
```

4. **Install dependencies**:
```bash
npm install
```

5. **Build project**:
```bash
npm run build
```

6. **Install PM2**:
```bash
sudo npm install -g pm2
```

7. **Start application**:
```bash
pm2 start npm --name "budgetyatra" -- start
pm2 save
pm2 startup
```

8. **Configure Nginx** (reverse proxy):
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **Enable HTTPS with Let's Encrypt**:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All tests pass: `npm test`
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in production build
- [ ] Environment variables configured
- [ ] `.gitignore` includes sensitive files
- [ ] README.md is updated
- [ ] SEO meta tags are correct
- [ ] Images are optimized
- [ ] Analytics tracking added (optional)

---

## Post-Deployment Tasks

After deployment:

1. **Test the Live Site**:
   - Check all pages load correctly
   - Test forms (newsletter, contact)
   - Verify responsive design on mobile
   - Test navigation and links

2. **Set Up Monitoring**:
   - Add Google Analytics
   - Set up error tracking (Sentry)
   - Monitor performance (Lighthouse)

3. **SEO Setup**:
   - Submit sitemap to Google Search Console
   - Verify site ownership
   - Check robots.txt is accessible

4. **Social Media**:
   - Test Open Graph tags (share on Facebook/Twitter)
   - Verify preview images appear correctly

5. **Performance**:
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Optimize if needed

---

## Environment Variables

If you need environment variables, create them in your deployment platform:

### Vercel:
Project Settings → Environment Variables

### Netlify:
Site settings → Build & deploy → Environment

### Common Variables:
```env
# API URLs
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service
EMAIL_SERVICE_API_KEY=your-key-here

# Database (if needed)
DATABASE_URL=postgresql://...
```

---

## Continuous Deployment Workflow

Once set up, your workflow will be:

1. **Make changes locally**
2. **Test**: `npm run dev`
3. **Commit**: `git commit -m "Add feature"`
4. **Push**: `git push origin main`
5. **Auto-deploy**: Platform automatically deploys
6. **Verify**: Check live site

---

## Rollback (If Something Goes Wrong)

### Vercel:
- Go to Deployments
- Find previous working deployment
- Click "..." → "Promote to Production"

### Netlify:
- Go to Deploys
- Find previous deploy
- Click "Publish deploy"

### Git:
```bash
git revert HEAD
git push origin main
```

---

## Performance Optimization Tips

1. **Enable Caching**:
   - Vercel/Netlify handle this automatically
   - For self-hosted, configure Nginx caching

2. **CDN**:
   - Vercel/Netlify include CDN
   - For self-hosted, use Cloudflare

3. **Image Optimization**:
   - Next.js Image component (already used)
   - Consider using image CDN (Cloudinary, imgix)

4. **Compression**:
   - Enable gzip/brotli (automatic on Vercel/Netlify)

---

## Monitoring & Analytics

### Google Analytics:
1. Create GA4 property
2. Get Measurement ID
3. Add to `src/app/layout.js`:

```javascript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Error Tracking (Sentry):
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

---

## Cost Comparison

| Platform | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| **Vercel** | 100GB bandwidth/month | $20/month | Next.js apps |
| **Netlify** | 100GB bandwidth/month | $19/month | Static sites |
| **Railway** | $5 credit/month | Pay as you go | Full-stack apps |
| **VPS** | N/A | $5-20/month | Full control |

**Recommendation**: Start with Vercel free tier. Upgrade only if you exceed limits.

---

## Troubleshooting

### Build Fails:
- Check build logs
- Verify all dependencies in `package.json`
- Test build locally: `npm run build`

### Site is Slow:
- Check Lighthouse score
- Optimize images
- Enable caching
- Use CDN

### 404 Errors:
- Check file paths are correct
- Verify dynamic routes work
- Check `.next` folder is generated

### Environment Variables Not Working:
- Prefix with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables
- Check variable names match exactly

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Railway Docs**: https://docs.railway.app

---

**Your site is ready to go live! 🚀**

Choose your platform and follow the steps above. Vercel is recommended for the easiest experience.
