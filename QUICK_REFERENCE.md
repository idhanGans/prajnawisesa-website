# Prajnawisesa Website - Quick Reference Guide

## ⚡ IMPORTANT UPDATE - Design System Overhaul (January 2026)

### ✨ Major Changes Made

- **Theme**: Converted to professional dark premium aesthetic
- **Colors**: Refined gold accent (#d4af37) throughout
- **Components**: Updated navbar, hero, buttons, cards, footer
- **Documentation**: Created 4 comprehensive guides

### 📚 New Documentation Available

1. **DESIGN_SYSTEM.md** - Complete color & design system
2. **IMPROVEMENTS_SUMMARY.md** - Detailed changelog
3. **VISUAL_COMPARISON.md** - Before/after comparisons
4. **CSS_REFERENCE_GUIDE.md** - Reusable CSS patterns
5. **UPGRADE_COMPLETE.md** - Full project report

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

## 📍 Routes

| Route    | Purpose                         |
| -------- | ------------------------------- |
| `/`      | Redirects to `/login`           |
| `/login` | Login page with dark theme      |
| `/home`  | Main homepage with all sections |

## 🎨 NEW Color Palette (Updated)

| Element              | Color     | Hex          |
| -------------------- | --------- | ------------ |
| Primary Accent       | Gold      | `#d4af37` ⭐ |
| Primary Background   | Black     | `#0a0a0a`    |
| Secondary Background | Charcoal  | `#1a1a1a`    |
| Primary Text         | Off-white | `#f5f5f5`    |
| Secondary Text       | Gray      | `#b0b0b0`    |
| Tertiary Text        | Dark Gray | `#888888`    |

## 📂 Essential Files

| File                                                  | Purpose                      | Updated |
| ----------------------------------------------------- | ---------------------------- | ------- |
| `src/app/layout.tsx`                                  | Root layout, metadata, SEO   | ✅      |
| `src/app/globals.css`                                 | Global styles, CSS variables | ✅      |
| `src/app/login/page.module.css`                       | Login page with dark theme   | ✅      |
| `src/app/home/page.module.css`                        | All sections (REDESIGNED)    | ✅      |
| `src/components/navbar/Navbar.tsx`                    | Navigation component         | ✅      |
| `src/components/navbar/Navbar.module.css`             | Navbar styling (UPDATED)     | ✅      |
| `src/components/footer/Footer.tsx`                    | Footer component             | ✅      |
| `src/components/footer/Footer.module.css`             | Footer styling (UPDATED)     | ✅      |
| `src/components/animations/AnimatedButton.module.css` | Button styling (UPDATED)     | ✅      |

## 🔧 Common Tasks

### Change Brand Name

1. `src/components/navbar/Navbar.tsx` - Line ~20
2. `src/app/login/page.tsx` - Line ~73
3. `src/app/layout.tsx` - Line ~18

### Add New Navigation Link

Edit `src/components/navbar/Navbar.tsx`:

```tsx
const navItems: NavItem[] = [
  { label: "New Page", href: "#newpage" },
  // ... other items
];
```

### Create New Page

```bash
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
touch src/app/new-page/page.module.css
```

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --color-primary: #d4af37;
  --color-dark: #0a0a0a;
  --color-light: #f5f5f5;
}
```

### Add Scroll Animation

```tsx
import { FadeInUp } from "@/components/animations";

<FadeInUp delay={0.2}>
  <h2>Your content</h2>
</FadeInUp>;
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server locally
npm run start

# Run linter
npm run lint
```

## 🎬 Animation Components

| Component        | Usage                    |
| ---------------- | ------------------------ |
| `PageTransition` | Page fade transitions    |
| `FadeInUp`       | Scroll-triggered fade up |
| `ScaleIn`        | Scroll-triggered scale   |
| `HoverScale`     | Hover scale effects      |

## 📱 Responsive Breakpoints

| Device  | Width          | Breakpoint                  |
| ------- | -------------- | --------------------------- |
| Desktop | 1024px+        | -                           |
| Tablet  | 768px - 1023px | `@media (max-width: 768px)` |
| Mobile  | < 768px        | `@media (max-width: 480px)` |

## 🎯 CSS Module Pattern

```tsx
import styles from "./Component.module.css";

