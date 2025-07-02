# 🧠 GitHub Copilot Instructions for "Design Labs" Website

Welcome to the Design Labs frontend! This project is built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**, focusing on minimalist web design with strong typography and layout principles.

---

## 🖋️ GOAL

Create a **minimal**, **typography-first**, and **elegant** landing page for a web design agency called **Design Labs**.

### ✨ Visual Style

- Clean whitespace, generous padding
- Thoughtful font pairings (e.g. `Inter` or `Space Grotesk`)
- Sharp vertical rhythm and type hierarchy
- Smooth scroll and simple section transitions
- No clutter, no unnecessary borders or shadows

---

## 🧱 COMPONENT STRUCTURE

### 1. Hero Section (`<Hero />`)
- Left-aligned or centered headline
- Big, bold heading (`text-5xl+`, tracking-tight)
- Minimal subtext (`text-muted-foreground`)
- Optional CTA (Button from `shadcn/ui`)
- Use `max-w-3xl` and responsive padding
- Background: pure white or neutral `#f9fafb`

### 2. About Section (`<About />`)
- Use simple stacked text
- Emphasize purpose and values
- Optionally highlight team or approach

### 3. Work/Portfolio Preview (`<WorkGrid />`)
- Grid layout (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`)
- Use image placeholders or live shots
- Hover effect: subtle scale or fade

### 4. Footer (`<Footer />`)
- Minimal contact + social
- Left-aligned or centered
- Use `text-sm text-muted-foreground`

---

## 🧩 STACK

- **Next.js App Router**
- **Tailwind CSS** with custom theme
- **shadcn/ui** for all buttons, cards, etc.
- **Lucide Icons** for icons
- **Fonts**: Use `next/font` with [Inter](https://fonts.google.com/specimen/Inter), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), or similar

---

## ✅ TASKS FOR COPILOT

> Below are prompt ideas you can give GitHub Copilot.

1. `Create a minimal hero section with large heading, subtext, and CTA button`
2. `Add a responsive grid of image cards using Tailwind and shadcn/ui`
3. `Write a footer with contact info and subtle styling`
4. `Use next/font to import and apply Inter across the site`
5. `Set up layout.tsx with global padding, font, and background color`

---

## 🧼 DESIGN PRINCIPLES

- Keep it **calm** — whitespace is power.
- Let the **typography speak** — type is design.
- **No fluff** — every line must earn its place.
- Animate gently — no bouncy UIs, just fade/slide subtly.

---

## 🧪 OPTIONAL EXTRAS

- `@vercel/analytics` for lightweight tracking
- `react-scroll` or Framer Motion for subtle scroll-based animations
- Custom 404 with same minimal style

---

Let Copilot fill in the blanks using these constraints — build as if *every word and pixel matters*.

