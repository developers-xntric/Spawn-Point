# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application built with the App Router. The project appears to be a portfolio/agency website featuring game development, digital experiences, and creative services. The site uses a component-based architecture with a focus on animations and interactive elements.

## Architecture & Structure

- **Framework**: Next.js 16 with App Router (`app/` directory)
- **Styling**: Tailwind CSS with custom theme variables and animations
- **UI Components**: Custom component library in `app/components/` and reusable UI components in `app/components/ui/`
- **Routing**: Next.js file-based routing with special route groups in `(screens)/` directory for pages like `/about`, `/contact`, `/brand-experience`, etc.
- **State Management**: React hooks with potential custom hooks in `app/hooks/`
- **3D Graphics**: Three.js with React Three Fiber and Drei for 3D scenes and animations
- **Physics**: Matter.js for physics simulations
- **Animations**: GSAP for advanced animations and custom CSS animations

## Key Directories

- `app/` - Main application with layout, pages, and global configuration
- `app/(screens)/` - Route group containing main pages (about, contact, brand-experience, case-studies)
- `app/components/` - Page-specific and shared components
- `app/components/common/` - Reusable common components
- `app/components/ui/` - Reusable UI components (button, carousel)
- `app/components/about/`, `app/components/contact/`, etc. - Section-specific components
- `lib/` - Utility functions (currently only `utils.ts`)
- `public/` - Static assets including fonts and images
- `hooks/` - Custom React hooks

## Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Styling & Design System

- **CSS Framework**: Tailwind CSS v4 with PostCSS integration
- **Custom Animations**: Custom CSS animations for scrolling effects and fade-ins
- **Fonts**: Custom fonts loaded via @font-face (FKScreamerTrial, Mortend) and Geist from Next.js
- **Theme**: Dark blue (#031347) background with OKLCH color space for theme variations
- **Responsive**: Media queries for different screen sizes, especially mobile adjustments

## Technologies Used

- React 19.2.0
- Next.js 16.0.10
- TypeScript
- Tailwind CSS
- Three.js with @react-three/fiber and @react-three/drei
- Matter.js for physics simulation
- GSAP for animations
- Lucide React icons
- Embla Carousel for carousels
- Radix UI primitives

## Component Organization

The application follows a modular component architecture where the main page (`app/page.tsx`) composes various sections like HeroSection, ServicesCarousel, PartnersSection, CaseStudies, etc. Each section is implemented as a separate component in the components directory, promoting reusability and maintainability.