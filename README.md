# Plotfolio - AI & Data Science Portfolio

A modern, premium, and highly responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional dark theme with glassmorphism effects and smooth gradients
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion with reduced-motion support
- **SEO Optimized**: Complete meta tags for search engines and social media
- **Accessible**: Following WCAG guidelines with semantic HTML and ARIA labels
- **Type-Safe**: Built with TypeScript for better code quality
- **Fast Performance**: Optimized build with lazy loading and efficient bundling

## 📂 Project Structure

```
plotfolio/
├── public/              # Static assets (place resume.pdf here)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/           # Data files for easy content updates
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── education.ts
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd plotfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/`:

1. **Profile** (`src/data/profile.ts`):
   - Update name, role, tagline, description
   - Add your email, GitHub, and LinkedIn URLs

2. **Projects** (`src/data/projects.ts`):
   - Add/remove projects
   - Update descriptions, technologies, and links

3. **Skills** (`src/data/skills.ts`):
   - Add/remove skills by category
   - Customize skill categories

4. **Education** (`src/data/education.ts`):
   - Update degree and institution information

### Add Your Resume

Place your resume as `resume.pdf` in the `public` directory.

### Update Colors

Modify the color scheme in `tailwind.config.js` and `src/index.css`.

### Update SEO Meta Tags

Edit `index.html` to update:
- Page title and description
- Open Graph tags for social media
- Your website URL

## 📱 Sections

The portfolio includes the following sections:

1. **Navigation**: Sticky nav with smooth scroll
2. **Hero**: Introduction with CTA buttons
3. **About**: Personal introduction with stats
4. **Skills**: Categorized technical skills
5. **Projects**: Featured projects with modal details
6. **Experience**: Current focus and activities
7. **Education**: Academic background
8. **Resume**: Download CTA
9. **Contact**: Contact form and information
10. **Footer**: Social links and copyright

## 🛠️ Technologies Used

- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool
- **Tailwind CSS v4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import the repository in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

**Abhinand UK**
- Email: [Your Email]
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using React, TypeScript & Tailwind CSS
