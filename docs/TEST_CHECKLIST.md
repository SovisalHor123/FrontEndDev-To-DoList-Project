# Manual Test Checklist

Run these checks on the **live site** (https://front-end-dev-to-do-list-project.vercel.app) before submitting, and again after any big merge.
Tick `[x]` when a case passes. If one fails, write a short note in the **Notes** column and tell the owner.

**Owners:** P1 = Person 1 (routing, TaskContext, task pages) · P2 = Person 2 (dashboard, categories, filters) · P3 = Person 3 (layout, settings, theme, responsive, deploy)

**Test setup**

- Browsers: Chrome (desktop) and one phone (or Chrome DevTools device mode, e.g. iPhone 12 / 390px wide).
- Start from a clean state: Settings → Clear all data, or DevTools → Application → Local Storage → delete `todo-tasks`, `todo-categories`, `todo-settings`.

Tested by: __________ Date: __________ Browser/device: __________

---

## 1. Navigation and routing

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 1.1 | P1 | Open `/` | Dashboard page loads inside the layout (sidebar + main area) | [ ] | |
| 1.2 | P1 | Click every link in the sidebar: Dashboard, Tasks, New Task, Calendar, Settings | Each page opens without a full page reload; URL changes | [ ] | |
| 1.3 | P3 | Look at the sidebar on each page | Only the current page's link is highlighted (Tasks is not highlighted on New Task) | [ ] | |
| 1.4 | P1 | Use the browser Back and Forward buttons | Goes to the previous/next page correctly | [ ] | |
| 1.5 | P3 | Open `/this-does-not-exist` | 404 page with "Back to Dashboard" link; sidebar still visible | [ ] | |
| 1.6 | P3 | Click "Back to Dashboard" on the 404 page | Goes to `/` | [ ] | |
| 1.7 | P3 | On the live site, open `/tasks`, `/settings`, `/calendar` directly and press F5 | Page reloads normally, no Vercel "404: NOT_FOUND" | [ ] | |

## 2. Tasks: create, read, update, delete

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 2.1 | P1 | New Task → fill title, description, priority, due date, category → Save | Task appears in the Tasks list with all fields | [ ] | |
| 2.2 | P1 | Try to save with an empty title (or only spaces) | Not saved; a clear message is shown | [ ] | |
| 2.3 | P1+P3 | Open New Task after setting Default priority = High in Settings | Priority field starts on High | [ ] | |
| 2.4 | P1 | Edit an existing task, change title and priority, Save | List shows the new values; no duplicate task created | [ ] | |
| 2.5 | P1 | Tick a task as completed, then untick it | Status toggles and the style changes (e.g. strikethrough) | [ ] | |
| 2.6 | P1 | Delete a task | Task disappears (ask for confirm if the team chose to) | [ ] | |
| 2.7 | P1 | Add 3 tasks, refresh the page | All 3 tasks are still there (saved in `todo-tasks`) | [ ] | |
| 2.8 | P1 | Very long title (100+ characters) and long description | Text wraps; layout does not break on desktop or phone | [ ] | |
| 2.9 | P1 | Task with no due date and no category | Saves fine; list shows "No date" / "Uncategorized" (or blank) instead of an error | [ ] | |
| 2.10 | P1 | Due date in the past | Task is saved and shown as overdue (if the team added that) | [ ] | |

## 3. Filters, sort and search

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 3.1 | P2 | Filter: All / Active / Completed | List shows only matching tasks | [ ] | |
| 3.2 | P2 | Filter by priority (Low / Medium / High) | Only tasks with that priority | [ ] | |
| 3.3 | P2 | Filter by category | Only tasks in that category | [ ] | |
| 3.4 | P2 | Search part of a title, using different upper/lower case | Matching tasks shown (search is not case-sensitive) | [ ] | |
| 3.5 | P2 | Sort by due date, then by priority | Order is correct; tasks without a due date go to the end | [ ] | |
| 3.6 | P2 | Combine filter + search | Both apply together | [ ] | |
| 3.7 | P2+P3 | Search for something that matches nothing | Friendly empty message, e.g. "No tasks match your filters" | [ ] | |

## 4. Categories

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 4.1 | P2 | Add a category | It appears in the category list and in the task form dropdown | [ ] | |
| 4.2 | P2 | Add an empty or duplicate category name | Rejected with a message | [ ] | |
| 4.3 | P2 | Rename / delete a category that tasks use | Tasks are updated or moved to "Uncategorized"; nothing crashes | [ ] | |
| 4.4 | P2 | Refresh the page | Categories are still there (saved in `todo-categories`) | [ ] | |

## 5. Dashboard

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 5.1 | P2 | With 0 tasks | Empty state with a link/button to create the first task | [ ] | |
| 5.2 | P2+P3 | Create 8 tasks, complete 3 | Counter shows "3 of 8 done" (and progress bar if added) | [ ] | |
| 5.3 | P2 | Complete or delete a task, go back to Dashboard | Numbers update straight away | [ ] | |
| 5.4 | P2 | Stats by priority / category / due today / overdue | Counts match the Tasks list | [ ] | |
| 5.5 | P3 | Set "Your name" in Settings, open Dashboard | Greeting uses the name (if the dashboard shows one) | [ ] | |

## 6. Calendar

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 6.1 | P1/P2 | Open Calendar | Current month shown; today is marked | [ ] | |
| 6.2 | P1/P2 | Task with a due date | Shows on the right day | [ ] | |
| 6.3 | P1/P2 | Go to next/previous month | Month changes; tasks still in the right place | [ ] | |
| 6.4 | P1/P2 | Month with no tasks | Empty but readable, no errors | [ ] | |

## 7. Settings (P3)

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 7.1 | P3 | Type a name in "Your name", refresh | Name is still there | [ ] | |
| 7.2 | P3 | Change "Default priority for new tasks", refresh | Choice is kept | [ ] | |
| 7.3 | P3 | Turn Dark mode on in Settings | Whole app turns dark at once (sidebar, cards, inputs, text) | [ ] | |
| 7.4 | P3 | Use the "🌙 Dark mode / ☀️ Light mode" button in the sidebar | Same result; Settings switch matches the sidebar button | [ ] | |
| 7.5 | P3 | Turn dark mode on, refresh, close and reopen the tab | App opens in dark mode | [ ] | |
| 7.6 | P3 | Check every page in dark mode | All text is readable; no white boxes or invisible text | [ ] | |
| 7.7 | P3 | Clear all data → press **Cancel** | Nothing is deleted | [ ] | |
| 7.8 | P3 | Clear all data → press **OK** | Page reloads; tasks, categories and settings are gone; theme back to light | [ ] | |
| 7.9 | P3 | DevTools → Application → Local Storage after 7.8 | `todo-tasks`, `todo-categories`, `todo-settings` removed (settings key comes back with defaults) | [ ] | |
| 7.10 | P3 | Put broken JSON in `todo-settings` (e.g. `abc`), refresh | App still loads with default settings, no white screen | [ ] | |

## 8. Responsive design (P3)

Test at these widths in DevTools: **1280px** (laptop), **768px** (tablet), **390px** (phone).

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 8.1 | P3 | 1280px | Sidebar on the left, content on the right | [ ] | |
| 8.2 | P3 | 768px and below | Sidebar becomes a top bar with "To-Do List" and a ☰ button | [ ] | |
| 8.3 | P3 | Tap ☰ | Menu opens and the icon changes to ✕ | [ ] | |
| 8.4 | P3 | Tap a link in the open menu | Goes to the page and the menu closes | [ ] | |
| 8.5 | P3 | 390px, every page | No sideways scrolling; buttons and inputs are big enough to tap | [ ] | |
| 8.6 | P3 | Rotate phone (portrait ↔ landscape) | Layout adjusts, nothing cut off | [ ] | |
| 8.7 | P3 | Keyboard only: Tab through the sidebar and Settings | Focus is visible; switch and buttons work with Enter/Space | [ ] | |

## 9. Data and edge cases

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 9.1 | P1 | Open the app in two tabs, add a task in one, refresh the other | New task appears after refresh | [ ] | |
| 9.2 | P1 | Put broken JSON in `todo-tasks`, refresh | App still loads (empty list), no white screen | [ ] | |
| 9.3 | All | Open DevTools Console and click through every page | No red errors or React key warnings | [ ] | |
| 9.4 | All | Add 30+ tasks | Lists scroll, app stays fast | [ ] | |
| 9.5 | All | Special characters in text (`<b>hi</b>`, emoji, Khmer text) | Shown as plain text, not as HTML | [ ] | |

## 10. Deployment and submission (P3)

| # | Owner | Steps | Expected result | Pass | Notes |
|---|-------|-------|-----------------|------|-------|
| 10.1 | P3 | `npm run build` on the final code | Build finishes with no errors | [ ] | |
| 10.2 | P3 | `npm run lint` | No errors | [ ] | |
| 10.3 | P3 | Open the live link in a private/incognito window | Loads with an empty, working app | [ ] | |
| 10.4 | P3 | Live site shows the latest merged code | Newest features visible | [ ] | |
| 10.5 | P3 | README live link and setup steps | Link works; `npm install` + `npm run dev` works on a fresh clone | [ ] | |

---

## Results summary

| Section | Passed | Failed | Notes |
|---------|--------|--------|-------|
| 1. Navigation | / 7 | | |
| 2. Tasks | / 10 | | |
| 3. Filters | / 7 | | |
| 4. Categories | / 4 | | |
| 5. Dashboard | / 5 | | |
| 6. Calendar | / 4 | | |
| 7. Settings | / 10 | | |
| 8. Responsive | / 7 | | |
| 9. Edge cases | / 5 | | |
| 10. Deployment | / 5 | | |
