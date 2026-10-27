# Shubham Boutique Homestay: static site

## Run / deploy
- Open `index.html` directly, or preview with `python3 -m http.server 8000`.
- Deploy: drag the folder to Netlify, or use Cloudflare Pages / GitHub Pages (no build step).

## Configure (top of script.js)
- `CONFIG.contact`: add `whatsapp` (digits with country code), `phone`, `email`. Buttons appear automatically.
- `CONFIG.bookingLinks`: add exact Booking.com / MakeMyTrip / Agoda property URLs. Empty values stay hidden.
- `CONFIG.mapQuery`: the Google Maps search used for the embedded map and directions. Replace with the exact address once confirmed.
- Rooms, places, gallery, FAQ and review figures are arrays in the same file.

## Owner checklist before launch
1. WhatsApp, phone, email, and the full street address (then update the map query and JSON-LD).
2. URL for the second-floor "Shubham" room, plus any Booking.com / MakeMyTrip / Agoda listings.
3. Room-specific photos: tell us which photo belongs to which room so cards can show them.
4. Licences/credits for the nearby-place photos (several look like web or stock images, and one surf photo is not clearly from Serenity Beach).
5. Capacity per room (only Bhumi states a 4-guest maximum), check-in/out times, pool hours, breakfast inclusions.
6. Confirm Airbnb ratings and review counts (as of 28 Oct 2026) or update them.
7. Confirm map pin position on the embedded Google Map.
8. Add absolute og:image URL and favicon on your domain.
