# Grow Invest Website

A responsive marketing site for **Grow Invest**, built with React, Vite, and Tailwind CSS. The experience adapts with dedicated
components for desktop and for mobile/tablet breakpoints, highlighting sustainable investment services, research insights, and
concierge onboarding.

## Available Scripts

- `npm install` – install dependencies
- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run lint` – run ESLint checks

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```
src/
├── components/
│   ├── DesktopView.jsx
│   └── MobileView.jsx
├── App.jsx
├── index.css
└── main.jsx
```

Desktop experiences render when the viewport is `lg` and above, while the mobile component covers mobile and tablet breakpoints
for a touch-friendly layout.
