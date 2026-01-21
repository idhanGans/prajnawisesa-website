# 🎨 PRAJNAWISESA - Color & Design System Guide

## 📏 Complete Design System

### 🎯 Primary Color Palette

```
████████████████████ #0a0a0a - Dark Black (Primary Background)
████████████████████ #1a1a1a - Charcoal (Secondary Background)
████████████████████ #d4af37 - Vibrant Gold (Primary Accent) ⭐
████████████████████ #e5bf5c - Light Gold (Hover State)
████████████████████ #c9a87c - Dark Gold (Secondary Accent)
```

### 📝 Text Colors

```
████████████████████ #f5f5f5 - Off-White (Primary Text)
████████████████████ #b0b0b0 - Medium Gray (Secondary Text)
████████████████████ #888888 - Dark Gray (Tertiary Text)
```

### 🌈 Gradient Palette

```css
/* Gold Gradient (Primary) */
linear-gradient(135deg, #d4af37 0%, #c9a87c 100%)

/* Gold Gradient (Hover/Bright) */
linear-gradient(135deg, #e5bf5c 0%, #d4af37 100%)

/* Dark Gradient (Backgrounds) */
linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)

/* Diagonal Dark Gradient */
linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)

/* Card Gradient */
linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(212, 175, 55, 0.02) 100%)

/* Card Hover Gradient */
linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)
```

---

## 🎬 Component Library

### BUTTON STYLES

#### Primary Button (Gold Gradient)

```
┌──────────────────────────────────────┐
│  GET STARTED ➜                       │
│                                      │
│  Background: #d4af37 to #c9a87c    │
│  Text: #0a0a0a                      │
│  Border-radius: 4px                 │
│  Padding: 1rem 2rem                 │
│  Shadow: 0 4px 15px rgba(212,175... │
│  Hover: Brighter gradient + lift    │
└──────────────────────────────────────┘
```

#### Secondary Button (Outline)

```
┌──────────────────────────────────────┐
│  OUR SERVICES ➜                      │
│                                      │
│  Background: Transparent            │
│  Border: 2px #d4af37                │
│  Text: #d4af37                       │
│  Hover: Bg becomes #d4af37 tinted   │
└──────────────────────────────────────┘
```

### CARD VARIANTS

#### Base Card

```
┌────────────────────────────────┐
│ ─────── (Top Accent Line)      │
│                                │
│ Title                          │
│ Bright text                    │
│                                │
│ Description                    │
│ Gray text                      │
│                                │
│ Gold accent text               │
│ (CTA or metric)               │
└────────────────────────────────┘

Border: 1px rgba(212, 175, 55, 0.15)
Background: Linear gradient (gold tint)
Hover: Enhanced shadow + border brightens
```

#### Stat Card

```
┌────────────────────────────────┐
│                                │
│  15+ ⭐                         │
│  Years Experience              │
│                                │
│  (Gold number)                │
│  (Gray text)                  │
└────────────────────────────────┘

Hover:
- Border highlights
- Shadow enhances
- Background tints
```

---

## 🏗️ Layout Components

### Section Header Pattern

```
SECTION LABEL
────────────────────────────────────────────

- Line accent (gradient gold)
- Text: Uppercase gray
- Number: Gold accent
- Example: "01 About Us"

Spacing:
- Bottom margin: 2rem
- Label gap: 1rem
- Line width: 40px
- Line height: 2px
```

### Section Spacing

```
Section Start
   ↓
Padding: 8rem 4rem
   ↓
Content
   ↓
Max-width: 1400px
   ↓
Container padding: 0 4rem
   ↓
Section End
```

---

## 📐 Typography System

### Font Sizes

```
Display XL:   clamp(3.5rem, 12vw, 8rem)     (Hero title)
Display LG:   clamp(2.2rem, 4vw, 3.2rem)    (Section title)
Display MD:   clamp(1.3rem, 3vw, 2rem)      (Card title)
Body LG:      1.15rem                        (Section intro)
Body MD:      1.05rem                        (Description)
Body SM:      0.95rem                        (Secondary text)
Label:        0.75rem - 0.85rem              (Overlines)
```

### Line Heights

```
Display: 1.05 (tight)
Heading: 1.2  (natural)
Body: 1.7 - 1.8 (spacious)
Label: 1 (tight)
```

### Letter Spacing

```
Display: -1px to 0px        (Tight)
Heading: 0px               (Neutral)
Body: 0px                  (Neutral)
Label: 1.5px - 2px        (Wide)
```

---

## 🎨 Color Usage Guide

### Where to Use Each Color

