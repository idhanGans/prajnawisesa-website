# Component Usage Examples

This file provides practical examples of how to use the components in your Prajnawisesa website.

## Table of Contents

1. [Animation Components](#animation-components)
2. [Layout Components](#layout-components)
3. [Navigation](#navigation)
4. [Creating New Pages](#creating-new-pages)
5. [Styling Patterns](#styling-patterns)

---

## Animation Components

### PageTransition

Wrap page content with fade animation:

```tsx
"use client";
import { PageTransition } from "@/components/animations";

export default function MyPage() {
  return (
    <PageTransition delay={0.2}>
      <div>
        <h1>Page Content</h1>
        <p>This content fades in on page load</p>
      </div>
    </PageTransition>
  );
}
```

### FadeInUp

Scroll-triggered animation that fades and slides up:

```tsx
import { FadeInUp } from "@/components/animations";

export const MySection = () => {
  return (
    <section>
      <FadeInUp delay={0}>
        <h2>First Heading</h2>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <h3>Second Heading</h3>
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <p>Description text</p>
      </FadeInUp>
    </section>
  );
};
```

### ScaleIn

Scroll-triggered animation with scale effect:

```tsx
import { ScaleIn } from "@/components/animations";

export const CardGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ScaleIn delay={0}>
        <div className="card">Card 1</div>
      </ScaleIn>

      <ScaleIn delay={0.1}>
        <div className="card">Card 2</div>
      </ScaleIn>

      <ScaleIn delay={0.2}>
        <div className="card">Card 3</div>
      </ScaleIn>
    </div>
  );
};
```

### HoverScale

Interactive hover animation:

```tsx
import { HoverScale } from "@/components/animations";

export const InteractiveButton = () => {
  return (
    <HoverScale scale={1.1}>
      <button className="px-6 py-3 bg-primary text-white rounded">
        Click Me
      </button>
    </HoverScale>
  );
};
```

---

## Layout Components

### RootLayout

Wrapper for pages with Navbar and Footer:

```tsx
"use client";
import { RootLayout } from "@/components/layout";

export default function HomePage() {
  return (
    <RootLayout>
      <main>
        <h1>Welcome to Home</h1>
        {/* Your page content */}
      </main>
    </RootLayout>
  );
}
```

### GeometricBackground

Animated background for pages:

```tsx
"use client";
import { GeometricBackground } from "@/components/layout";

export default function LoginPage() {
  return (
    <>
      <GeometricBackground />
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Your content over the background */}
      </div>
    </>
  );
}
```

---

## Navigation

### Using Navbar

The Navbar is automatically included in RootLayout, but here's how to customize it:

**Edit Navigation Items** (`src/components/navbar/Navbar.tsx`):

```tsx
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
  // Add new items here
];
```

**Styling the Navbar**:
Edit `src/components/navbar/Navbar.module.css`:

```css
.navbar {
  /* Sticky positioning */
  position: sticky;
  top: 0;
  z-index: 100;

  /* Customize colors */
  background: rgba(20, 20, 20, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## Creating New Pages

### Step 1: Create Page Folder

```bash
mkdir -p src/app/services
```

### Step 2: Create Page Component

File: `src/app/services/page.tsx`

```tsx
"use client";
import { RootLayout } from "@/components/layout";
import { FadeInUp } from "@/components/animations";
import styles from "./page.module.css";

export const metadata = {
  title: "Services | Prajnawisesa",
  description: "Explore our comprehensive service offerings",
};

export default function ServicesPage() {
  return (
    <RootLayout>
      <div className={styles.container}>
        <FadeInUp>
          <h1 className={styles.title}>Our Services</h1>
        </FadeInUp>

        <div className={styles.servicesGrid}>{/* Service cards here */}</div>
      </div>
    </RootLayout>
  );
}
```

### Step 3: Add CSS Module

File: `src/app/services/page.module.css`

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f5f5f5;
  margin-bottom: 3rem;
  text-align: center;
}

.servicesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

### Step 4: Update Navbar

Add the new link in `src/components/navbar/Navbar.tsx`:

```tsx
const navItems: NavItem[] = [
  // ... existing items
  { label: "Services", href: "/services" },
];
```

---

## Styling Patterns

### Using CSS Modules

**Component File** (`src/components/my-component/MyComponent.tsx`):

```tsx
import styles from "./MyComponent.module.css";

export const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hello</h2>
    </div>
  );
};
```

**Styles File** (`src/components/my-component/MyComponent.module.css`):

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  color: var(--color-primary);
  font-weight: 700;
}

/* Mobile styles */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .title {
    font-size: 1.5rem;
  }
}
```

### Using Tailwind Utilities

Combine CSS Modules with Tailwind:

```tsx
import styles from "./MyComponent.module.css";

export const MyComponent = () => {
  return (
    <div className={`${styles.container} flex items-center justify-between`}>
      <h2 className={`${styles.title} uppercase`}>Hello</h2>
      <button className="px-4 py-2 bg-primary text-white rounded hover:opacity-90">
        Click
      </button>
    </div>
  );
};
```

### Using Global Styles

Access CSS variables from `globals.css`:

```tsx
const MyComponent = () => {
  return (
    <div style={{ color: "var(--color-primary)" }}>
      Styled with global color
    </div>
  );
};
```

---

## Advanced Examples

### Custom Animation Wrapper

Create `src/components/animations/CustomFade.tsx`:

```tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CustomFadeProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export const CustomFade = ({
  children,
  duration = 0.6,
  delay = 0,
}: CustomFadeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
```

### Section with Staggered Children

```tsx
import { motion } from "framer-motion";

export const StaggeredSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[1, 2, 3].map((item) => (
        <motion.div key={item} variants={itemVariants}>
          Item {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### Responsive Grid Component

```tsx
"use client";
import styles from "./ResponsiveGrid.module.css";

interface GridProps {
  children: React.ReactNode;
  columns?: number;
}

export const ResponsiveGrid = ({ children, columns = 3 }: GridProps) => {
  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))` }}
    >
      {children}
    </div>
  );
};
```

---

## Tips & Tricks

### 1. Using Metadata in All Pages

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Prajnawisesa",
  description: "Page description",
};
```

### 2. Combining Multiple Animations

```tsx
import { FadeInUp, ScaleIn } from "@/components/animations";

export const Card = () => {
  return (
    <FadeInUp delay={0}>
      <ScaleIn delay={0.1}>
        <div>Animated card content</div>
      </ScaleIn>
    </FadeInUp>
  );
};
```

### 3. Responsive Font Sizes

```css
.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* Mobile: 1.5rem, Scales up, Max: 3rem */
}
```

### 4. Smooth Scroll Behavior

Already in `globals.css`:

```css
html {
  scroll-behavior: smooth;
}
```

### 5. Custom Hover Effects

```tsx
import { motion } from "framer-motion";

<motion.div
  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  Content
</motion.div>;
```

---

## Common Patterns

### Hero Section Pattern

```tsx
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <FadeInUp delay={0}>
        <h1 className="text-4xl font-bold">Main Title</h1>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <p className="text-lg">Subtitle</p>
      </FadeInUp>
      <FadeInUp delay={0.4}>
        <button>CTA Button</button>
      </FadeInUp>
    </section>
  );
};
```

### Card Grid Pattern

```tsx
const CardSection = ({ items }: { items: any[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <ScaleIn key={item.id} delay={index * 0.1}>
          <div className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </ScaleIn>
      ))}
    </div>
  );
};
```

---

## Performance Tips

1. **Use React.memo for Heavy Components**

```tsx
import { memo } from "react";

const HeavyComponent = memo(() => <div>Content</div>);
```

2. **Lazy Load Components**

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"));
```

3. **Optimize Images**

```tsx
import Image from "next/image";

<Image src="/image.jpg" alt="Description" width={800} height={600} priority />;
```

---

For more examples, check the existing components in `src/components/` directory!
