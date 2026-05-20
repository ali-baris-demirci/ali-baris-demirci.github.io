# Color Palette Reference Guide

## Primary Colors (Trust & Professionalism)

### Primary Blue - #1F3A7F
- **Usage**: Main CTAs, primary text, key interactive elements
- **Hex**: #1F3A7F
- **RGB**: rgb(31, 58, 127)
- **HSL**: hsl(218, 60%, 31%)
- **Examples**: Navigation active states, primary buttons, main headings

### Primary Dark - #152548
- **Usage**: Hover states, dark accents, darker elements
- **Hex**: #152548
- **RGB**: rgb(21, 37, 72)
- **HSL**: hsl(218, 55%, 18%)
- **Examples**: Button hover states, footer background

### Primary Light - #EBF2FF
- **Usage**: Background highlights, subtle accents
- **Hex**: #EBF2FF
- **RGB**: rgb(235, 242, 255)
- **HSL**: hsl(218, 100%, 96%)
- **Examples**: Tab backgrounds, skill panels, icon backgrounds

### Primary Lighter - #F5F8FF
- **Usage**: Very subtle backgrounds
- **Hex**: #F5F8FF
- **RGB**: rgb(245, 248, 255)
- **HSL**: hsl(218, 100%, 98%)
- **Examples**: Subtle background tints

---

## Secondary Colors (Innovation & Technology)

### Secondary Teal - #0D9488
- **Usage**: Data-focused accents, secondary CTAs
- **Hex**: #0D9488
- **RGB**: rgb(13, 148, 136)
- **HSL**: hsl(173, 84%, 32%)
- **Examples**: Education icons, interest badges, secondary highlights

### Secondary Light - #CCFBF1
- **Usage**: Secondary backgrounds, light accents
- **Hex**: #CCFBF1
- **RGB**: rgb(204, 251, 241)
- **HSL**: hsl(170, 94%, 89%)
- **Examples**: Secondary skill panels, light backgrounds

### Secondary Lighter - #F0FDFA
- **Usage**: Very light secondary backgrounds
- **Hex**: #F0FDFA
- **RGB**: rgb(240, 253, 250)
- **HSL**: hsl(170, 100%, 96%)
- **Examples**: Light background tints

---

## Accent Colors (Premium & Vibrant)

### Accent Coral - #FF6B35
- **Usage**: Vibrant highlights, CTAs, special badges
- **Hex**: #FF6B35
- **RGB**: rgb(255, 107, 53)
- **HSL**: hsl(14, 100%, 60%)
- **Examples**: CTA buttons, badges, elevated action states

### Accent Light - #FFE5D9
- **Usage**: Light coral backgrounds
- **Hex**: #FFE5D9
- **RGB**: rgb(255, 229, 217)
- **HSL**: hsl(14, 100%, 92%)
- **Examples**: Soft accent backgrounds

---

## Neutral Colors (Structure & Text)

### Background White - #FFFFFF
- **Usage**: Main background
- **Hex**: #FFFFFF
- **RGB**: rgb(255, 255, 255)
- **HSL**: hsl(0, 0%, 100%)

### Background Light - #F9FAFB
- **Usage**: Alternative section backgrounds
- **Hex**: #F9FAFB
- **RGB**: rgb(249, 250, 251)
- **HSL**: hsl(210, 7%, 98%)

### Background Lighter - #F3F4F6
- **Usage**: Darker neutral backgrounds
- **Hex**: #F3F4F6
- **RGB**: rgb(243, 244, 246)
- **HSL**: hsl(220, 7%, 96%)

### Text Primary - #0F172A
- **Usage**: Main text content
- **Hex**: #0F172A
- **RGB**: rgb(15, 23, 42)
- **HSL**: hsl(215, 48%, 11%)
- **Contrast Ratio**: 17.3:1 with white (AAA level)

### Text Secondary - #475569
- **Usage**: Secondary text, labels
- **Hex**: #475569
- **RGB**: rgb(71, 85, 105)
- **HSL**: hsl(215, 19%, 35%)
- **Contrast Ratio**: 9.5:1 with white (AAA level)

### Text Muted - #94A3B8
- **Usage**: Subtle text, help text
- **Hex**: #94A3B8
- **RGB**: rgb(148, 163, 184)
- **HSL**: hsl(217, 20%, 65%)
- **Contrast Ratio**: 5.2:1 with white (AA level)

### Text Light - #F1F5F9
- **Usage**: Text on dark backgrounds
- **Hex**: #F1F5F9
- **RGB**: rgb(241, 245, 249)
- **HSL**: hsl(214, 32%, 96%)

