# Simple Site SCSS

## Project Structure

```
src/
└── scss/
    ├── abstracts/       # Common tools and helpers
    │   ├── _index.scss
    │   ├── _variables.scss
    │   ├── _mixins.scss
    │   ├── _mixins-media.scss
    │   └── _extends.scss
    │
    ├── base/            # Base styles
    │   ├── _index.scss
    │   ├── _normalize.scss
    │   ├── _typography.scss
    │   └── _common.scss
    │
    ├── components/      # Components
    │   ├── _index.scss
    │   ├── _navbar.scss
    │   ├── _content.scss
    │   └── _experience-item.scss
    │
    ├── layout/         # Layout and sections
    │   ├── _index.scss
    │   ├── _header.scss
    │   ├── _footer.scss
    │   ├── _section.scss
    │   ├── _experience.scss
    │   ├── _video.scss
    │   ├── _about.scss
    │   └── _works.scss
    │
    └── style.scss      # Main file
```

## Technologies Used

- SCSS
- BEM methodology
- Responsive design
- Mobile First approach

## Features

- Using mixins for reusable styles
- Responsive layout with media queries
- Modular structure (7-1 pattern)
