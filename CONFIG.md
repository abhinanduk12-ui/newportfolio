# Configuration Guide

## Quick Setup (5 minutes)

### 1. Personal Information
Edit `src/data/profile.ts`:

```typescript
export const profile: ProfileData = {
  name: "Abhinand UK",
  role: "AI & Data Science Student | Aspiring AI/ML Engineer",
  tagline: "Building intelligent solutions with data, machine learning, and software",
  description: "Integrated MSc Computer Science (Data Science) student passionate about AI, Machine Learning, and developing practical software that solves real-world problems.",
  
  // ADD YOUR DETAILS HERE:
  email: "your.email@example.com",           // Your actual email
  github: "https://github.com/yourusername",  // Your GitHub profile URL
  linkedin: "https://linkedin.com/in/yourusername", // Your LinkedIn profile URL
  
  location: "Kerala, India",
  resume: "/resume.pdf"
};
```

### 2. Project Links
Edit `src/data/projects.ts`:

Find these lines and update:
```typescript
githubUrl: '', // Add: "https://github.com/yourusername/medforecast-ai"
```

### 3. Add Your Resume
1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `/public` folder

### 4. Update Website URL (Optional)
If you have a custom domain, edit `index.html`:

```html
<meta property="og:url" content="https://your-domain.com/" />
<meta property="twitter:url" content="https://your-domain.com/" />
```

## Features Automatically Enabled

### ✅ Smart Conditional Rendering
- GitHub icon only shows if you add a GitHub URL
- LinkedIn icon only shows if you add a LinkedIn URL
- Email icon only shows if you add an email
- Resume button only shows if resume path exists

This means you can leave fields empty and they won't show broken links!

### ✅ Proper Brand Icons
- Real GitHub logo (from react-icons)
- Real LinkedIn logo (from react-icons)
- Professional appearance

### ✅ No Fake Data
- No placeholder statistics
- No invented experience
- No fake project metrics
- Clear TODO comments where you need to add info

## Testing Your Changes

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Open:** http://localhost:5173

3. **Check:**
   - Social icons only appear if URLs are added
   - All links work correctly
   - No "yourusername" text visible
   - No broken images

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Import on Netlify
3. Deploy automatically

### GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json: "deploy": "vite build && gh-pages -d dist"
npm run deploy
```

## Common Issues

### "GitHub icon not showing"
- Make sure you added your GitHub URL in `src/data/profile.ts`
- Icon only shows when URL exists (this is by design)

### "Resume download not working"
- Ensure `resume.pdf` is in the `/public` folder
- Filename must be exactly "resume.pdf"
- Try clearing browser cache

### "Contact form not sending emails"
- This is expected! Form validates input only
- Message shown to users explaining this
- You need to integrate an email service (future enhancement)

## Need Help?

Check these files for configuration:
- `src/data/profile.ts` - Your personal info
- `src/data/projects.ts` - Your projects
- `src/data/skills.ts` - Your skills
- `src/data/education.ts` - Your education

All settings are in the `/src/data` folder for easy access!
