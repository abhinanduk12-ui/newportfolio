# Customization Guide

This guide will help you customize the portfolio website with your own information.

## 🎯 Quick Start Checklist

- [ ] Update personal information in `src/data/profile.ts`
- [ ] Add your projects in `src/data/projects.ts`
- [ ] Customize skills in `src/data/skills.ts`
- [ ] Update education in `src/data/education.ts`
- [ ] Add your resume to `public/resume.pdf`
- [ ] Update meta tags in `index.html`
- [ ] Test on mobile and desktop
- [ ] Deploy to your hosting platform

## 📝 Step-by-Step Customization

### 1. Personal Information (`src/data/profile.ts`)

Replace the placeholder information with your actual details:

```typescript
export const profile: ProfileData = {
  name: "Your Name",
  role: "Your Role/Title",
  tagline: "Your tagline...",
  description: "Your description...",
  email: "your.email@example.com",  // Your actual email
  location: "Your City, Country",
  github: "https://github.com/yourusername",  // Your GitHub profile
  linkedin: "https://linkedin.com/in/yourusername",  // Your LinkedIn profile
  resume: "/resume.pdf"
};
```

### 2. Projects (`src/data/projects.ts`)

#### Update Existing Projects

Replace the placeholder GitHub URLs and information:

```typescript
githubUrl: 'https://github.com/yourusername/project-name',
liveUrl: 'https://your-project.com',  // Optional
```

#### Add New Projects

Copy the project template and fill in your information:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Name',
  category: 'Category',
  description: 'Short description...',
  longDescription: 'Detailed description...',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  technologies: [
    'Tech 1',
    'Tech 2',
  ],
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://demo.com',  // Optional
  isFeatured: true  // Only for your best project
}
```

#### Remove the "Coming Soon" Project

Delete the third project entry if you don't want the placeholder.

### 3. Skills (`src/data/skills.ts`)

Add or remove skills based on your expertise:

```typescript
{
  category: 'Your Category',
  skills: [
    { name: 'Skill 1' },
    { name: 'Skill 2' },
  ]
}
```

**Recommended Categories:**
- Programming Languages
- Frameworks & Libraries
- AI & Machine Learning
- Databases
- Tools & Technologies

### 4. Education (`src/data/education.ts`)

Update with your educational background:

```typescript
export const education: Education = {
  degree: 'Your Degree',
  institution: 'Your University/College',
  location: 'City, Country',
  focus: [
    'Area 1',
    'Area 2',
  ]
};
```

### 5. Resume

Place your resume PDF file in the `public` directory:

```bash
public/resume.pdf
```

Make sure the filename matches what's specified in `profile.ts` (default: `resume.pdf`).

### 6. SEO & Meta Tags (`index.html`)

Update the following in `index.html`:

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description..." />

<!-- Update URLs -->
<meta property="og:url" content="https://yourwebsite.com/" />
<meta property="twitter:url" content="https://yourwebsite.com/" />

<!-- Add your og-image -->
<meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
```

### 7. Favicon

Replace the default favicon:

1. Create or get your favicon
2. Save it as `public/favicon.svg` or `public/favicon.ico`
3. Update the link in `index.html` if needed

### 8. Open Graph Image (Optional but Recommended)

For better social media sharing:

1. Create an image (1200x630px recommended)
2. Save it as `public/og-image.jpg`
3. Update the meta tag in `index.html`

## 🎨 Design Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

Or edit `src/index.css` for custom gradients:

```css
.text-gradient {
  background: linear-gradient(to right, your-colors);
}
```

### Fonts

Change the font in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'YourFont', system-ui, -apple-system, sans-serif;
}
```

### Animations

Adjust animation speeds in component files or `src/index.css`.

To disable animations:
- Remove `motion.*` wrappers in components
- Or set `transition={{ duration: 0 }}`

## 🚀 Before Deploying

### 1. Test Locally

```bash
npm run dev
```

Check:
- All sections display correctly
- Links work (GitHub, LinkedIn, email)
- Resume downloads
- Mobile responsiveness
- Forms validate

### 2. Build Test

```bash
npm run build
npm run preview
```

Verify the production build works correctly.

### 3. Update URLs

In `src/data/profile.ts`, ensure all URLs are correct:
- ✅ https://github.com/yourusername
- ❌ https://github.com/yourusername (without actual username)

### 4. Remove Placeholder Text

Search for:
- "yourusername"
- "example.com"
- "your.email"
- Any other placeholder text

## 📱 Testing Checklist

- [ ] Navigation works on mobile
- [ ] All sections are visible and scroll smoothly
- [ ] Hero section displays correctly
- [ ] Projects open in modal on click
- [ ] Contact form validates inputs
- [ ] Resume button downloads PDF
- [ ] Social links open correct profiles
- [ ] Responsive on phone (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1920px)

## 🆘 Common Issues

### Build Fails

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Try building again

### Styles Not Applying

1. Check Tailwind config
2. Verify `@import "tailwindcss"` in CSS
3. Clear browser cache

### Icons Not Showing

- Lucide React doesn't include brand logos (GitHub, LinkedIn)
- The portfolio uses generic icons (Code, Briefcase) that represent these platforms
- To use actual logos, consider adding SVG images in the `public` folder

## 💡 Tips

1. **Keep it Real**: Don't exaggerate experience or skills
2. **Update Regularly**: Add new projects as you build them
3. **Test Everything**: Click every button and link
4. **Mobile First**: Most visitors will be on mobile
5. **Fast Loading**: Optimize images before adding them
6. **Accessibility**: Ensure good contrast ratios
7. **Proofread**: Check for typos in descriptions

## 🎓 Next Steps

After customization:

1. Deploy to Vercel/Netlify/GitHub Pages
2. Share on LinkedIn and GitHub profile
3. Add the link to your resume
4. Update regularly with new projects
5. Monitor analytics (optional)

## 📧 Need Help?

If you encounter issues:
1. Check the main README.md
2. Review error messages carefully
3. Verify all file paths are correct
4. Ensure all placeholders are replaced

Good luck with your portfolio! 🚀
