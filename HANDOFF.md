# ReDoor — where things stand

Live site: https://adammhannigan-create.github.io/ReDoorUK/
Repo: `adammhannigan-create/ReDoorUK`, published via GitHub Desktop (Pages from main/root).

## Publishing a change (every time, no exceptions)
This sandbox can't push to GitHub itself. After any edit to `index.html` or `doors.js`:
1. Open GitHub Desktop.
2. Tick the changed file(s) (usually both `index.html` and `doors.js`).
3. Commit to main.
4. Push origin.
5. Hard refresh the live site to see it (normal refresh can show a stale cached version).

## What's built
- Single static site: `index.html` (all markup/CSS/JS) + `doors.js` (all door listings, shop config, paint service, reviews, environment section). No backend.
- Email-to-website pipeline: scheduled task `redoor-stock-intake` runs 8am/1pm/6pm, reads Gmail for subject `NEW DOOR` / `SOLD`, rewrites `doors.js`, labels handled emails `ReDoor/Done`. Full process documented in `intake-playbook.md`.
- Photo limitation (permanent, not a bug): Gmail tools can see attachment names but not download the bytes. So the task writes expected filenames like `images/<door-id>-1.jpg` into `doors.js`, and tells you exactly what to save into the `images/` folder. Until the file exists, the card just shows a placeholder.
- Type filters (Sectional/Roller/Up and Over/Side Hinged/Motors), Available/Sold/All dropdown, CM/MM/INCH/FT unit switcher (styled like a bright yellow measuring tape with tick marks), photo carousel for multi-photo doors, trust section built from all 45 verified Google reviews (`REVIEWS-DATA.md`), paint-to-order section, environmental impact section (pale green background), Navy & warm white palette, italic "Re" wordmark.
- "Motors" is a listing type for serviced/spare motors and openers sold on their own — uses the same `doors` array and card layout as doors, just with `category: "Motors"`. Documented in `intake-playbook.md`.
- Grade badges: each door can have a `grade` (A+/A/B/C/D) that shows as a coloured circle in the corner of the card (A+ bright green → D orange). A "How we grade" section explains the scale. Data lives in `doors.grading` in `doors.js`.
- Delivery section: a distance-banded price guide from Chester (`doors.delivery` in `doors.js`) — edit prices/colours/areas there. This is a mock-up styled after the reference; Adam to adjust the bands. A proper county-shaded SVG map could replace the banded list later if wanted.
- `DAD-CHECKLIST.md` is a printable one-pager of exactly what to put in each email.
- Just added, not yet confirmed live: floating WhatsApp button + per-door WhatsApp/Email buttons (uses +44 7853 264404 — confirm this number is actually on WhatsApp), and SEO tags (Open Graph, Twitter Card, LocalBusiness + Product structured data for search/share previews).

## Known gaps / ideas not yet done
- Some early door photos are embedded as base64 directly in `doors.js` instead of real image files — bloats the file, works fine, but should be swapped to real files in `images/` eventually.
- Custom domain `redoor.co.uk`: you need to buy it yourself (a registrar purchase, not something Claude can do). Once bought:
  - Apex A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `www` CNAME → `adammhannigan-create.github.io`
  - Set the custom domain in GitHub repo Settings → Pages, then enable "Enforce HTTPS"
- No image sourced yet for the environmental section (optional).
- Could add local trust signals (map/area callout) and softer delivery/payment copy.

## If something looks broken
- "Site shows nothing" → almost always a stale-deploy issue: check both `index.html` and `doors.js` were actually ticked and pushed, then hard refresh.
- "New door/photo missing" → check the scheduled task's run summary for the exact filename it expects in `images/`.
- Never let Claude attempt `git` commands in this sandbox — it can't reach GitHub Desktop's repo reliably here. Always publish by hand.
