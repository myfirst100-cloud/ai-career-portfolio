# AI Career Portfolio

## Project Metadata

**Project Started:** 2026-08-10 (**first Git commit date**)

**Project Path:** `C:\Developer\ai-career-portfolio`

**Platform:** `VS Code`

**README Last Updated:** 2026-09-03 19:02

## Purpose

This repository contains David Stoyka's standalone AI solutions portfolio and CarCollectorsClub.com case study. The site presents business problems, implemented systems, automation workflows, supporting screenshots, architecture diagrams, and stated business impact related to collector-car event research and publishing operations.

The portfolio describes work involving the CCC Publisher Dashboard, AI-assisted content workflows, auction discovery scrapers, connected data and publishing systems, and the technologies used across those projects. This repository is the presentation site only; it does not contain or operate the dashboard, scrapers, n8n workflows, Google Sheets integration, WordPress integration, or other systems described by the case study.

## Current architecture

The site is a static frontend built with:

- HTML5 in `index.html`
- Conventional CSS in `styles.css`
- A small amount of vanilla JavaScript in `lightbox.js`
- Local screenshots and diagrams in `images/`

There is no package manager configuration, framework, build system, backend, database, environment configuration, external API call, or automated deployment configuration in this repository. `index.html` is the primary entry file, and all page content is authored directly in it.

### HTML, CSS, and JavaScript structure

- `index.html` uses semantic header, navigation, main, section, figure, dialog, and footer elements. Primary navigation is a set of same-page anchors for Selected Work, Impact, and Approach.
- `styles.css` defines the design tokens and all layouts, cards, diagrams, tooltips, dialog presentation, and responsive rules. Breakpoints at 900px and 620px restructure the page for narrower screens.
- `lightbox.js` is an isolated vanilla-JavaScript enhancement for the Add Event screenshot. The rest of the page is static.

## Major files and folders

- `index.html` — complete portfolio page structure and written case-study content.
- `styles.css` — responsive layout, typography, colors, cards, diagrams, tooltips, lightbox presentation, and reduced-motion behavior.
- `lightbox.js` — opens and closes the enlarged Add Event image dialog and restores focus to its trigger.
- `images/` — local screenshots, workflow diagrams, system diagrams, and business-impact graphics. Eleven current files are referenced by the page; additional retained images are presently unused.
- `TEMP/starting promtp-01.md` — original project brief and image notes retained as working reference material.
- `AGENTS.md` — standing project instructions, including README review and timestamp requirements.

## Current page content

The single-page portfolio currently includes:

- Hero introduction and business problem/solution overview
- CCC Publisher Dashboard case study
- Dashboard workflow controls, event creation, and status statistics
- Car show content-update architecture
- n8n workflow overview and an embedded demonstration of the dashboard/workflow integration
- Automated collector-car auction discovery and scraper architecture
- Google Sheets-centered data and synchronization discussion
- Business-impact summary
- Concise CarPics AI business case with product imagery, technology proof, and links to the deployed application and product story
- Concise interactive automotive-map business case with dataset summary, technology proof, and a live prototype link
- Professional approach section
- Technologies and platforms used across the presented projects

Primary navigation links jump to Selected Work, Impact, and Professional Approach. The Tools section exists but is not included in the primary navigation. The layout adapts for desktop, tablet, and mobile widths.

## Interactive behavior

The Add Event screenshot opens in a native HTML `dialog`. Opening moves focus to the close button and prevents body scrolling. It closes from its close button, backdrop click, or native dialog behavior (including Escape where supported); closing restores focus to the trigger.

Technology items are buttons associated with `role="tooltip"` descriptions through `aria-describedby`. CSS reveals descriptions on hover or keyboard focus; no tooltip JavaScript is used.

Implemented accessibility-related behavior includes a skip link, semantic landmarks, descriptive image alternative text, labeled navigation, focus-visible styles, dialog labeling/focus restoration, tooltip relationships, and reduced-motion handling that disables smooth scrolling. These features have not been verified by an automated accessibility suite.

No portfolio content is loaded from an API or external data source. The CarPics and interactive-map product images and embedded YouTube demonstration are loaded from remote services.

## Setup and preview

No dependency installation or build step is required. A modern web browser is sufficient.

To preview the portfolio directly, open `index.html` in a browser. From PowerShell in the project directory:

```powershell
Start-Process .\index.html
```

It can also be served with a local static-file server or a VS Code preview extension if one is already available. This repository does not prescribe or include a particular server.

## Commands and tests

The project defines no package scripts or automated tests. There is currently no documented build, lint, or test command.

Changes should be verified by opening the page in a modern browser and reviewing:

- Desktop and narrow responsive layouts
- In-page navigation
- Local image loading
- Add Event lightbox behavior
- Keyboard focus and dialog closing behavior
- Technology tooltip presentation

## Dependencies

The portfolio has no `package.json`, lock file, installed runtime dependencies, or development dependencies. It relies only on browser-supported HTML, CSS, and JavaScript features. Referenced site assets are stored locally except for the CarPics and interactive-map product images, which use remote CarCollectorsClub.com URLs.

## Presented integrations

The case study discusses systems and workflows involving tools such as Google Sheets, Google Sheets API, REST APIs, webhooks, n8n, WordPress, The Events Calendar, social APIs, Playwright, Node.js, Express, React, TypeScript, and Vite.

These are subjects of the portfolio content and supporting evidence. They are not programmatic integrations of this static portfolio repository.

## Content workflow and operating instructions

- Edit page structure and written content in `index.html`.
- Edit presentation and responsive behavior in `styles.css`.
- Edit the current lightbox interaction in `lightbox.js`.
- Keep local image references synchronized with filenames under `images/`.
- Preserve meaningful alternative text when adding or replacing visual evidence.
- Treat technologies and integrations described by the case study as portfolio content, not as dependencies of this static site.
- Follow `AGENTS.md` for project documentation requirements.
- After meaningful project changes, review this README and update it only when purpose, architecture, setup, commands, dependencies, workflows, integrations, or operating instructions have changed.
- Whenever this README is modified, update the timestamp at the bottom using the current local date and time.

## Known limitations and unfinished areas

- The Professional Approach section still contains explicitly labeled placeholder copy.
- The site has no contact form, downloadable resume, or dynamic content source. The CarPics section links to the live application and its product story.
- Twelve local image files are retained but are not referenced by the current HTML.
- The portfolio does not execute or monitor any of the external systems it describes.
- There are no automated accessibility, browser, visual-regression, lint, or content tests.
- There is no documented hosting or deployment workflow.
