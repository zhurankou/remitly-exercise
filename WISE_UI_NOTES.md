# Wise UI Research Notes

Research conducted from Mobbin screenshots (70+ screens analyzed) and web sources.

## Color Tokens

### Primary Brand Colors (verified across multiple sources)
| Token | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#163300` | Primary text, dark surfaces, headings |
| Bright Green | `#9FE870` | Primary CTA buttons, active states, accents |

### Derived/Observed Colors (from screenshot analysis)
| Token | Hex (approx) | Usage |
|-------|-------------|-------|
| Background | `#FFFFFF` | Main app background (current version) |
| Surface/Card | `#F2F5F2` | Card backgrounds, input field bg |
| Border/Divider | `#E5E9E5` | Separators, input borders |
| Secondary text | `#5D7B6A` | Labels, helper text |
| Muted text | `#6B7B71` | Timestamps, meta info |
| Error/Cancel | `#C73A3A` | Cancel transfer button (red outlined) |
| Success green | `#2ED06E` | Older CTA variant, success states |
| Tracker header (legacy) | `#37517E` | Old navy tracker header — NOT using |
| Info blue | `#4A90D9` | Links in older version |
| Warning amber | `#E8A030` | Delay/warning accents |

### Design Era Note
Wise has TWO distinct UI eras visible in Mobbin:
- **Legacy (pre-2024):** Navy/blue headers on tracker, blue CTAs, darker UI
- **Current (2024-2025):** White backgrounds, #9FE870 green CTAs, #163300 text, much lighter and cleaner

**We are building in the CURRENT era.** The tracker used to have a dark navy header — the new one uses a light background with a more integrated look.

## Typography

| Typeface | Role | Fallback |
|----------|------|----------|
| **Wise Sans** | Display headlines, hero numbers | `system-ui, -apple-system, sans-serif` |
| **Inter** | Body text, UI labels, all general copy | Google Fonts / system |

### Type Scale (observed from screenshots)
| Element | Size (approx) | Weight | Notes |
|---------|---------------|--------|-------|
| Hero amount (send screen) | 48-56px | 700-800 | Very large, bold, right-aligned |
| Section heading | 28-32px | 700 | "Review details", "Confirm and send" |
| Body/label | 16px | 400-500 | Standard UI text |
| Helper/meta | 14px | 400 | Fee details, timestamps |
| Small/caption | 12px | 400-500 | Status labels, chips |

### Special Number Treatment
- Amounts use very large, bold display type
- Numbers appear to use tabular/monospaced figures
- Currency amounts always shown with exact decimal places

## Component Patterns

### Amount Entry Card
- White card with subtle border
- "You send exactly" / "Recipient gets" labels above
- Large bold number left-aligned in newer version
- Currency chip: flag emoji + currency code in dark pill, right-aligned
- Fee math below: `- 4.28 GBP` / `= 995.72 GBP` / `× 1.12215` format

### CTA Buttons
- **Primary:** Fully rounded pill, bg `#9FE870`, text `#163300`, bold
- **Secondary:** Outlined pill, border `#163300`, transparent bg
- **Destructive:** Outlined pill, border + text red
- Corner radius: fully rounded (~999px)
- Full-width on mobile

### Tracker Timeline
- Vertical line: thin gray, becomes green for completed segments
- Step nodes: small circles
  - Completed: filled green dot
  - Current: larger green dot with pulse/active state
  - Pending: small gray/empty dot
- Date labels on left column ("Today", "Wednesday, May 7")
- Step description on right: "You set up your transfer", "We received your SGD"
- Active step: bold green heading text with explanation paragraph below
- Tab bar above: "Updates" (active, underlined green) | "Details"

### Delayed/Held State (critical for our concept)
Observed in Mobbin: tracker shows inline message in green bold text:
> **"Your money's taking longer to pay out"**
> Sorry for the wait — we need a bit more time to process your transfer. We'll keep you posted.

This appears as a timeline step, NOT as a separate screen. The remaining steps (payout, receive) appear grayed out below. There's a "Cancel transfer" button at the bottom.

**Pain point we're solving:** This is vague, not actionable, gives no updated ETA, and doesn't suggest what the user can do. Our Promise Card concept addresses this directly.

### Confirm/Review Screen
- Clean list layout with sections: "Transfer details", "Recipient details", "Schedule details"
- Each section has a "Change" link in green
- Line items: label left, value right
- "Confirm and send" green pill CTA at bottom
- Reference field (optional) with text input
- Key line: "[Name] gets exactly [amount]"

### Home Screen
- Top: avatar/initials, "Earn SGD 100" green badge
- "Total balance" label + large bold amount
- Action pills row: `Send` `Add money` `Request` — outlined dark green pills
- Currency cards: horizontal scroll, flag + currency + account number + balance
- "Transactions" section with "See all" link

### Navigation
- Bottom tab bar: Home, Card, Recipients, Payments (icons + labels)
- Or: Home, Account, Send, Recipients, Invite (older version)
- The "Send" tab sometimes has a green circular icon (↑ arrow)

### Input Fields
- Bordered rectangle, 1px border, ~8px radius
- Focus state: green border
- Label above (not floating)

### Currency Chip
- Dark pill with flag emoji + currency code
- Dropdown chevron
- Appears inside amount input fields

## Key Wise UX Patterns to Reuse

1. **"Should arrive by [date]"** — always shown during send setup
2. **"Guaranteed exchange rate (X h)"** — rate lock indicator with green lock icon
3. **Fee breakdown with operators** — minus, equals, times symbols
4. **"[Name] gets exactly [amount]"** — recipient-focused framing
5. **Timeline tracker** — vertical dots, left dates, right descriptions
6. **Tab switching** — "Updates" vs "Details" on tracker
7. **"Low Cost transfer ∨"** — expandable fee type selector

## Sources
- Mobbin iOS screenshots: ~70 screens from Wise app (multiple versions 2018-2025)
- [Wise Design System](https://wise.design/) — official design system site
- [Wise Brand Colors — BrandColorCode](https://www.brandcolorcode.com/wise) — hex values
- [Wise Rebrand — DotYeti](https://dotyeti.com/blog/wise-rebrand-and-logo-explanation-behind-the-new-visuals) — rebrand details
- [Wise Multi-Brand Design — Ness Grixti](https://nessgrixti.com/portfolio/wise-multi-brand) — token architecture
- [Medium: Wise Design System](https://medium.com/design-bootcamp/new-design-system-at-wise-be1aef2112e2) — system overview
