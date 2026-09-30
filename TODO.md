# Portfolio Configuration Checklist

## 🎯 3 Things You Need to Add

### 1. Personal Links (5 minutes)

**File:** `src/data/profile.ts`

**Find these lines:**
```typescript
email: "", // TODO: Add your email
github: "", // TODO: Add your GitHub URL
linkedin: "", // TODO: Add your LinkedIn URL
```

**Replace with:**
```typescript
email: "your.actual.email@example.com",
github: "https://github.com/your-username",
linkedin: "https://linkedin.com/in/your-username",
```

---

### 2. Project GitHub URLs (2 minutes)

**File:** `src/data/projects.ts`

**Find these lines:**
```typescript
githubUrl: '', // TODO: Add your GitHub repository URL
```

**Replace with your actual repository URLs:**
```typescript
githubUrl: 'https://github.com/your-username/medforecast-ai',
```

**Note:** If you don't have the project on GitHub yet, leave it empty. The button will automatically hide.

---

### 3. Resume PDF (1 minute)

**Location:** `/public` folder

**Steps:**
1. Export your resume as a PDF file
2. Name it exactly: `resume.pdf`
3. Place it in the `public` folder

**Result:** Download button in navbar and resume section will work automatically.

---

## ✅ How to Test

After making changes:

```bash
npm run dev
```

Open: http://localhost:5173

**Check:**
- [ ] GitHub icon appears (if you added URL)
- [ ] LinkedIn icon appears (if you added URL)
- [ ] Email mailto link works (if you added email)
- [ ] Resume downloads (if you added PDF)
- [ ] No "TODO" text visible on the website
- [ ] All links work correctly

---

## 🚀 Deploy When Ready

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy (automatic!)

### Option 2: Netlify
1. Push to GitHub
2. Go to netlify.com
3. Import your repository
4. Deploy

### Option 3: GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json: "deploy": "vite build && gh-pages -d dist"
npm run deploy
```

---

## ℹ️ Important Notes

- **Social icons auto-hide** if URLs are empty (no broken links!)
- **Resume button auto-hides** if file doesn't exist
- **Project GitHub buttons auto-hide** if URLs are empty
- This means the site works fine even with empty fields

So you can deploy immediately and add information later! ✨
