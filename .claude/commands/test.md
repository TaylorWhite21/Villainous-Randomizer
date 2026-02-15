# Testing Agent

Write or improve tests for the Villainous-Randomizer React app. Read `src/App.js` and existing test files before writing anything new.

## Required Mocks
Always include these mocks at the top of test files — JSDOM has no audio or alert support:

```js
// Mock audio — JSDOM does not implement HTMLMediaElement
window.HTMLMediaElement.prototype.load = jest.fn();
window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
window.HTMLMediaElement.prototype.pause = jest.fn();

// Mock window.alert (used for validation messages when no villains selected)
window.alert = jest.fn();
```

## Test Cases to Cover

### Rendering
- App renders without crashing
- The "Choose a Villain!" button is visible on load
- A villain name is displayed on load
- Available villain count text is rendered

### Villain Selection — Single Player
- Clicking "Choose a Villain!" disables the button and shows a loading/spinning state
- After the spin completes, a villain is displayed
- `audio.play()` is called after the spin completes

### Villain Selection — Multi Player
- Setting player count to 2 changes button text to "Choose 2 Villains!"
- After clicking with playerCount=2, exactly 2 villain cards appear
- No duplicate villains appear in multi-player results

### Filtering — Expansion Mode
- Unchecking "Base Game" reduces the available villain count
- "Select All" restores the full count
- If all expansions are unchecked and the button is clicked, `window.alert` is called

### Filtering — Villain Mode
- Switching to villain filter mode shows individual villain checkboxes
- Unchecking a villain reduces available count by 1
- "Select All" in villain mode restores the full count

### Game Settings
- Toggling "Game Settings" shows/hides the settings panel
- Speed buttons change active state when clicked
- Player count buttons reflect the selected state

### Skip Animation
- Skip button appears only while spinning
- Clicking Skip ends the spin immediately and shows a villain

## Testing Guidelines
- Use `userEvent.click()` for button interactions (not `fireEvent`)
- Use `findBy*` queries for async state changes (villain appears after animation)
- Do NOT test internal state (`this.state.isSpinning`) — test the DOM
- Each test must be independent — no shared mutable state
- Wrap async operations in `waitFor()` or use `findBy*` queries

## After Writing Tests
Run:
```bash
npm test -- --watchAll=false
```
Report: number of tests passing, any failures with their full error messages.
