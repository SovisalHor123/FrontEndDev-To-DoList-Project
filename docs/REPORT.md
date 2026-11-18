# To-Do List App: Project Report (draft)

**Course:** Front-End Development · **Team:** Person 1 (Heang Mapanha), Person 2 (_name_), Person 3 (Sovisal)
**Live site:** https://front-end-dev-to-do-list-project.vercel.app · **Repository:** https://github.com/HeangMapanha/FrontEndDev-To-DoList-Project

> Target length: 1–2 pages. Text in _italics_ or marked **TODO** is a placeholder for the owner to fill in. Delete these notes before submitting.

---

## 1. Overview and approach

We built a single-page task manager with **React 19 + Vite** and **React Router**. Users can create tasks with a title, description, priority, due date and category, filter and search them, see them on a calendar and a dashboard, and change app settings such as the theme. There is no backend: all data is stored in the browser with `localStorage`.

We agreed on a shared data model before writing code, so each person could work in parallel:

- **Task:** `id, title, description, completed, priority, dueDate, category, createdAt`
- **localStorage keys:** `todo-tasks`, `todo-categories`, `todo-settings`
- **Folders:** `src/pages` (one file per route), `src/component`, `src/context`, `src/hook`

Pages and routes (all inside one shared `Layout`):

| Route | Page | Owner |
|-------|------|-------|
| `/` | Dashboard | Person 2 |
| `/tasks` | Task list with filters and search | Person 1 / Person 2 |
| `/tasks/new` (and edit) | Task form | Person 1 |
| `/calendar` | Calendar view | _TODO_ |
| `/settings` | Settings | Person 3 |
| `*` | 404 Not Found | Person 3 |

_TODO (Person 2): add the Categories page here if it becomes its own route._

## 2. Team split

| Person | Responsibility |
|--------|----------------|
| Person 1 | Router setup, `TaskContext` (task CRUD + `todo-tasks`), Tasks and Task form pages |
| Person 2 | Dashboard stats, categories (`todo-categories`), filter / sort / search |
| Person 3 | Layout and navbar, `SettingsContext` + Settings page, global styles and light/dark theme, responsive design, 404 page, deployment, test checklist, README, this report |

Each person worked on their own Git branch and merged into `main` through pull requests.

## 3. How React context and hooks are used

### Context (global state)

- **`SettingsContext`** (Person 3), `src/context/SettingsContext.jsx`. Holds `{ theme, defaultPriority, userName }`. It wraps the whole app in `main.jsx`, so any component can call the custom hook `useSettings()` to read settings or call `updateSetting(key, value)`, `toggleTheme()` and `resetSettings()`. The Navbar's theme button and the Settings page's switch use the same context, so they always stay in sync. `useSettings()` throws a clear error if it is used outside the provider.
- **`TaskContext`** (Person 1). _TODO: describe the state it holds (task array), the actions (add, update, toggle, delete), and the hook used to read it, e.g. `useTasks()`._
- _TODO (Person 2): describe how categories/filters are shared (own context, or part of TaskContext)._

### Hooks

| Hook | Where | Why |
|------|-------|-----|
| `useState` | `SettingsProvider` | Stores the settings object; uses a lazy initialiser (`useState(loadSettings)`) so localStorage is read only once, on first render |
| `useEffect` | `SettingsProvider` | Effect 1 saves settings to `localStorage` whenever they change. Effect 2 sets `<html data-theme="…">` whenever the theme changes |
| `useState` | `Navbar` | `open` flag for the phone menu; closes when a link is clicked |
| `useContext` | `useSettings()` custom hook | Reads `SettingsContext` with a safety check |
| `NavLink` (React Router) | `Navbar` | Highlights the active page; `end` stops "Tasks" from staying active on "New Task" |
| _TODO_ | _TaskContext / task form_ | _Person 1: e.g. `useState` for form fields, `useEffect` to save tasks, `useParams`/`useNavigate` for edit_ |
| _TODO_ | _Dashboard / filters_ | _Person 2: e.g. `useMemo` for filtered lists and stats_ |

## 4. Persistence (localStorage)

Every context loads its data once when the app starts and saves it in a `useEffect` whenever it changes.

- **Settings:** `loadSettings()` reads `todo-settings`, merges it over `DEFAULT_SETTINGS` (so new settings added later still get a default), and falls back to the defaults if the JSON is broken, so the app never crashes on bad data.
- **Clear all data:** the Settings page asks for confirmation, removes all three keys and reloads the page, so every context starts again from its defaults.
- **Tasks / categories:** _TODO (Person 1 / Person 2)._

## 5. Styling, theme and responsive design

- All colours are **CSS variables** in `src/index.css` (`--bg`, `--surface`, `--text`, `--accent`, priority colours…). Dark mode only redefines the variables under `:root[data-theme="dark"]`, so components never need separate dark styles.
- **Responsive:** on screens wider than 768px the navbar is a fixed sidebar; at 768px and below it becomes a top bar with a ☰ button that opens and closes the menu. Headings and spacing get smaller below 600px.
- **Polish:** active link highlight, 404 page, empty states and a "3 of 8 done" counter (_TODO: confirm once TaskContext is merged_).

## 6. Deployment

The app is deployed on **Vercel**, connected to the GitHub repository, so every push redeploys automatically. Because React Router handles URLs in the browser, refreshing a deep link like `/settings` would normally return a server 404. We fixed this with a rewrite rule in `vercel.json` (send every path to `index.html`), plus `public/_redirects` for Netlify as a backup.

## 7. Challenges and solutions

| Challenge | What we did |
|-----------|-------------|
| Working in parallel on one codebase | Agreed the task fields, storage keys and folder names on day one; each person used their own branch |
| Contributing without write access to the main repo | Person 3 worked in a **fork** (`SovisalHor123/FrontEndDev-To-DoList-Project`, branch `Visal`) and opened a cross-repository pull request into `HeangMapanha/…:main`. New pushes to the branch update the open PR automatically |
| Keeping the theme consistent across everyone's components | Shared CSS variables; teammates use `var(--surface)` etc. instead of fixed colours |
| Refresh on deep routes gave 404 on the host | SPA rewrite in `vercel.json` / `_redirects` |
| Theme button in Navbar and switch in Settings getting out of sync | Both read and write the same `SettingsContext` instead of keeping their own state |
| _TODO (Person 1)_ | _e.g. generating unique ids, editing vs creating with one form_ |
| _TODO (Person 2)_ | _e.g. combining filter + search + sort, date handling for the calendar_ |

## 8. Results and testing

- Planned features completed: _X of Y (≥ 90%)_. _TODO: list anything not finished._
- Manual testing: see [`docs/TEST_CHECKLIST.md`](TEST_CHECKLIST.md). _TODO: "N of 64 checks passed on Chrome desktop and on a phone."_
- Requirements checklist:
  - [x] 5+ pages with routing (Dashboard, Tasks, Task form, Calendar, Settings, 404)
  - [x] React Context for global state (SettingsContext, _TaskContext_)
  - [x] `useState` / `useEffect`
  - [x] localStorage persistence (settings; _tasks, categories_)
  - [x] Live deployment on Vercel
  - [ ] _90%+ of planned features (confirm at the end)_
  - [x] Responsive layout with light/dark theme

## 9. What we would improve next

- _e.g. drag-and-drop to reorder tasks, reminders/notifications, sync with a real backend and login (an early `AuthContext` prototype exists in the repo), automated tests._
