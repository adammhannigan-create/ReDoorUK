# ReDoor

A live, self-updating brochure for restored garage doors. Dad emails his stock;
the site updates. No logins, no forms, no monthly software bill.

```
index.html          The website
doors.js            The door stock (this is what updates)
images/             Dad's door photos
intake-playbook.md  Exactly how the email → website update works
README.md           This file
```

## How it works
1. Dad emails the connected Gmail (subject `NEW DOOR` or `SOLD`, details in the body, photos attached).
2. A scheduled Cowork task reads those emails, writes a neat listing into `doors.js`, and marks sold doors as sold.
3. The change is pushed to GitHub and the live site updates.

Full detail is in `intake-playbook.md`.

## Preview it locally
Because the data loads from `doors.js`, just open `index.html` in a browser —
double-click it. It works straight off the disk, no server needed.

## Put it online (free) with GitHub Pages
One-time setup, ~10 minutes:

1. Create a free account at github.com if you don't have one.
2. Make a new **public** repository called `redoor`.
3. Upload the contents of this folder (`index.html`, `doors.js`, `images/`) to it
   — you can drag-and-drop on the repo page, or use git:
   ```
   cd "/Users/adamhannigan/Claude/Projects/ReDoor"
   git init
   git add -A
   git commit -m "ReDoor site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/redoor.git
   git push -u origin main
   ```
4. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: `main` / root → Save.**
5. After a minute your site is live at `https://<your-username>.github.io/redoor/`.

Want a custom domain later (e.g. `redoor.co.uk`)? GitHub Pages → Custom domain
supports it. Ask and I'll walk you through it.

### Auto-publishing on updates
Once git is set up (step 3 above, with the remote), the scheduled task can push
changes for you automatically. If you'd rather review first, tell me and I'll
have it stop before pushing so you approve each update.

## Edit anything by hand
- Change shop name, tagline, contact email/phone, or area: edit the `config`
  block at the top of `doors.js`.
- Fix or remove a door: edit or delete its entry in the `doors` array.
- The header/footer contact and the "Ask about this door" buttons all use the
  `contactEmail` from `config`, so set that to whatever inbox Dad wants enquiries in.
