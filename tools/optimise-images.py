#!/usr/bin/env python3
"""
Shrink the door photos in images/ so a phone isn't downloading camera files.

What it does
------------
For every .jpg in images/ (not images/originals/):
  1. Copies the file to images/originals/ the first time it sees it, so the
     full-size version is never lost.
  2. Re-encodes FROM that original at 1000px wide, quality 80, progressive.

Because it always works from the copy in originals/, running it twice does not
compress an already-compressed file. Run it after saving new photos:

    python3 tools/optimise-images.py

Needs Pillow:  pip3 install Pillow
"""

import io
import os
import shutil
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is not installed. Run: pip3 install Pillow")

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(HERE, "images")
ORIG = os.path.join(SRC, "originals")

MAX_WIDTH = 1000   # cards top out at 471px, so this covers a retina screen
QUALITY = 80


def main():
    os.makedirs(ORIG, exist_ok=True)
    names = sorted(n for n in os.listdir(SRC) if n.lower().endswith((".jpg", ".jpeg")))
    if not names:
        print("No .jpg files in images/")
        return

    total_before = total_after = 0
    for name in names:
        path = os.path.join(SRC, name)
        keep = os.path.join(ORIG, name)
        if not os.path.exists(keep):
            shutil.copy2(path, keep)

        before = os.path.getsize(path)
        im = ImageOps.exif_transpose(Image.open(keep)).convert("RGB")
        w, h = im.size
        if w > MAX_WIDTH:
            im = im.resize((MAX_WIDTH, round(h * MAX_WIDTH / w)), Image.LANCZOS)

        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=QUALITY, optimize=True,
                progressive=True, subsampling=2)
        data = buf.getvalue()

        if data != open(path, "rb").read():
            open(path, "wb").write(data)

        total_before += before
        total_after += len(data)
        saved = 100 - len(data) * 100 / before if before else 0
        print(f"{name[:44]:46} {before/1024:7.0f}KB -> {len(data)/1024:6.0f}KB  ({saved:.0f}% off)")

    print(f"{'TOTAL':46} {total_before/1024:7.0f}KB -> {total_after/1024:6.0f}KB")
    print(f"\nFull-size versions are in images/originals/ (not published).")


if __name__ == "__main__":
    main()
