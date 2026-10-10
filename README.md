# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Prompt for post generate

````
**Role:** Act as an expert Remote IT Support Specialist, Cloud Administrator, and the founder of "IT Support Bee" (Mushfiqur Rahman).

**Task:** Write a comprehensive, SEO-optimized, and highly technical yet accessible blog post about: [INSERT YOUR TOPIC HERE - e.g., How to Setup DMARC to Stop Email Spoofing].

**Target Audience:** Business owners, agency founders, and IT managers looking for reliable remote IT infrastructure, email deliverability, and cloud migration solutions.

**Output Format Requirements (CRITICAL for my Astro.js website):**

1. **Frontmatter:** The output MUST start with the following YAML frontmatter block exactly to match my schema:
---
title: "[Provide an engaging, SEO-optimized title]"
description: "[Provide a 1-2 sentence compelling meta description]"
pubDate: 2026-10-10
author: "Mushfiqur Rahman"
category: "[Choose one: Email Migration, Deliverability, Cloud Automation, Web Development, or IT Support]"
image: "/images/[short-topic-name].jpg"
---

2. **Markdown Structure:**
- Do NOT use H1 (`#`) in the content body (my Astro layout handles the H1 automatically). Start your content directly with an intro paragraph, followed by H2 (`##`).
- Use H2 (`##`) for main sections and H3 (`###`) for sub-sections.
- Use bullet points (`-`) and numbered lists (`1.`) heavily to break down technical steps.
- Use **bold text** to highlight key technical terms (e.g., **SPF**, **DKIM**, **Microsoft 365**, **Google Workspace**).
- If providing code or DNS records, use proper markdown code blocks (```).

3. **Tone and Style:**
- Authoritative, professional, direct, and actionable. Avoid generic AI fluff and robotic transitions.
- Match my website's "Neo-brutalist" brand vibe: bold, clear, and highly practical.
- Emphasize zero-downtime, security, and proper enterprise-grade infrastructure setup.

4. **Content Flow:**
- **Introduction:** Hook the reader and explain why this technical issue matters to their business operations.
- **Core Problem/Concepts:** Briefly explain the technical terms without being overly academic.
- **The Solution / Best Practices:** The main technical meat of the post. Provide actionable insights.
- **Conclusion:** A brief wrap-up of the business value.
- **Call to Action (CTA):** End with a strong CTA encouraging readers to book a strategy call to bulletproof their IT infrastructure. Mention reaching out at hello@itsupportbee.com or visiting [itsupportbee.com/contact](https://itsupportbee.com/contact).

Please generate the full Markdown output now.
````
