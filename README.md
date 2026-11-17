# ATHAR | أثر

**أثر — لكل مكان حكاية. (Every place has a story.)**

ATHAR is an interactive atlas of Jordan's landmarks. It opens directly on a full-screen map of the country, and every destination has its own page, like a chapter in a travel book. This repository holds the frontend prototype, built with plain HTML, CSS and JavaScript.

## Why it matters

Jordan holds an exceptional range of heritage in a small area: Nabataean Petra, Roman Jerash, Crusader and Ayyubid castles, Byzantine mosaics, desert landscapes, nature reserves and the Dead Sea. Many of its best places are known only to the people who live nearby.

When people know a place, they value it, visit it and protect it. ATHAR makes that knowledge easy to reach, beautiful to read and honest about what each place is. It places well-known sites such as Petra next to lesser-known ones such as Little Petra and Feynan, so attention is not limited to a few famous names.

## Who it is for

- **Jordanians and residents**, who can rediscover the heritage and nature of their own country.
- **Tourists and visitors**, who can plan a trip from the map and find places beyond the usual route.
- **Students, teachers and researchers**, who need a clear starting point for each site.

## Languages

ATHAR is Arabic-first and fully supports English. The first screen asks the visitor to choose between العربية and English, and the language can be switched at any time from the side menu. The layout switches direction (right-to-left for Arabic, left-to-right for English), and every destination has content in both languages.

## Features

- Full-screen interactive atlas map of Jordan with zoom, pan and a button to return to the full view
- 24 destinations with markers by category: archaeological site, castle, nature reserve, natural landmark, religious and cultural landmark
- Search with instant suggestions, and category filters on the map
- Side panel: click a marker to see the place's photo, location, best season, visit time, a short background and the main things to see, with a link to its full page and a Directions link to Google Maps
- Three animated tour routes: Northern Trail, Golden Triangle and King's Highway
- Satellite view toggle and a "My location" button that shows an approximate driving distance to the selected place
- A full page for each destination, an About page, a collapsible sidebar, an optional demo login window and an on-screen help panel
- Responsive: it adapts to desktop, laptop, tablet and mobile screens, with a navigation drawer on small screens
- Login is optional. Every destination can be explored without an account.

## Project structure

```
index.html       page shell
style.css        all styles
script.js        data, translations, map and page logic
athar-logo.jpg   official ATHAR logo
photos/          destination photos (see photos/README.md)
```

## Run it

There is no build step or installation. Open `index.html` in a browser with an internet connection, because the Leaflet map library and the web fonts load from CDNs.

To publish it, enable GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

## Adding photos

Put one JPG per destination in the `photos/` folder, named after the destination id, for example `photos/petra.jpg`. The full list of names is in `photos/README.md`. When a photo is missing, the site shows a placeholder illustration instead. Use only photos you own or have the right to use, and credit the photographer where the license requires it.

## Built with

HTML, CSS and JavaScript, with [Leaflet](https://leafletjs.com) for the map. Satellite imagery is provided by Esri (World Imagery) and needs its attribution, "Imagery © Esri", when the site is public.

## Current limitations

This is a prototype, and some content is not final.

- Jordan's outline on the map is compiled from approximate border coordinates, not an official boundary file. Replace it with official GeoJSON data (for example Natural Earth) for survey-grade accuracy.
- The coordinates of some destinations are approximate and are marked as such on their pages.
- Destination images are placeholder illustrations until photos are added.
- Opening hours, entry fees and contact details are placeholders.
- The driving time and distance are rough estimates, not routing results.
- The login is interface only. There is no authentication or backend.
- The requested Arabic font XB Shafigh is not loaded from the web, so a fallback font is shown unless it is installed on the device.
- The English texts were written for this prototype and should be reviewed before a public release.