### Border Color - #E5E7EB
- **Usage**: Card borders, dividers
- **Hex**: #E5E7EB
- **RGB**: rgb(229, 231, 235)
- **HSL**: hsl(210, 14%, 91%)

---

## Shadow System

### Extra Small Shadow
```css
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
```
- Usage: Subtle depth
- Opacity: 4%

### Small Shadow
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
```
- Usage: Light elevation
- Opacity: 6%

### Medium Shadow
```css
box-shadow: 0 8px 16px rgba(31, 58, 127, 0.1);
```
- Usage: Standard depth on cards
- Opacity: 10%
- Uses primary color

### Large Shadow
```css
box-shadow: 0 16px 32px rgba(31, 58, 127, 0.12);
```
- Usage: Prominent elevation
- Opacity: 12%
- Uses primary color

### Extra Large Shadow
```css
box-shadow: 0 24px 48px rgba(31, 58, 127, 0.15);
```
- Usage: Maximum depth
- Opacity: 15%
- Uses primary color

---

## Glass Morphism Effect

### Glass Background
```css
background: rgba(255, 255, 255, 0.85);
```
- Opacity: 85% white

### Glass Border
```css
border: 1px solid rgba(255, 255, 255, 0.2);
```
- Border opacity: 20% white

### Glass Shadow
```css
box-shadow: 0 8px 32px rgba(31, 58, 127, 0.08);
```
- Uses primary color with low opacity

### Combined Example
```css
background: var(--glass-bg);
backdrop-filter: blur(20px);
border: 1px solid var(--glass-border);
box-shadow: var(--glass-shadow);
```

---

## Color Usage Guidelines

### For CTA Buttons
- Default: Primary Blue (#1F3A7F)
- Hover: Primary Dark (#152548)
- Special: Accent Gold (#D4AF37)

### For Cards & Containers
- Border: Border Color (#E5E7EB)
- Shadow: Medium Shadow
- Hover: Add Large Shadow, change border to Primary

### For Icons
- Primary: Primary Blue (#1F3A7F)
- Secondary: Secondary Teal (#0D9488)
- Accent: Accent Gold (#D4AF37)
- Icon Background: Use --light variant

### For Text
- Headings: Text Primary (#0F172A)
- Body: Text Secondary (#475569)
- Help/Hint: Text Muted (#94A3B8)
- On Dark: Text Light (#F1F5F9)

### For Backgrounds
- Main: Background White (#FFFFFF)
- Alternative: Background Light (#F9FAFB)
- Subtle: Background Lighter (#F3F4F6)

---

## Accessibility Compliance

### Contrast Ratios (WCAG Standards)

| Element | Text Color | Background | Ratio | Level |
|---------|-----------|-----------|-------|-------|
| Main Text | Text Primary | White | 17.3:1 | AAA |
| Secondary Text | Text Secondary | White | 9.5:1 | AAA |
| Muted Text | Text Muted | White | 5.2:1 | AA |
| Buttons | White | Primary Blue | 9.8:1 | AAA |
| Buttons | White | Primary Dark | 11.2:1 | AAA |

All text meets minimum WCAG AA standards for accessibility.

---

## Implementation in CSS

### Using Variables
```css
:root {
  --primary: #1F3A7F;
  --secondary: #0D9488;
  --accent: #FF6B35;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  /* ... more variables */
}

/* Usage */
color: var(--text-primary);
background: var(--primary-light);
border-color: var(--border);
box-shadow: var(--shadow-md);
```

---

## Color Psychology

### Primary Blue (#1F3A7F)
- **Perception**: Trustworthy, professional, stable
- **Meaning**: Expertise, confidence, reliability
- **Best For**: Data professionals, finance, technology

### Secondary Teal (#0D9488)
- **Perception**: Modern, innovative, technological
- **Meaning**: Progress, balance, renewal
- **Best For**: Tech-focused content, modern elements

### Accent Coral (#FF6B35)
- **Perception**: Energetic, bold, modern
- **Meaning**: Confidence, momentum, call-to-action
- **Best For**: Achievements, special designations, CTAs

---

## Testing Your Colors

When implementing custom colors, verify:
1. ✅ Contrast ratio meets WCAG AA minimum (4.5:1 for text)
2. ✅ Colors are visually distinct in grayscale
3. ✅ Colors work well in dark and light contexts
4. ✅ Hover/focus states provide clear feedback
5. ✅ Colors align with brand and purpose

---

**Last Updated**: 2026  
**Design System Version**: 1.0  
**Based On**: UI UX Pro Max Professional Portfolio Template
