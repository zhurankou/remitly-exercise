# Design & Build Decisions

## The Promise Card Concept

**Decision:** A single `PromiseCard` component that appears on every screen — send setup, review, tracker, and both held states — always showing the same "Mom gets ₱17,142" amount with only the status badge morphing.

**Why:** The core insight is that today's Wise UI fragments the "what will my family get, and when?" answer across screens. The amount appears in different formats and locations. When a transfer is held, the user lands in an opaque state with vague copy. The Promise Card stitches all of this into one persistent, recognizable object. The recipient-gets number never changes — that constancy IS the trust mechanism.

**What changes across states:**
- Default (setup/review): green "⚡ Arrives Fri 6pm" badge
- Tracking: same badge + green progress bar filling
- Held (reassuring): blue "🔒 Safety check · ETA Fri 6pm" badge + blue progress bar
- Held (re-estimated): amber "🕐 New ETA Sat 10am" badge + amber progress bar

## Wise Components Reused

| Component | Source | Our adaptation |
|-----------|--------|----------------|
| Amount entry with currency chip | Mobbin: send flow screens | Kept the large bold number + flag/currency pill pattern |
| Fee breakdown with operators | Mobbin: "−/×/=" math layout | Replicated the minus/times operator format with "Low Cost transfer" link |
| Timeline tracker | Mobbin: transfer status screens | Reused vertical line + green dots pattern; added color variants for held states |
| "Confirm and send" review layout | Mobbin: confirm screens | Kept the section headers + "Change" links + line-item format |
| Pill CTA buttons | Mobbin: all screens | Full-width rounded green (#9FE870) buttons with #163300 text |
| Tab bar (Updates/Details) | Mobbin: tracker screens | Direct reuse of the underlined tab pattern |

## What We Changed and Why

1. **Delivery method selector on the send screen.** Wise's current flow separates amount entry from delivery method. We combine them so the Promise Card can be assembled in one view — the user sees the full promise (amount + method + ETA) before proceeding.

2. **"Your delivery promise" label.** This label above the Promise Card is new — Wise doesn't name this concept. We introduce the language to make the promise explicit and give it weight.

3. **Reassurance banner on held states.** Wise's current held state says "Your money's taking longer to pay out" with a generic apology. We replaced this with two distinct variants:
   - **Reassuring:** "Still on track for Fri 6pm" — normalizes the check, confirms the ETA hasn't moved.
   - **Re-estimated:** "New ETA: Sat, Jun 7 by 10:00 AM" — honest about the delay, explains why (bank flagged it), reaffirms the amount is unchanged, and provides concrete next steps.

4. **"What you can do" actions on the delayed screen.** Wise's current delay state offers no actionable path. We added "Upload a bank statement" (speeds up verification) and "Talk to our team" (path to human help) — specific, concrete, empowering.

5. **"Share status with Mom" affordance.** Optional but addresses a real need: the recipient is often anxious too, and the sender is the one fielding questions. Sharing the same Promise Card closes that loop.

## Persona & Corridor Choices

- **Lina → Mom (Maria Santos), USD → PHP via GCash:** Chosen because the Philippines is one of the world's largest remittance corridors, GCash is the dominant mobile wallet there, and "Mom" as recipient grounds the emotional stakes. The amounts ($300 → ₱17,142) and fees ($4.41) are realistic for Wise's USD-PHP corridor.

## Stack Choice

**Vite + React + Tailwind CSS.** Fastest path to a clean, component-based prototype. Tailwind's utility classes with custom theme tokens (`wise-forest`, `wise-green`, etc.) let us match Wise's design system without writing bespoke CSS. React's component model maps naturally to the Promise Card as a reusable object across states.

## Design System Approach

- **Colors:** Extracted Wise's primary brand colors (#163300 Forest Green, #9FE870 Bright Green) from multiple sources and verified against Mobbin screenshots. Extended with observed UI colors (surfaces, borders, muted text) sampled from the latest app version.
- **Typography:** Inter as the body font (Wise's actual product font). Wise Sans is proprietary and unavailable; we use system-ui as the display fallback, which reads cleanly.
- **Components:** Built to match the current (2024-2025) Wise app, not the older navy/blue version visible in some Mobbin screenshots.

## Skills & Tools Used

- **Mobbin MCP:** Searched and analyzed ~70 Wise iOS screenshots across send flow, tracker, review, held/delayed states, and home screens. This was critical for matching real component patterns rather than guessing.
- **Web research:** Verified brand colors from brandcolorcode.com, dotyeti.com rebrand article, and wise.design. Studied the token architecture from the Ness Grixti portfolio piece on Wise's multi-brand system.
- **Claude Preview:** Used to iterate on the prototype in-browser without leaving the development environment.
