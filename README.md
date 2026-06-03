# The Delivery Promise — Wise Send-Money Concept Prototype

A single **Promise Card** — "Mom gets ₱17,142 by Fri 6pm · GCash" — that is born at send time, appears unchanged on the review screen, becomes the live tracker, and morphs (never breaks) when a transfer is held or delayed.

## Run it

```bash
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173). Use the demo controls below the phone frame to step through all states.

## Screens

1. **Send Setup** — Choose delivery method, enter amount, see the Promise Card assemble
2. **Review & Confirm** — The identical Promise Card, unchanged, with transfer details
3. **Live Tracker** — The same card with progress filling, timeline steps updating
4. **Held (reassuring)** — Safety check in progress, ETA unchanged, calm explanation
5. **Held (re-estimated)** — New ETA with clear reason, actionable next steps, path to human help

## Case study article

```bash
cd article && python3 -m http.server 8080
```

Opens at [http://localhost:8080](http://localhost:8080). A Wise-styled blog post presenting the concept, with embedded research screenshots and the live prototype.

## Files

- `WISE_UI_NOTES.md` — Design system research: tokens, components, sources
- `DECISIONS.md` — Key design and build decisions with rationale
- `article/` — Case study blog post with research screenshots in `article/assets/`
