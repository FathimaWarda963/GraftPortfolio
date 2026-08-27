# GraftPortfolio

Fathima Warda's personal portfolio — a living site tracing an adaptability story across six projects spanning FastAPI, applied cryptography, mental health AI, plant science, e-commerce, and epidemiology.

**Live site:** https://graft-portfolio.vercel.app

## Tech stack

React (Vite) + Tailwind CSS, deployed on Vercel.

## How to add a new case study

1. Open `src/data/caseStudies.js`.
2. Add a new object to the array, following the existing three-beat shape:
   - `slug` — unique URL-safe identifier
   - `title`, `tagline`, `stack` (array of tech used)
   - `problem` — why this got built, what gap it filled
   - `whatIDid` — technical decisions and trade-offs
   - `outcome` — what it became, whether it worked
   - `bridge` — the one-sentence insight this project taught
   - `github` — link to the repo, or `""` if private/group work
3. Save the file — the new card renders automatically in the Projects section, no other code changes needed.
4. Commit and push:
```bash 
    git add .
    git commit -m "Add [nameOfNewProject] case study"
    git push 
```

5. Vercel auto-deploys on every push to `main` — the live site updates within a minute or two.

## Context for future updates

This project was built inside a Claude Project ("Frame It as Cases: Work That Speaks for Itself") that already has my voice card, tech stack, and identity kit loaded. Adding a new case study is a short conversation, not a rebuild — drop in the raw project details and ask for a three-beat write-up in the same voice.