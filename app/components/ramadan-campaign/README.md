# Ramadan Night Drops campaign

Route: /Ramdan-nights-drops-gaming-campaign

Reference: https://www.figma.com/design/258r5OJl3bXKZi9Aooqm5H/SpawnPoint?node-id=2587-201

The campaign uses its own root layout and CSS module. Shared navigation, footer,
global styles, and existing routes are not changed. Static sections render on
the server; the hero, horizontal cards, offer tabs, and pilot selector own their
client interactions.

## Animation

- Hero decorations use four separate PNG exports, with independent float and
  rotation tweens. No sprite cropping or combined-symbol image is used.
- The hero pins when its bottom reaches the viewport bottom. A scrubbed GSAP
  timeline expands the film to the viewport, then releases the section.
- The channels track measures scrollWidth minus the visible container width.
  The final card occupies that container, including after resize.
- Below 768px, on short screens, or with reduced motion, pinning is disabled.
  Cards remain reachable using native horizontal scrolling and arrow keys.
- Tabs activate on hover, focus, click, and touch, with arrow/Home/End navigation.
- MatchMedia contexts clean up animations and ScrollTriggers on unmount.

## Assets and remaining fidelity limits

Assets are in public/images/ramadan-campaign. Existing originals are preserved.
New exports are glass-square.png (2587:245), glass-triangle.png (2587:249),
glass-circle.png (2587:248), glass-cross.png (2587:244), hero-cutout.png
(2587:238), hero-hand-left.png (2587:242), hero-hand-right.png (2587:243),
and film-reference.png (2587:239). Montserrat regular, medium, and semibold
are hosted locally and scoped to CampaignBody.

The existing film-loop.webm is used automatically. loop-offer and loop-souq
MP4/WebM files are not available locally; these tab panels use their existing
Figma poster images. The route discovers those videos when present at build
time. Figma exposes embedded video hashes but does not return video bytes
through the inspected Plugin API.

Figma specifies RBNo3.1 Black Italic and Bold Italic. The available local
RBNo3.1 ExtraBold font is used with browser italic synthesis; supplying the
licensed exact italic font files is required for an exact typography match.
The Figma frame is desktop-only, so mobile layouts adapt its composition.

## Validation

Run npm --ignore-scripts run build to build without regenerating the existing
sitemap. Targeted ESLint and TypeScript checks cover the campaign.

Browser verification covers 1920, 1440, 1024, 768, 390, and 360px widths,
reduced-motion behavior, video expansion and release, final-card visibility,
hover and keyboard tabs, mobile card access, loaded images, and console errors.
