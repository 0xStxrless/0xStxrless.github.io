# stxrless writeups

clean, simple system for security writeups. unified design, easy to add new content.

## structure

```
.
├── index.html              # homepage with writeup listing
├── css/
│   └── writeup.css        # unified style system (shared)
├── js/
│   └── stars.js           # star field animation (shared)
└── writeups/
    ├── TEMPLATE.html      # template for new writeups
    ├── README.md          # writeup documentation
    └── *.html             # individual writeups
```

## adding a new writeup

**3 simple steps:**

1. **copy the template**
   ```bash
   cp writeups/TEMPLATE.html writeups/your-writeup.html
   ```

2. **edit your writeup**
   - update title, tags, date
   - add your content
   - use the components in `writeups/README.md`

3. **add to homepage**
   - open `index.html`
   - copy an existing entry block
   - update href, title, tags, date

that's it. no build system, no dependencies.

## design philosophy

- **unified** - all writeups use the same stylesheet
- **simple** - just HTML, CSS, JS - no frameworks
- **pretty** - clean typography, subtle animations
- **fast** - minimal, optimized, static files

## components

see `writeups/README.md` for all available components:
- headings
- code blocks
- callouts
- lists
- tables
- flags

## github pages

works out of the box with github pages. just push to your repo and it's live.

## maintenance

want to update the design?
- edit `css/writeup.css` (all writeups update automatically)
- edit `js/stars.js` (animation changes everywhere)

no need to touch individual writeup files.
