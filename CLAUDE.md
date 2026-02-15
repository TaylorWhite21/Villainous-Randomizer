# Villainous-Randomizer — Claude Code Project Memory

## Project Overview
A React web app that randomly selects Disney Villainous board game villains for players. Supports 1–6 players, slot-reel spin animation, audio voice lines, expansion filtering, and per-villain difficulty/objective display.

**Live purpose:** Used at the table before a game session to assign villains randomly. Fun and fast matters more than perfect architecture.

## Tech Stack
- React 18 (class component pattern — do NOT convert to hooks without asking)
- react-bootstrap 2.7 for UI components (Button, Image)
- create-react-app / react-scripts 5 (no eject, no custom webpack config)
- No TypeScript — plain JS only
- No router — single page, single component

## Project Structure
```
src/
  App.js          - Main component: VillanousCharacterSelector (class component, ~669 lines)
  App.css         - All styles — dark villain theme, responsive grid, reel animation
  images/         - PNG villain portraits (one per villain, ~31 files)
  audio/          - MP3 voice lines (one per villain, ~28 files)
  index.js        - React root, imports Bootstrap CSS
public/
  index.html      - CRA template HTML
.github/
  workflows/
    ci.yml        - CI: test + build on every PR and push to main
    deploy.yml    - Deploy to GitHub Pages (manual or on push to main)
.claude/
  commands/
    review.md     - /review skill: structured code review
    test.md       - /test skill: write and run tests
    build.md      - /build skill: verify production build
    design.md     - /design skill: UI/UX improvements
```

## Key Domain Objects

### Villain Data Shape
```js
{
  name: string,           // Unique display name
  image: importedPNG,     // Webpack-resolved image import
  voiceLine: importedMP3, // Webpack-resolved audio import
  expansion: string,      // Must match a key in VillainsByExpansion
  difficulty: string,     // 'Very Easy' | 'Easy' | 'Medium' | 'Hard' | 'Very Hard'
  objective: string       // Win condition text
}
```

### Expansions (complete list)
Base Game, Wicked to the Core, Evil Comes Prepared, Perfectly Wretched,
Despicable Plots, Bigger and Badder, Filled with Fright, Sugar and Spite,
Treacherous Tides, Introduction to Evil, Unstoppable

## Commands

### Development
```bash
npm start                          # Dev server on http://localhost:3000
npm test                           # Jest + React Testing Library (watch mode)
npm test -- --watchAll=false       # Single run (use this in CI and for verification)
npm run build                      # Production build to ./build/
```

### Never run
```bash
npm run eject    # One-way operation — irreversible, do not run
```

## Coding Conventions

### Component Style
- The main component is `VillanousCharacterSelector` — a class component. Keep it as a class component unless the user explicitly requests a rewrite.
- State is managed entirely in this one component. No Redux, no Context API.
- All villain data lives in the module-level `VillainsByExpansion` object in App.js.

### Adding a New Villain
1. Add PNG to `src/images/` (match existing naming style)
2. Add MP3 to `src/audio/` (match existing naming style)
3. Add import lines near the top of `App.js` following the existing pattern exactly
4. Add villain object to the correct expansion array in `VillainsByExpansion`
5. If it is a new expansion, add a new key to `VillainsByExpansion`

### CSS Conventions
- Dark villain aesthetic: black/dark background, red glow `text-shadow`
- Body background: `fire.jpg` with `rgba(0,0,0,0.7)` overlay
- Layout: flexbox and CSS grid
- Class names: kebab-case (e.g., `villain-info`, `difficulty-badge`)
- Difficulty badge colors: `difficulty-easy`, `difficulty-hard`, etc.

### Spelling Note
The component and some variables are spelled "Villanous" (missing an 'i'). This is intentional legacy naming — do NOT rename without user approval, as it would require updating all imports and references throughout.

## Known Issues / Backlog (from README)
- Mobile layout needs improvement (currently tells users to enable desktop mode on mobile)
- Audio clips could be higher quality
- Slot reel visual effect could use polish
- Visual effects on villain selection could be enhanced

## Asset Notes
- Images and audio are sourced from YouTube and the Disney Villainous wiki
- Covered by fair use / educational disclaimer in README
- Do not commit large binary files without checking file size first

## Testing Approach
- Currently minimal tests (CRA default App.test.js)
- Framework: `@testing-library/react` + `@testing-library/user-event`
- Test behavior, not implementation (don't assert on `this.state` directly)
- **Critical mock required:** `HTMLMediaElement.prototype.play` — JSDOM has no audio support

## GitHub Pages Deployment
- Build output: `./build/`
- Before deploying to a GitHub Pages subpath, add to `package.json`:
  ```json
  "homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/Villainous-Randomizer"
  ```
- Without this, asset paths will 404 under the subpath
- The deploy workflow (`deploy.yml`) handles the actual deployment automatically

## Available Claude Code Skills
| Command   | Purpose                                      |
|-----------|----------------------------------------------|
| `/review` | Structured code review with villain-specific checks |
| `/test`   | Write and run tests (includes required audio mocks) |
| `/build`  | Verify production build health and bundle sizes |
| `/design` | Propose/implement UI improvements within the villain aesthetic |
