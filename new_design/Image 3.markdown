---
name: Technical Blueprint Light
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#41474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#72787e'
  outline-variant: '#c1c7ce'
  surface-tint: '#336385'
  primary: '#084364'
  on-primary: '#ffffff'
  primary-container: '#2a5b7d'
  on-primary-container: '#a4d2f9'
  inverse-primary: '#9dccf3'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#5a3800'
  on-tertiary: '#ffffff'
  tertiary-container: '#754f14'
  on-tertiary-container: '#f8c37e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#9dccf3'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#154b6c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#f2bd78'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#633f03'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  metric-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.0'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  unit-1: 4px
  unit-2: 8px
  unit-4: 16px
  unit-6: 24px
  unit-8: 32px
  unit-12: 48px
  unit-16: 64px
  grid-gutter: 24px
  grid-margin: 32px
---

## Brand & Style
This design system is built for precision, clarity, and architectural integrity. It targets professionals in engineering, high-end manufacturing, and technical analysis who require a high-information-density environment that remains legible and calm.

The aesthetic is inspired by **modern architectural drafting** and **minimalist technical manuals**. It avoids the aggressive aesthetics of "hacker" interfaces in favor of a clean, sophisticated, and authoritative atmosphere. The emotional response should be one of "structured focus"—where the UI acts as a silent, transparent grid that supports complex decision-making through rigorous alignment and whitespace.

## Colors
The palette is rooted in a "Blueprint Light" ethos. The foundation is an off-white background (#F5F5F5) which reduces eye strain compared to pure white, paired with deep charcoal (#1A1A1A) for high-contrast typography.

The primary accent is a **Muted Architectural Teal** (#2A5B7D), used sparingly for primary actions and active states. Secondary elements utilize a slate blue-grey to maintain the technical feel without overwhelming the user. Borders are kept thin and light to define structure without creating visual noise.

## Typography
The typographic hierarchy distinguishes between **narrative/functional text** and **data/metrics**. 

**Hanken Grotesk** is the workhorse font for all structural elements, headings, and long-form body copy. Its contemporary, sharp geometry reinforces the technical theme. **JetBrains Mono** is reserved strictly for metadata, small labels, and numerical metrics, providing a rhythmic, monospaced "blueprint" feel to the data without turning the entire UI into a terminal. All labels in monospaced font should be uppercase to enhance their "technical notation" character.

## Layout & Spacing
The system utilizes a **Fixed 12-Column Grid** for desktop and a **4-Column Grid** for mobile. The layout philosophy is centered on "The Draftsman's Margin"—generous outer whitespace that frames a highly dense internal grid.

A 4px baseline grid ensures vertical rhythm. Elements should be aligned to a "sub-grid" of light, 0.5px silver lines where possible, mimicking the layout of a technical drawing. Grouping is achieved through whitespace and hairline dividers rather than heavy background shading.

## Elevation & Depth
This system eschews shadows in favor of **Tonal Layering and Outlines**. Hierarchy is established through:

1.  **The Base:** #F5F5F5 background.
2.  **The Canvas:** #FFFFFF surfaces for primary content modules.
3.  **The Detail:** 1px or 0.5px borders in #D1D5DB.

Elevation is communicated via "Inset" vs "Outset" border logic. Buttons and interactive cards use a subtle "floating" effect created by a single-pixel hairline border that darkens on hover, rather than a shadow. This maintains the flat, architectural manual aesthetic.

## Shapes
Shapes are **Soft** (4px radius) to provide just enough approachability to offset the rigid grid, but never "bubbly." Larger containers and main layout sections use 8px (rounded-lg) to subtly differentiate from smaller components like buttons or inputs. The goal is to feel machined and precise, like a chamfered edge on a high-end tool.

## Components
-   **Buttons:** Primary buttons use a solid Architectural Teal background with white Hanken Grotesk text. Secondary buttons are "Ghost" style—1px charcoal borders with no fill, shifting to a light grey fill on hover.
-   **Input Fields:** Strictly rectangular with a 1px border. On focus, the border thickens to 2px in the Teal accent. Labels use the Monospaced font at 10px-12px, placed strictly above the field.
-   **Cards:** White backgrounds with a 1px #D1D5DB border. No shadows. Cards should often feature a "header strip"—a 4px vertical line of the primary color on the left or top edge to denote status.
-   **Data Tables:** No vertical lines. Horizontal lines are 0.5px. Header rows use the Monospaced label font with a subtle light grey background (#EEEEEE).
-   **Technical Dividers:** Use dashed or dotted 1px lines to separate sub-sections within a card, reinforcing the blueprint aesthetic.
-   **Status Indicators:** Small, geometric pips (squares or diamonds) rather than circular dots, using semantic colors (Red/Amber/Green) but muted to fit the architectural palette.