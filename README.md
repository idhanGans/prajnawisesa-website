# Prajnawisesa - Modern Company Profile Website

A professional, modern company profile website built with Next.js 15, TypeScript, Framer Motion, and Tailwind CSS. Featuring a dynamic login page with geometric backgrounds, responsive navigation, and smooth animations.

## 🎨 Features

- **Modern Design**: Professional black, gray, white, and beige color scheme
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Dynamic Animations**: Smooth transitions and interactions using Framer Motion
- **Login Page**: Interactive landing page with geometric SVG background and smooth entrance animation
- **Navigation**: Sticky navbar with hover effects, active states, and mobile menu
- **SEO Optimized**: Proper metadata, semantic HTML, and heading hierarchy
- **TypeScript**: Complete type safety throughout the codebase
- **CSS Modules**: Scoped, maintainable component styling
- **Performance**: Optimized with Next.js App Router and dynamic imports

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Root page (redirects to login)
│   ├── globals.css                # Global styles
│   ├── login/
│   │   ├── page.tsx               # Login page component
│   │   └── page.module.css        # Login page styles
│   └── home/
│       ├── page.tsx               # Home page with sections
│       └── page.module.css        # Home page styles
├── components/
│   ├── animations/
│   │   ├── PageTransition.tsx     # Page fade transition
│   │   ├── FadeInUp.tsx           # Scroll-triggered fade up
│   │   ├── ScaleIn.tsx            # Scroll-triggered scale in
│   │   ├── HoverScale.tsx         # Hover scale effect
│   │   └── index.ts               # Barrel export
│   ├── layout/
│   │   ├── RootLayout.tsx         # Main layout component
│   │   ├── GeometricBackground.tsx # Animated background
│   │   └── GeometricBackground.module.css
│   ├── navbar/
│   │   ├── Navbar.tsx             # Navigation component
│   │   └── Navbar.module.css      # Navbar styles
│   ├── footer/
│   │   ├── Footer.tsx             # Footer component
│   │   └── Footer.module.css      # Footer styles
│   └── sections/
│       └── [Section components]
└── styles/
    └── [Utility styles]
```

## 🚀 Quick Start

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

The login page will display automatically with a smooth entrance animation.

## 📝 Key Components

### Login Page (`src/app/login/page.tsx`)

- Dynamic geometric SVG background with animated shapes
- Center-aligned "Enter Site" button with smooth click animation
- Automatic redirect to home page after animation
- Fully responsive with mobile optimizations
- Animated floating geometric shapes and gradient orbs

### Navbar (`src/components/navbar/Navbar.tsx`)

- Sticky navigation with backdrop blur effect
- Animated menu items with stagger effect
- Active link indicator with gold underline
- Mobile hamburger menu
- Responsive collapse at 768px breakpoint

### Animation Library

Located in `src/components/animations/`:

- **PageTransition**: Fade effect for page changes
- **FadeInUp**: Scroll-triggered fade and slide up
- **ScaleIn**: Scroll-triggered scale animation
- **HoverScale**: Interactive hover with spring physics

### Home Page Sections (`src/app/home/page.tsx`)

1. **Hero Section**: Large title with CTA button
2. **About Section**: Three value propositions
3. **Services Section**: Service offerings showcase
4. **Projects Section**: Featured work examples
5. **CTA Section**: Call-to-action finale

## 🎨 Color Scheme

| Color   | Hex       | Usage                        |
| ------- | --------- | ---------------------------- |
| Primary | `#d4af37` | Accents, buttons, highlights |
| Dark    | `#0a0a0a` | Primary background           |
| Darker  | `#1a1a1a` | Sections, cards              |
| Light   | `#f5f5f5` | Primary text                 |
| Gray    | `#b0b0b0` | Secondary text               |

## 🔍 SEO Features

✅ Metadata configuration in layout
✅ Open Graph tags for social sharing
✅ Semantic HTML structure
✅ Proper heading hierarchy (H1, H2, H3)
✅ Responsive meta viewport
✅ Schema-ready structure

## 🎯 Customization

### Change Colors

Edit `src/app/globals.css`:

```css
:root {
  --color-primary: #d4af37;
  --color-dark: #0a0a0a;
  --color-light: #f5f5f5;
}
```

### Update Brand Name

Edit `src/components/navbar/Navbar.tsx` and `src/app/login/page.tsx`

### Add Sections

Create new components in `src/components/sections/` and import in `src/app/home/page.tsx`

### Modify Animations

Adjust variants in `src/components/animations/`

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Build Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployment on push

### Other Platforms

Deploy to any Node.js hosting with `npm run build` && `npm run start`

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom built

## 🏆 Best Practices

✅ Full TypeScript type safety
✅ Modular component architecture
✅ Performance optimized
✅ Accessible markup
✅ Mobile-first responsive design
✅ Clean, readable code
✅ Semantic HTML
✅ SEO friendly

## 📄 License

MIT License - Free to use and modify

## 🎓 Next Steps

1. Customize colors and branding
2. Add your company content
3. Integrate with backend/API
4. Add contact form functionality
5. Deploy to production
6. Add analytics tracking
7. Implement contact/inquiry forms

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
