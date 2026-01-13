# Prajnawisesa Website - Developer Guide

## Project Overview

This is a modern, professional company profile website built with:

- **Next.js 16** (App Router)
- **TypeScript** (Full type safety)
- **Framer Motion** (Advanced animations)
- **Tailwind CSS** (Utility styling)
- **CSS Modules** (Component-scoped styling)

## Color Palette

Our design uses an elegant, professional color scheme:

```
Primary Colors:
- Gold/Beige:    #d4af37 (Accents, highlights, CTAs)
- Black:         #0a0a0a (Primary background)
- Dark Gray:     #1a1a1a (Sections, cards)
- Off-White:     #f5f5f5 (Primary text)
- Gray:          #b0b0b0 (Secondary text)
- Dark Gray:     #888   (Tertiary text)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with metadata & SEO
│   ├── page.tsx                   # Root redirect to /login
│   ├── globals.css                # Global styles & CSS variables
│   ├── login/
│   │   ├── page.tsx               # Login page with geometric background
│   │   └── page.module.css        # Login page styles
│   └── home/
│       ├── page.tsx               # Home page with multiple sections
│       └── page.module.css        # Home page styles
│
├── components/
│   ├── animations/
│   │   ├── PageTransition.tsx     # Page fade transition wrapper
│   │   ├── FadeInUp.tsx           # Scroll-triggered fade up animation
│   │   ├── ScaleIn.tsx            # Scroll-triggered scale in animation
│   │   ├── HoverScale.tsx         # Interactive hover scale component
│   │   └── index.ts               # Barrel exports
│   │
│   ├── layout/
│   │   ├── RootLayout.tsx         # Main layout (Navbar + Footer wrapper)
│   │   ├── GeometricBackground.tsx # Animated geometric SVG background
│   │   ├── GeometricBackground.module.css
│   │   └── index.ts               # Barrel exports
│   │
│   ├── navbar/
│   │   ├── Navbar.tsx             # Responsive navigation component
│   │   ├── Navbar.module.css      # Navbar styles
│   │   └── index.ts               # Barrel exports
│   │
│   ├── footer/
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Footer.module.css      # Footer styles
│   │   └── index.ts               # Barrel exports
│   │
│   └── sections/
│       └── [For future section components]
│
└── styles/
    └── [For utility styles]
```

## Key Features

### Login Page (`src/app/login/page.tsx`)

**Features:**

- Dynamic geometric SVG background with animated shapes
- Floating gradient orbs with continuous animation
- Center-aligned "Enter Site" button with smooth interactions
- Scroll indicator animation
- Automatic redirect to `/home` after button click
- Full responsive design with mobile optimizations

**Animation Sequence:**

1. Page loads with fade-in effect
2. Title slides down from top
3. Subtitle and description fade in
4. Button scales up with hover effects
5. On click: page scales up and fades out
6. Redirects to home page

**Responsive Breakpoints:**

- Desktop: All elements visible
- Tablet (< 768px): Scroll indicator hidden
- Mobile (< 480px): Adjusted font sizes and padding

### Home Page (`src/app/home/page.tsx`)

**Sections:**

1. **Hero Section** - Large title with gradient effect and CTA button
2. **About Section** - Three value propositions with animated cards
3. **Services Section** - Four service offerings with hover effects
4. **Projects Section** - Featured project showcase with scale animations
5. **CTA Section** - Call-to-action with prominent button

**Features:**

- Sticky navigation with backdrop blur
- Scroll-triggered animations on all sections
- Responsive grid layouts
- Mobile-first design approach
- Interactive hover states

### Navigation (Navbar)

**Features:**

- Sticky positioning with backdrop blur effect
- Animated menu items with stagger effect
- Active state indicator with gold underline
- Mobile hamburger menu toggle
- Responsive collapse at 768px breakpoint
- Smooth scroll animations

**Navigation Items:**

- Home
- About
- Services
- Projects
- Blog
- Contact Us

### Footer

**Features:**

- Company information section
- Multiple link columns (Company, Legal, Social)
- Animated hover states with arrow indicators
- Responsive grid layout
- Copyright and credit information

## Animation Components

### PageTransition

Fade transition for page changes

```tsx
<PageTransition delay={0}>
  <div>Content</div>
</PageTransition>
```

### FadeInUp

Scroll-triggered fade and slide up animation

```tsx
<FadeInUp delay={0.2}>
  <h2>Heading</h2>
</FadeInUp>
```

### ScaleIn

Scroll-triggered scale animation

```tsx
<ScaleIn delay={0.1}>
  <div>Card</div>
</ScaleIn>
```

### HoverScale

Interactive hover scale with spring physics

```tsx
<HoverScale scale={1.05}>
  <button>Click Me</button>
</HoverScale>
```

## Styling Approach

### CSS Modules

- Component-scoped styling prevents class name conflicts
- Named imports for each component
- Organized by component structure

### Tailwind CSS

- Utility-first approach for rapid development
- Configured in `tailwind.config.ts`
- Used alongside CSS Modules

