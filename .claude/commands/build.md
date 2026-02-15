# Build Agent

Verify the production build of Villainous-Randomizer is healthy.

## Build Steps

### 1. Run the Build
```bash
npm run build
```
Expected: exits with code 0 and creates the `./build/` directory. If it fails, report the full error output and stop.

### 2. Check Build Artifacts
After a successful build, verify these exist:
- `build/index.html`
- `build/static/js/main.*.js` (one or more chunked JS files)
- `build/static/media/` containing villain images and audio files (expect ~50+ files: ~31 PNGs + ~28 MP3s)

### 3. Check Bundle Size
CRA prints bundle size warnings when chunks exceed 244 KB (gzipped). Report the main bundle size. Flag if:
- Main JS chunk exceeds 1 MB (uncompressed) — villain images/audio may be better served from a CDN
- Any individual chunk is unexpectedly large

### 4. Check Build Warnings
Review the build output for:
- Unused import warnings — flag for cleanup
- ESLint warnings (CRA makes these visible)
- "The following assets exceeded the recommended size limit" — report specific files (likely `fire.jpg` or large villain images)
- Source map warnings are acceptable, no action needed

### 5. Deployment Readiness Check
Confirm `package.json` has the `"homepage"` field if deploying to GitHub Pages under a subpath. If it is missing, note:
- Deploying to root of a domain: `homepage` not required
- Deploying to `https://user.github.io/Villainous-Randomizer`: requires `"homepage": "https://user.github.io/Villainous-Randomizer"` in `package.json`

## Output
Report:
1. Build success or failure
2. Total bundle sizes (main JS chunk, CSS chunk)
3. Count of files in `build/static/media/`
4. Any warnings that require attention
5. Deployment readiness status (homepage field present/absent)
