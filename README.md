# To-Do List App

A task manager built with **React + Vite** by a team of three for the Front-End Development course.
Create tasks with a priority, due date and category, filter them, see them on a calendar, and switch between light and dark themes.
All data is saved in the browser with `localStorage`, so there is no backend.

**Live demo:** _coming soon_ (add the Vercel/Netlify link here)

## Features

- Dashboard with task progress ("3 of 8 done")
- Create, edit, complete and delete tasks (title, description, priority, due date, category)
- Categories and filters
- Calendar view
- Settings: light/dark theme, default priority, your name, clear all data
- Responsive layout: sidebar on desktop, collapsible menu on phones
- 404 page for unknown links

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/HeangMapanha/FrontEndDev-To-DoList-Project.git
cd FrontEndDev-To-DoList-Project
npm install
npm run dev
```

Then open the URL that Vite prints (usually http://localhost:5173).

## Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload  |
| `npm run build`   | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Check the code with oxlint            |

## Project structure

```
src/
  component/   Layout, Navbar
  context/     React contexts (settings, tasks, ...)
  pages/       One file per route (Dashboard, Tasks, Settings, ...)
  index.css    Global styles and theme variables
```

## Saved data (localStorage keys)

| Key               | Contents                                  |
| ----------------- | ----------------------------------------- |
| `todo-tasks`      | Array of tasks                            |
| `todo-categories` | Array of categories                       |
| `todo-settings`   | `{ theme, defaultPriority, userName }`    |

## Deployment

`vercel.json` and `public/_redirects` send every URL to `index.html`, so refreshing a page such as `/tasks` works on Vercel and Netlify.

## Team

| Person   | Responsibility                                                   |
| -------- | ---------------------------------------------------------------- |
| Person 1 | Routing, task data (TaskContext), task pages                     |
| Person 2 | Dashboard, categories, filters                                   |
| Person 3 | Layout and navbar, settings and theme, styling, deployment, docs |