### Global Styles

- `src/app/globals.css` contains:
  - CSS custom properties/variables
  - Base typography styles
  - Utility classes
  - Responsive typography
  - Scrollbar styling
  - Accessibility features

## Responsive Design

**Breakpoints:**

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

**Mobile-First Approach:**

- Start with mobile styles
- Add desktop enhancements with `@media (min-width: ...)`
- All components fully responsive

## SEO & Metadata

**Implemented Features:**

- ✅ Metadata configuration in root layout
- ✅ Open Graph tags for social sharing
- ✅ Twitter card meta tags
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Semantic HTML structure
- ✅ Responsive viewport meta tag
- ✅ Schema-ready structure

**Metadata Location:** `src/app/layout.tsx`

## TypeScript Integration

**Type Safety:**

- Full TypeScript throughout codebase
- Component props with interfaces
- Framer Motion types properly configured
- No `any` types used

**Notable Patterns:**

```tsx
interface ComponentProps {
  children: ReactNode;
  delay?: number;
}

export const Component = ({ children, delay = 0 }: ComponentProps) => {
  // ...
};
```

## Customization Guide

### Change Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: #d4af37; /* Change primary color */
  --color-dark: #0a0a0a; /* Change dark background */
  --color-light: #f5f5f5; /* Change light text */
}
```

### Update Brand Name

1. `src/components/navbar/Navbar.tsx` - Logo
2. `src/app/login/page.tsx` - Login title
3. `src/app/layout.tsx` - Metadata title
4. `src/components/footer/Footer.tsx` - Footer branding

### Add New Sections

1. Create component in `src/components/sections/`
2. Import in `src/app/home/page.tsx`
3. Add to home page JSX

### Modify Animations

- Edit variant definitions in animation components
- Adjust durations, delays, and scales
- Test with `whileHover`, `whileTap` props

### Add New Pages

1. Create folder in `src/app/[pagename]/`
2. Add `page.tsx` file
3. Use `RootLayout` for consistent styling
4. Add to navbar navigation

## Development Workflow

### Start Development Server

```bash
npm run dev
```

Open `http://localhost:3000` - will redirect to login page

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Run Linting

```bash
npm run lint
```

## Best Practices Implemented

✅ **Component Modular Structure** - Reusable, testable components
✅ **Type Safety** - Full TypeScript coverage
✅ **Performance** - Optimized with Next.js App Router
✅ **Accessibility** - Semantic HTML and proper ARIA
✅ **Responsive Design** - Mobile-first approach
✅ **Clean Code** - Consistent formatting and naming
✅ **Documentation** - Clear comments and structure
✅ **SEO Ready** - Metadata and structured data
✅ **Animation Performance** - Hardware-accelerated transforms
✅ **Bundle Size** - Optimized imports and code splitting

## Common Tasks

### Change Button Color

Edit color in component:

```tsx
className={styles.button} // Edit .button class in module.css
background: linear-gradient(135deg, #d4af37 0%, #c9a024 100%);
```

### Add Navigation Link

Edit in `src/components/navbar/Navbar.tsx`:

```tsx
const navItems: NavItem[] = [
  { label: "New Page", href: "#newpage" },
  // ... existing items
];
```

### Update Footer Links

Edit in `src/components/footer/Footer.tsx`:

```tsx
const companyLinks = [
  { name: "New Link", href: "#" },
  // ... existing links
];
```

### Adjust Animation Speed

Edit in animation components:

```tsx
transition: {
  duration: 0.6, // Increase for slower animation
}
```

## Performance Tips

1. **Image Optimization** - Use Next.js `Image` component for images
2. **Lazy Loading** - Components load on scroll
3. **Code Splitting** - Automatic route-based splitting
4. **Caching** - Leverage Next.js caching strategies
5. **Animation Performance** - Use transform and opacity for smooth animations

## Troubleshooting

**Build Issues:**

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript: `npm run build`

**Animation Issues:**

- Ensure `whileInView` has `viewport={{ once: true }}`
- Check `duration` values (seconds, not milliseconds)
- Verify Framer Motion is installed: `npm list framer-motion`

**Styling Issues:**

- Clear browser cache
- Check CSS Modules naming (case-sensitive)
- Verify Tailwind is configured correctly

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel auto-deploys on push
```

### Other Platforms

```bash
npm run build
npm run start
# Deploy the `.next` folder
```

## Future Enhancements

Potential additions:

- [ ] Dark mode toggle
- [ ] Multilingual support
- [ ] Blog functionality
- [ ] Contact form integration
- [ ] Analytics tracking
- [ ] Search functionality
- [ ] User authentication
- [ ] CMS integration
- [ ] Email notifications
- [ ] Performance monitoring

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support

For issues or customizations:

1. Check the documentation above
2. Review component code comments
3. Test changes in development server
4. Consult framework documentation

---

**Last Updated:** January 2026
**Version:** 1.0.0
**Status:** Production Ready