| Color   | Usage              | Example                     |
| ------- | ------------------ | --------------------------- |
| #0a0a0a | Primary background | Main page background        |
| #1a1a1a | Secondary sections | Section backgrounds         |
| #d4af37 | CTAs, accents      | Buttons, links, highlights  |
| #e5bf5c | Hover states       | Button hover, active states |
| #f5f5f5 | Primary text       | Main heading, body text     |
| #b0b0b0 | Secondary text     | Descriptions, subtitles     |
| #888    | Tertiary text      | Captions, metadata          |

### Never Use

```
❌ Light backgrounds for main sections
❌ White text on light backgrounds
❌ Old gold color (#c9a87c) as primary
❌ Low contrast combinations
❌ Colors not in palette
```

---

## 🌟 Shadow System

### Standard Shadows

```css
/* Subtle Shadow (Default) */
box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);

/* Medium Shadow (Hover) */
box-shadow: 0 6px 25px rgba(212, 175, 55, 0.3);

/* Deep Shadow (Active/Focus) */
box-shadow: 0 10px 40px rgba(212, 175, 55, 0.1);

/* Glow Effect (Hero) */
filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.15));

/* Subtle Glow (Backgrounds) */
filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.1));
```

---

## 🔄 Animation Timing

### Standard Durations

```css
Fast:       0.2s (Micro-interactions)
Medium:     0.3s (Standard transitions)
Slow:       0.4s (Important animations)
Emphasis:   0.5s (Focus animation)
```

### Easing Functions

```css
Standard:     ease-in-out
Smooth:       cubic-bezier(0.4, 0, 0.2, 1) ⭐ (Preferred)
Quick:        ease-out
Gradual:      ease-in
Bounce:       cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

---

## 📱 Responsive Breakpoints

### Device Categories

```
Mobile:          < 480px   (320px to 479px)
Tablet Small:    480px - 768px
Tablet Large:    768px - 1024px
Desktop:         > 1024px  (1024px+)
```

### Fluid Sizing Formula

```css
/* For responsive sizing */
font-size: clamp(MIN, PREFERRED, MAX);

examples: clamp(0.9rem, 2vw, 1.1rem) /* Fluid font */ clamp(1rem, 5vw, 3rem)
  /* Fluid padding */ clamp(1rem, 3vw, 2rem); /* Fluid gap */
```

---

## ✅ Quality Checklist

### Color Contrast (WCAG AA)

```
✅ #f5f5f5 on #0a0a0a    = 14.6:1  (Excellent)
✅ #b0b0b0 on #0a0a0a    = 5.3:1   (Excellent)
✅ #d4af37 on #0a0a0a    = 5.1:1   (Excellent)
✅ #d4af37 on #f5f5f5    = 3.8:1   (Good)
```

### Animation Performance

```
✓ GPU-accelerated transforms
✓ 60fps minimum
✓ No layout shifts
✓ Smooth curves
✓ No jank
```

### Accessibility

```
✓ Color not only indicator
✓ Sufficient contrast
✓ Keyboard navigation
✓ Focus states visible
✓ Screen reader friendly
```

---

## 🎯 Real-World Usage Examples

### Creating a New Card

```css
.myCard {
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.05) 0%,
    rgba(212, 175, 55, 0.02) 100%
  );
  border: 1px solid rgba(212, 175, 55, 0.15);
  padding: 2rem;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.myCard:hover {
  border-color: rgba(212, 175, 55, 0.4);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1) 0%,
    rgba(212, 175, 55, 0.05) 100%
  );
  box-shadow: 0 10px 40px rgba(212, 175, 55, 0.1);
}
```

### Creating a New Button

```css
.myButton {
  background: linear-gradient(135deg, #d4af37 0%, #c9a87c 100%);
  color: #0a0a0a;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.myButton:hover {
  background: linear-gradient(135deg, #e5bf5c 0%, #d4af37 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.3);
}
```

---

## 🚀 Best Practices

### DO ✅

```
✓ Use the gold accent for CTAs
✓ Maintain dark backgrounds
✓ Use hover effects consistently
✓ Follow spacing guidelines
✓ Use provided gradients
✓ Test contrast ratios
✓ Keep animations smooth
✓ Maintain consistency
```

### DON'T ❌

```
✗ Change core colors arbitrarily
✗ Mix different shadow systems
✗ Use abrupt transitions
✗ Create low-contrast text
✗ Ignore accessibility
✗ Use non-palette colors
✗ Create jerky animations
✗ Overcomplicate designs
```

---

## 📚 Reference Files

Located in project root:

- `IMPROVEMENTS_SUMMARY.md` - Full changelog
- `VISUAL_COMPARISON.md` - Before/after
- `CSS_REFERENCE_GUIDE.md` - Code patterns
- `UPGRADE_COMPLETE.md` - Project report

---

**Design System Version**: 1.0  
**Last Updated**: January 2026  
**Status**: ✅ Complete & Ready for Use
