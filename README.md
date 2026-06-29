# Atomity Cloud Optimization Section

## Submission Links

- GitHub repository: https://github.com/Faith-loves/atomity-cloud-section.git
- Live demo: https://atomity-cloud-section.vercel.app/

This project is my submission for the Atomity Frontend Engineering Challenge.

I chose **Option B (0:45–0:55)** from the reference video and interpreted it as a **Multi-Cloud Intelligence Dashboard** that brings infrastructure signals from multiple cloud providers into a single optimization experience.

Rather than recreating the video exactly, I focused on building a polished, interactive section that demonstrates frontend engineering fundamentals, animation craftsmanship, responsive design, and clean architecture.

---

# Selected Feature

**Option B (0:45–0:55)**

The selected feature shows multiple cloud environments connecting to a central dashboard.

My interpretation focuses on:

- AWS
- Azure
- Google Cloud
- On-Premise infrastructure

These providers feed into a single optimization cockpit that displays:

- Infrastructure signals
- Estimated savings
- Resource usage
- Efficiency metrics

---

# Live Demo

TODO

---

# GitHub Repository

TODO

---

# Why I Chose This Feature

I chose Option B because it allowed me to combine several things I enjoy building:

- Dashboard experiences
- Data-driven interfaces
- Motion and micro-interactions
- Responsive UI systems
- Component architecture

It also gave me an opportunity to demonstrate product thinking rather than simply recreating the visuals from the video.

---

# Tech Stack

## Framework
- React
- TypeScript
- Vite

## Animation
- Framer Motion

# Data Fetching & Caching
- TanStack Query (React Query)

# Styling
- CSS Variables
- Modern CSS



# Project Structure

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

---

# Design Approach

The goal was to create a section that feels like a real product rather than a marketing mockup.

The experience follows a simple story:

1. Cloud providers appear.
2. Signals converge into one optimization dashboard.
3. Metrics and KPIs animate into view.
4. The user gets an immediate understanding of system health and optimization opportunities.

---

# Component Architecture

The application is intentionally split into small reusable components:

### ProviderCard
Displays a cloud provider and its connection state.

### KpiCard
Displays animated values such as savings and efficiency.

### MetricBar
Displays infrastructure signals like CPU, RAM, GPU, and Network utilization.

### FeatureSection
Composes all pieces into a single animated experience.

### ThemeToggle
Provides a dark and light theme switch.

---

# Design Tokens

Instead of scattering colors and spacing values throughout the application, I created a small token system using CSS variables.

The token architecture centralizes:

- Colors
- Surface styles
- Radius values
- Shadows
- Spacing
- Theme values

This made the UI easier to maintain and allowed dark mode to be implemented with minimal changes.

---

# Data Fetching

The section fetches data from:

https://dummyjson.com/products?limit=6

The challenge specified that the data did not need to be real cloud data, so I transformed the API response into cloud optimization signals.

Examples:

- Product price → estimated savings
- Product stock → active resources
- Product rating → efficiency score
- Product discount → optimization metrics

This demonstrates:

- Async data loading
- Dynamic rendering
- Error handling
- Loading states

---

# Caching Strategy

I used **TanStack Query** because it provides:

- Request caching
- Stale data management
- Retry handling
- Loading and error states
- Prevention of unnecessary refetching

The dashboard data remains cached for a period of time so returning to the section feels instant.

---

# Animation Approach

The animations are designed to support the story of the feature rather than distract from it.

The experience includes:

- Scroll-triggered entrances
- Staggered card animations
- Dashboard reveal animations
- Animated metric bars
- Counting KPI values
- Hover interactions
- Pulsing connection indicators

I also respected the user's `prefers-reduced-motion` setting.

---

# Modern CSS Features Used

This project intentionally uses modern CSS capabilities, including:

- CSS Variables
- `clamp()`
- `color-mix()`
- Container Queries
- Logical Properties
- `prefers-reduced-motion`

---

# Accessibility

Accessibility considerations include:

- Semantic HTML elements
- Keyboard-accessible controls
- Sufficient color contrast
- Reduced motion support
- Responsive layouts

---

# Responsive Design

The section was designed and tested for:

- Desktop (1280px+)
- Tablet (768px)
- Mobile (375px)

The layout progressively simplifies on smaller screens by stacking content and reducing spacing.

---

# Dark Mode

As a bonus feature, I implemented a dark/light theme toggle using the token architecture.

---

# Tradeoffs

Because the challenge emphasizes quality over scope, I intentionally focused on one polished section instead of building multiple sections or an entire website.

---

# What I Would Improve With More Time

- Add SVG connection animations between providers and the dashboard.
- Add more advanced charts and live data visualizations.
- Introduce streaming metrics and real-time updates.
- Add deeper analytics around user interaction with the optimization cockpit.
- Expand accessibility testing and keyboard interactions.

---

# Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

bash
npm run build


# Final Thoughts

This challenge was an opportunity to focus on the frontend engineering areas I enjoy most: creating interactive experiences, building reusable components, and translating abstract product ideas into interfaces that feel real and useful.

Thank you for taking the time to review my submission.