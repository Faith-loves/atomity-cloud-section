# Atomity Frontend Engineering Challenge

## Overview

This project is my submission for the Atomity Frontend Engineering Challenge.

I chose **Option B (0:45–0:55)** from the reference video. The section is my interpretation of how multiple cloud providers can feed data into a single optimization dashboard that gives teams visibility into infrastructure health, resource usage, and potential savings.

Instead of recreating the video pixel for pixel, I focused on building a polished and interactive experience that feels like a real product while following the requirements of the challenge.

---

## Live Demo

[Add Vercel URL here]

---

## GitHub Repository

[Add GitHub URL here]

---

# The Idea

The section represents a **Multi-Cloud Intelligence Dashboard**.

The experience shows:

- Multiple cloud environments (AWS, Azure, Google Cloud, On-Premise)
- Infrastructure data being unified into a central dashboard
- Live optimization metrics
- Estimated savings and efficiency insights
- Smooth, intentional animations that guide the user through the experience

---

# Why I Chose This Feature

I chose Option B because it allowed me to combine several things that I enjoy building:

- Data-driven interfaces
- Dashboard experiences
- Motion and micro-interactions
- Responsive design
- Frontend architecture

I also felt this feature gave me the opportunity to demonstrate product thinking rather than simply recreating what was shown in the video.

---

# Tech Stack

### Framework
- React
- TypeScript
- Vite

### Animation
- Framer Motion

### Data Fetching & Caching
- TanStack Query (React Query)

### Styling
- CSS Variables
- Modern CSS features

---

# Component Structure

```text
src/
├── components/
│   ├── FeatureSection.tsx
│   ├── ProviderCard.tsx
│   ├── KpiCard.tsx
│   ├── MetricBar.tsx
│   └── ThemeToggle.tsx
│
├── hooks/
│   └── useCloudMetrics.ts
│
├── styles/
│   ├── global.css
│   └── feature-section.css
│
├── tokens/
│   └── tokens.ts
│
├── App.tsx
└── main.tsx
```

---

# Design Tokens

To avoid hardcoded values across components, I created a small design token system using CSS variables and a central token file.

The project defines:

- Colors
- Radius values
- Spacing
- Surface styles
- Theme variables

This made it easy to implement dark mode and keep styling consistent throughout the project.

---

# Data Fetching

The section fetches data from:

https://dummyjson.com/products?limit=6

The API data is intentionally transformed into cloud-related metrics such as:

- Estimated savings
- Resource counts
- Efficiency scores
- Dashboard signals

The challenge stated that the data did not need to be real cloud data, so I focused on demonstrating asynchronous data handling and dynamic rendering.

---

# Caching Strategy

I used **TanStack Query** because it provides:

- Request caching
- Stale data management
- Loading states
- Error states
- Prevention of unnecessary refetching

The data remains cached for a period of time, making revisits feel instantaneous.

---

# Animation Approach

The goal of the animations was to support the story of the feature rather than distract from it.

Animations include:

- Scroll-triggered entrances
- Staggered card animations
- Dashboard reveal animation
- Animated metric bars
- Counting KPI values
- Subtle hover interactions
- Pulsing connection indicators

I also respected the user's `prefers-reduced-motion` setting and simplified animations when appropriate.

---

# Modern CSS Features Used

This project intentionally uses modern CSS capabilities, including:

- CSS variables
- `clamp()`
- `color-mix()`
- Container queries
- Logical properties
- `prefers-reduced-motion`

---

# Accessibility

Some accessibility considerations included:

- Semantic HTML elements
- Keyboard-accessible controls
- Sufficient color contrast
- Reduced motion support
- Responsive layouts across screen sizes

---

# Responsive Design

The section was designed and tested for:

- Desktop
- Tablet
- Mobile

The layout adapts by stacking content and simplifying some decorative elements on smaller screens.

---

# Dark Mode

As an additional enhancement, I implemented a light and dark theme toggle using the token architecture.

---

# Tradeoffs

Given the challenge time limit, I intentionally focused on one highly polished section instead of building multiple sections or a complete application.

If I had more time, I would add:

- SVG connection animations between cloud providers
- More realistic charts
- Live streaming metrics
- More advanced micro-interactions
- Additional accessibility improvements

---

# Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

# Final Thoughts

This challenge was a great opportunity to focus on frontend fundamentals that I enjoy most: creating interactive experiences, building reusable components, and turning abstract product ideas into interfaces that feel real and useful.

Thank you for taking the time to review my submission.