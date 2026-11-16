# ATHAR | أثر

**أثر — لكل مكان حكاية. (Every place has a story.)**

ATHAR is an interactive atlas of Jordan's landmarks. It opens directly on a full-screen map of the country, and every destination on it has its own page, like a chapter in a travel book. This repository holds the frontend prototype.

## Why it matters

Jordan holds an exceptional range of heritage in a small area: Nabataean Petra, Roman Jerash, Crusader and Ayyubid castles, Byzantine mosaics, desert landscapes, nature reserves and the Dead Sea. Many of its best places are known only to the people who live nearby.

When people know a place, they value it, visit it and protect it. ATHAR exists to make that knowledge easy to reach, beautiful to read and honest about what each place is. It puts well-known sites such as Petra next to lesser-known ones such as Little Petra and Feynan, so that attention is not limited to a few famous names.

## Who it is for

- **Jordanians and residents**, who can rediscover the heritage and nature of their own country and learn the stories behind places they may have passed many times.
- **Tourists and visitors**, who can plan a trip from the map, understand what a site is before they go, and find places beyond the usual route.
- **Students, teachers and researchers**, who need a clear starting point for each site.

## Languages

ATHAR is Arabic-first and fully supports English. The first screen asks the visitor to choose between العربية and English, and the language can be switched at any time from the side menu. The interface switches direction (right-to-left for Arabic, left-to-right for English), and every destination has content in both languages.

## Features

- Full-screen interactive atlas map of Jordan with zoom, pan and a button to return to the full view
- 24 destinations with markers by category: archaeological site, castle, nature reserve, natural landmark, religious and cultural landmark
- A dedicated page for each destination: introduction, background, things to explore, visitor information and nearby destinations
- About page, collapsible sidebar, optional demo login window and an on-screen help panel
- Responsive web app: it adapts to desktop, laptop, tablet and mobile screens, with a navigation drawer on small screens
- Login is optional. Every destination can be explored without an account.

## Run it

No build step or installation is needed. Open `index.html` in a browser with an internet connection, since the Leaflet map library and web fonts load from CDNs.

## Current limitations

This is a prototype, and some content is not final.

- Jordan's outline on the map is compiled from approximate border coordinates, not an official boundary file. Replace it with official GeoJSON data (for example Natural Earth) for survey-grade accuracy.
- The coordinates of some destinations are approximate and are marked as such on their pages.
- Destination images are placeholder illustrations and need to be replaced with real photography.
- Opening hours, entry fees and contact details are placeholders.
- The login is interface only. There is no authentication or backend.
- The requested Arabic font XB Shafigh is not loaded from the web, so a fallback font is shown unless it is installed on the device.
- English texts were written for this prototype and should be reviewed before public release.
