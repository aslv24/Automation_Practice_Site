# Selenium Practice Site

A Next.js practice app for learning and demonstrating common Selenium automation scenarios through interactive UI exercises.

## Features

- Dashboard for navigating practice modules
- Alerts, calendar, checkbox, dropdown, forms, frames, mouse, radio button, suggestion list, waits, windows, and file upload scenarios
- Predictable ids and interactions that are useful for browser automation practice

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run lint` checks the codebase with ESLint

## Project Structure

- `src/app` contains routes for each practice page
- `src/components/modules` contains the interactive Selenium practice widgets
- `src/components/layout` contains shared layout helpers
- `src/data` contains reusable static data for the UI

## Notes

- This project is designed for UI automation practice, so components intentionally expose stable selectors and simple behaviors.
- Browser-only features are isolated into client components where possible to keep the rest of the app simpler.
