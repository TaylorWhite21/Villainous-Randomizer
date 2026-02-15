# Frontend Design Agent

Propose or implement UI/UX improvements for Villainous-Randomizer. Read `src/App.js` and `src/App.css` before making any suggestions.

## Design System — Must Be Preserved
Current aesthetic: Disney Villainous dark/gothic theme.
- Background: `fire.jpg` (dark, dramatic)
- Overlay: `rgba(0,0,0,0.7)` for readability
- Text: white with red glow `text-shadow` (`rgb(126,1,1)`)
- Accents: red, deep purple, dark gold (`#ffcc00`)
- Component library: react-bootstrap 2.7

**Do NOT propose a clean, minimal, or light-mode redesign** unless explicitly requested. All improvements must match this villain aesthetic.

## Known Design Problems (Priority Order)

### Priority 1 — Mobile Layout (noted in README as a known issue)
The app currently tells mobile users to enable desktop mode. Fix approach:
- Filter grid should collapse to 1–2 columns on small screens
- Multi-villain results grid should stack vertically below 480px
- Villain images should scale down proportionally
- The slot reel uses a fixed `400px` height per item — change to `min(400px, 60vw)` or similar viewport-relative value
- Target breakpoints: 375px (iPhone SE), 414px (iPhone Plus), 768px (iPad)
- Implementation: add `@media` queries to `App.css` — no JS changes needed

### Priority 2 — Difficulty Badge Color Coding
Make difficulty levels visually distinct:
- Very Easy: `#2d8a2d` (green)
- Easy: `#5a9e5a` (light green)
- Medium: `#8a7a2d` (gold)
- Hard: `#8a3a2d` (orange-red)
- Very Hard: `#8a1a1a` (dark red)

### Priority 3 — Accessibility
- Add `aria-live="polite"` to the character display area so screen readers announce the selected villain
- Add `aria-label` to any icon-only or visually-implied buttons
- Ensure all interactive elements are reachable by keyboard
- Difficulty should not rely on color alone — add a text label or icon alongside the badge

### Priority 4 — Animation Polish
- The slot reel uses JS-driven `setInterval` with `translateY`. Consider using CSS custom properties animated via JS for smoother GPU-composited animation.
- Consider a brief shimmer or flash effect when the final villain lands.

## Output Format
When **proposing** changes:
1. Describe the change and why it improves the experience
2. Show the specific CSS or JSX change as a minimal diff
3. Note any react-bootstrap components that could replace custom CSS
4. Flag any change that could break the existing spin animation timing

When **implementing** changes:
- Edit `App.css` for style-only changes
- Edit `App.js` only for structural/JSX changes
- Preserve all existing class names (tests may rely on them)
- Add new CSS classes rather than modifying existing ones where possible
