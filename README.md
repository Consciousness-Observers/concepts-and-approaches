# 心理学概念与途径 · Concepts and Approaches in Psychology

An open book of the reading-group records — one concept per session, back to the
original papers that built it.

Live at https://consciousness-observers.github.io/concepts-and-approaches/

## How it is built

Plain Jekyll, no plugins: GitHub Pages builds it from `main` on push.

| path | |
|---|---|
| `index.md` | 序 (the preface) |
| `chapters/` | one page per session |
| `_data/toc.yml` | the table of contents — add a chapter here to put it in the book |
| `_layouts/book.html` | the book layout (sidebar, prev/next) |

Adding a session: create `chapters/<slug>.md` with front matter
(`layout: book`, `title:`, `permalink: /chapters/<slug>/`) and add it to `_data/toc.yml`.