export const Component = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Content</h2>
  </div>
);
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
git push origin main
# Vercel auto-deploys
```

### Other Platforms

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

| Issue                 | Solution                       |
| --------------------- | ------------------------------ |
| Build fails           | `rm -rf .next && npm install`  |
| Types error           | `npm run build` to see details |
| Animations not smooth | Check `duration` (in seconds)  |
| Styles not applying   | Clear cache, restart server    |

## 📚 Documentation Files

| File                    | Content                 |
| ----------------------- | ----------------------- |
| `README.md`             | User guide              |
| `DEVELOPER_GUIDE.md`    | Technical documentation |
| `PROJECT_SUMMARY.md`    | Project overview        |
| `COMPONENT_EXAMPLES.md` | Code examples           |
| `QUICK_REFERENCE.md`    | This file               |

## 💻 Terminal Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Run production build
npm run lint            # Run ESLint

# Dependencies
npm install             # Install all packages
npm install <package>   # Install specific package
npm uninstall <package> # Remove package

# Git
git status              # Check status
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push origin main    # Push to GitHub
```

## 🎨 CSS Variables in Use

```css
/* Available in all stylesheets */
var(--color-primary)     /* #d4af37 */
var(--color-dark)        /* #0a0a0a */
var(--color-darker)      /* #1a1a1a */
var(--color-light)       /* #f5f5f5 */
var(--color-gray)        /* #b0b0b0 */
var(--font-sans)         /* Poppins */
```

## 🚦 Development Workflow

1. **Make changes** in your editor
2. **Save file** - dev server auto-reloads
3. **Check browser** at `localhost:3000`
4. **Test responsiveness** with DevTools
5. **Commit changes** to git
6. **Deploy** to production

## 📊 Project Stats

- **Lines of Code**: ~2000+
- **Components**: 8+
- **Pages**: 3 (Login, Home, + Root)
- **Animation Types**: 4
- **Responsive Breakpoints**: 4
- **Color Variables**: 6
- **Dependencies**: 5 main + DevDeps

## ✨ Features at a Glance

✅ Modern design with geometric animations
✅ Fully responsive (mobile, tablet, desktop)
✅ TypeScript for type safety
✅ SEO optimized
✅ Framer Motion animations
✅ CSS Modules for styling
✅ Dark theme
✅ Smooth scroll animations
✅ Interactive hover effects
✅ Mobile hamburger menu

## 🔐 Security

- ✅ No hardcoded secrets
- ✅ Type-safe code
- ✅ XSS protection via React
- ✅ CSRF protection via Next.js
- ✅ CSP ready

## 🚀 Performance Tips

1. Use `dynamic()` for large components
2. Optimize images with Next.js Image
3. Enable caching headers
4. Use CSS variables instead of inline styles
5. Minimize external scripts

## 📞 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🎓 Learning Path

1. Review `README.md` - Get overview
2. Check `PROJECT_SUMMARY.md` - Understand structure
3. Read `COMPONENT_EXAMPLES.md` - See code samples
4. Study `DEVELOPER_GUIDE.md` - Technical deep dive
5. Explore the code - Learn by doing

## 🎯 Next Immediate Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000

# 4. Start customizing
# Edit files in src/ directory

# 5. Build for production
npm run build
```

## ✅ Checklist for Deployment

- [ ] Update brand name
- [ ] Change colors if needed
- [ ] Update metadata in `layout.tsx`
- [ ] Update navigation links
- [ ] Add company logo/images
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Check animations performance
- [ ] Run `npm run build`
- [ ] Deploy to hosting

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Status**: Production Ready

For detailed information, see DEVELOPER_GUIDE.md
