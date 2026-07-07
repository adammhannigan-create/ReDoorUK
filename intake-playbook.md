# ReDoor — email intake playbook

This is the exact process the scheduled task follows every time it runs. It's
also here so you (Adam) can read, tweak, or run it by hand. The scheduled task
prompt is a self-contained copy of these steps.

## The folder
- Site files live in: `/Users/adamhannigan/Claude/Projects/ReDoor/`
- Door data: `doors.js` (the only file that changes when stock updates)
- Photos: `images/`

## Dad's side (the whole system, from his view)
Dad sends a normal email to the connected Gmail. Two kinds:

1. **A new door** — subject starts with `NEW DOOR`. He writes the details in
   plain English (however he likes) and attaches photos.
2. **A door has sold** — subject starts with `SOLD`, and he says which one
   (either the reference like `d-20260702-timber-oak`, or just describes it,
   e.g. "the oak timber one").

That's it. No forms, no logins.

## Claude's side (each run)

### 1. Find new emails
Search Gmail, skipping anything already handled (label `ReDoor/Done`, id `Label_2`):
- New doors: `subject:"new door" -label:ReDoor/Done`
- Sold notices: `subject:"sold" -label:ReDoor/Done`

(Optional: also add `from:DAD_EMAIL` once Dad's address is known, to be safe.)

### 2. For each NEW DOOR email
- `get_thread` with FULL_CONTENT to read the body and see attachment filenames.
- Read the details out of the plain-English body and map them to these fields:
  `title, type, price, priceNote, condition, age, size, sizeAdjustable,
  sizeNote, colourOptions[], description`.
  - Fill in sensibly. If a field isn't mentioned, leave it out rather than guess.
  - Write a short, warm 1–2 sentence `description` in ReDoor's voice (plain,
    human, no salesy filler). Rewrite Dad's notes cleanly; don't invent facts.
- Make an `id`: `d-YYYYMMDD-<short-slug>` from the send date + a couple of words.
- Set `status: "available"`, `dateAdded: "<email date, YYYY-MM-DD>"`.
- **Photos:** the Gmail tools expose attachment *names* but can't download the
  image bytes. So:
  - Set `photos` to the expected paths: `["images/<id>-1.jpg", ...]` (one per
    attached image), OR leave `photos: []` if none.
  - In the run summary, tell Adam exactly which files to drop into `images/`
    and what to name them. Until the files exist, the card shows the clean
    door placeholder — nothing breaks.
- Insert the new door at the **top** of the `doors` array in `doors.js`.

### 3. For each SOLD email
- Match the door: first by `id` if present in the body, otherwise by best match
  on title/description.
- Set that door's `status` to `"sold"`.
- If no confident match, don't change anything — flag it in the summary and ask.

### 4. Finish up
- Update `config.lastUpdated` to today's date (YYYY-MM-DD).
- Validate `doors.js` still parses (it's a JS file assigning `window.REDOOR_DATA`).
- Apply label `ReDoor/Done` (`Label_2`) to every thread handled, so it's not
  processed twice.
- **Publish** (see README for setup): if the repo has a git remote configured,
  run `git add -A && git commit -m "stock update" && git push` from the ReDoor
  folder so GitHub Pages rebuilds. If git isn't set up yet, skip and note it.
- Post a short summary: what was added, what was marked sold, and any photos
  Adam needs to save.

## Editing by hand
You can always open `doors.js` and edit any door directly, or change shop
contact details in the `config` block at the top. The site reads that file live.
