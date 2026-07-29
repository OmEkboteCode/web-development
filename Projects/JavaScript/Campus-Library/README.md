# Campus Library

A small, responsive campus-library dashboard built with HTML, CSS, and vanilla JavaScript. It is the starting codebase for Engineering Studio 1: a project intended to be read, improved, debugged, and extended over future sprints.

## Current features

- Displays a catalogue of books from in-memory data.
- Searches by title, author, or category while the user types.
- Borrows and returns books.
- Keeps summary statistics for total, available, and borrowed books up to date.
- Shows a friendly empty state when search has no matches.
- Works on desktop and mobile layouts.

## Run locally

Open `index.html` in a browser. No installation, server, framework, or build step is required.

## Project structure

```text
Campus-Library/
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    └── .gitkeep
```

## How the app is organised

`index.html` provides the page structure: header, statistics, search area, and a container for book cards.

`css/style.css` owns presentation: colours, spacing, cards, badges, buttons, and responsive behaviour.

`js/app.js` owns application behaviour. The `libraryBooks` array is the current source of truth. Rendering functions turn that data into book cards; event handlers update data and request a new render.

## Current limitations

- Books reset when the page refreshes because data is only kept in memory.
- There is one shared catalogue; no individual student accounts or borrowing history exists yet.
- Search has no sorting or filters beyond text matching.
- A user can borrow a book without authentication.

## Suggested future sprints

1. Add category filters and sorting.
2. Add a “recently borrowed” history panel.
3. Save catalogue state with local storage.
4. Add a form to add books safely.
5. Extract rendering and state logic into modules when the application grows.
6. Replace local data with a backend API.

## Engineering note

This is intentionally small enough to understand in one sitting, but structured so new features can be added without rewriting the page. Before changing a feature, identify whether the change belongs in data/state, rendering, an event handler, or CSS.
