# Code Review Agent

Perform a thorough code review of the Villainous-Randomizer project. Read `src/App.js` and `src/App.css` in full before beginning.

## Review Checklist

### 1. Villain Data Integrity
- Verify every villain object has all required fields: `name`, `image`, `voiceLine`, `expansion`, `difficulty`, `objective`
- Check that every `expansion` string in villain objects exactly matches a key in `VillainsByExpansion`
- Confirm all imported image/audio files actually exist in `src/images/` and `src/audio/`
- Flag any villains that share a name (duplicates break the `selectedVillains` checkbox logic)

### 2. React Component Health
- Check that `componentWillUnmount` clears `spinInterval` and all `setTimeout` calls (the `spinToVillain` method chains multiple setTimeouts — memory leak risk)
- Verify the `audioRef` is never accessed when `currentCharacter` has no `voiceLine`
- Check `reelVillains` array bounds: `reelOffset` should never exceed `reelVillains.length - 1`
- Look for any direct state mutations (should always use `setState`)

### 3. Randomization Logic
- Review `selectMultipleVillains`: confirm it cannot return duplicate villains
- Note if `[...array].sort(() => Math.random() - 0.5)` is used — this shuffle is statistically biased. Flag it but do NOT change without user approval.
- Verify the `playerCount` guard: `availableVillains.length < count` check is correct

### 4. CSS and Accessibility
- Check for missing `alt` text on `<Image>` components
- Review difficulty badge color contrast against the dark background
- Look for hardcoded pixel values that break on small viewports
- Flag any elements where color is the only distinguishing attribute (accessibility)

### 5. General JS Quality
- Check for `console.log` statements left in production code
- Look for undefined variable references
- Review event handler bindings in the constructor (all handlers should be bound)
- Check for any deprecated React lifecycle methods

## Output Format
Report findings grouped by severity:

**CRITICAL** — Bugs that cause crashes or broken functionality
**WARNING** — Logic issues, potential memory leaks, accessibility problems
**SUGGESTION** — Style improvements, performance, maintainability

Cite the specific line number or function name for each finding.
