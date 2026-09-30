# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Immediate Steps

### 1. Install & Run (30 seconds)

```bash
cd plotfolio
npm install
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 2. Update Your Info (2 minutes)

Open `src/data/profile.ts` and replace:

```typescript
email: "your.actual.email@example.com",
github: "https://github.com/your-actual-username",
linkedin: "https://linkedin.com/in/your-actual-username",
```

### 3. Add Your Resume (1 minute)

1. Place your resume as `public/resume.pdf`
2. If you don't have it yet, the button will still work (just update it later)

### 4. Update Projects (2 minutes)

Open `src/data/projects.ts` and update the GitHub URLs:

```typescript
githubUrl: 'https://github.com/your-username/medforecast-ai',
githubUrl: 'https://github.com/your-username/hostsync',
```

## ✅ You're Done!

Your portfolio is now personalized and ready to use.

## 🎯 Next Steps (Optional)

- [ ] Read the full [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed customization
- [ ] Update meta tags in `index.html` for better SEO
- [ ] Add more projects in `src/data/projects.ts`
- [ ] Customize colors in `tailwind.config.js`
- [ ] Deploy to Vercel, Netlify, or GitHub Pages

## 🛠️ Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📱 Test Your Portfolio

Before deploying, check:

1. ✅ Open `http://localhost:5173` in your browser
2. ✅ Click all navigation links
3. ✅ Click on project cards to open details
4. ✅ Try the contact form
5. ✅ Test on mobile (Chrome DevTools → Toggle device toolbar)
6. ✅ Click GitHub/LinkedIn/Email icons
7. ✅ Try downloading your resume

## 🚀 Deploy (Choose One)

### Vercel (Recommended - Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatic)

### Netlify (Free)
1. Push code to GitHub  
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy!

### GitHub Pages (Free)
```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "vite build && gh-pages -d dist"
npm run deploy
```

## ⚠️ Before You Deploy

Make sure you've replaced:
- [ ] `yourusername` in all GitHub/LinkedIn URLs
- [ ] `your.email@example.com` with your real email
- [ ] Updated project descriptions and URLs
- [ ] Added your actual resume PDF

## 🆘 Having Issues?

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles broken?
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check if Tailwind CSS is properly configured

### Icons not showing?
- The portfolio uses generic icons (Code icon for GitHub, Briefcase for LinkedIn)
- This is normal! Lucide React doesn't include brand logos

## 💡 Pro Tips

1. **Start Simple**: Get it working first, customize later
2. **Test Mobile**: Most recruiters will view on phone
3. **Keep URLs Updated**: Double-check all your links work
4. **Add Real Projects**: Better to have 2 real projects than 5 fake ones
5. **Proofread Everything**: Typos look unprofessional

## 📧 Share Your Portfolio

Once deployed, add the link to:
- LinkedIn profile
- GitHub profile README
- Resume
- Email signature
- Job applications

---

**Need more help?** Check [README.md](./README.md) and [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

Good luck! 🎉
