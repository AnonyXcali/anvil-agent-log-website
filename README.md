<p align="center">
  <img src="public/hero-banner.svg" alt="Anvil" width="100%" />
</p>

# Anvil — Developer Log

A public build journal for **Anvil**, a backend for AI-assisted project workspaces. The site introduces the project, summarizes the current state of the repository, and lets visitors follow development progress over time — closer to an engineering notebook than a marketing page.

**Status:** Active development

## What Anvil is

Anvil supports authenticated conversations, routes user requests into background work, and produces React preview sandboxes built and served through Docker-backed infrastructure. It is aimed at developers experimenting with agentic project workflows, where a conversation can become a generated preview, a queued job, or a source-aware implementation plan.

## About this site

- Single static route (`/`) built with Next.js (App Router) and TypeScript.
- Development log entries live in a local TypeScript array ([lib/development-log.ts](lib/development-log.ts)), rendered newest first in an internally scrollable journal block.
- Rendering is kept separate from the data source so entries can later move to Markdown files, Git commits, an API, or a database.
- No authentication, backend API, CMS, or analytics — intentionally minimal.
- Restrained developer-oriented styling: single reading column, neutral background, high-contrast sans-serif text, monospace timestamps and metadata.

## Getting started

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

To create a production build:

```bash
pnpm build
```

## Project structure

```
app/
  layout.tsx    # Fonts and metadata
  page.tsx      # The single landing / development log page
  globals.css   # Editorial styling
lib/
  development-log.ts  # Log entry type + sample entries (data source)
  site.ts             # Repository URL and site status constants
public/
  hero-banner.svg     # README hero banner
```

## Deployment

Designed for Vercel: the page is fully static (prerendered at build time), so importing the repository into Vercel with default Next.js settings is all that's needed.

## Spec

The full build instructions for this site live in [AGENTS.md](AGENTS.md).
