# Photo held back: permission needed

This photo is from the hospital's Google Maps listing, but a **Google user (a visitor) posted it, not the hospital**.
The copyright belongs to that person, so it is **not used on the website**. The photo pipeline (`npm run photos`) ignores this folder.

| File | Shows | Posted on Google by | Date | Size |
|---|---|---|---|---|
| `reception-opd-1-2.jpg` | Reception desk with the OPD 1 and OPD 2 consultation-room doors | Google user "kiran jadhav" (profile id 101852244877846882330) | Oct 2025 | 3264×2448 |

The same user's casualty-room photo was moved to `photos/casualty-emergency-room.jpg` and is used on the site on the owner's instruction (Nov 2026).

## To use it
1. **Best: the hospital takes its own photo** of the reception and OPD (landscape, lights on, no patients or faces), puts it in `photos/`, adds a caption in `photos/captions.json`, then runs `npm run photos` and `npm run build`.
2. Or get the poster's permission, then move this file up into `photos/` and do the same.
