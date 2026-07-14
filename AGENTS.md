# Anvil Developer Log Website

## Purpose

Build a minimal public-facing developer log website for this repository. The site should introduce Anvil, summarize what is currently being built, and let visitors follow development progress over time.

This should feel like a public build journal: closer to a README, changelog, or engineering notebook than a marketing-heavy SaaS landing page.

Repository link: `TODO: add public repository URL`

Status: `Active development`

## Next.js + Vercel Direction

Implement the first version as a small Next.js site intended for Vercel deployment.

- Use a single public route for the landing page and development log.
- Keep the page static for the first implementation.
- Store development log entries in a local TypeScript array.
- Do not add authentication, a backend API, a CMS, analytics, charts, or editing controls.
- Keep rendering logic separate from the local data array so the source can later move to Markdown files, Git commits, an API, or a database.

Suggested route: `/`

Suggested deployment target: Vercel

## Product Summary

Anvil is a backend for AI-assisted project workspaces. It supports authenticated conversations, routes user requests into background work, and produces React preview sandboxes that can be built and served through Docker-backed infrastructure.

The product is for developers experimenting with agentic project workflows where a conversation can become a generated preview, a queued job, or a source-aware implementation plan.

## Current Repository State

The committed repository currently represents a NestJS backend for authenticated AI conversations, agentic project work, and React preview sandboxes.

At a high level, the system includes:

- Project workspace management for generated preview work.
- Conversation routing through a core request flow.
- Background job processing for long-running tasks.
- Redis-backed streaming for response and job updates.
- Postgres persistence for users, projects, conversations, messages, jobs, and generated files.
- Mastra-based agent workflows for source-aware project inspection.
- SSH-backed Docker preview infrastructure for generated React apps.
- React preview generation and preview lifecycle control.

## Current Tech Stack

- NestJS
- TypeScript
- Better Auth
- OpenAI
- Mastra
- BullMQ
- Redis / ioredis
- Postgres / pg
- Kysely
- node-pg-migrate
- Zod
- Docker and SSH-backed preview infrastructure
- Jest
- ESLint
- Prettier
- pnpm

## Future Implementation

Future work should stay aligned with the committed repository direction:

- Route more `/core` requests into full agentic React code generation.
- Expand agent flows from search-and-instruct behavior toward direct multi-file editing.
- Improve preview isolation, authenticated preview URLs, and production-safe routing.
- Improve project job tracking and frontend polling around long-running work.
- Grow specialized tools for planning, editing, testing, building, and deploying generated apps.

## Page Structure

Use a simple single-column layout with comfortable reading width.

- Header with product name, one-line description, status, and repository link.
- Compact product summary.
- Current repository state section.
- Current tech stack section.
- Future implementation section.
- Development log heading.
- Internally scrollable development log block.
- Minimal footer with repository or author information.

Keep the top section compact. Avoid oversized hero copy, decorative images, feature grids, testimonials, pricing sections, or other marketing-page patterns.

## Development Log Data

Use sample data for the first version. These entries should demonstrate the intended content style and should not be treated as a complete source of truth for repository history.

```ts
type DevelopmentLogEntry = {
  id: string;
  title: string;
  timestamp: string;
  description: string;
};

const developmentLogEntries: DevelopmentLogEntry[] = [
  {
    id: "docker-react-previews",
    title: "Documented Docker-based React previews",
    timestamp: "14 July 2026, 18:30",
    description:
      "Summarized the preview workflow for generated Vite React projects served through SSH-backed Docker infrastructure.",
  },
  {
    id: "ai-edit-planning",
    title: "Documented AI-generated edit planning",
    timestamp: "14 July 2026, 17:45",
    description:
      "Captured the direction for source-aware agent workflows that inspect project context and produce implementation plans.",
  },
  {
    id: "contextual-source-expansion",
    title: "Documented contextual source expansion",
    timestamp: "14 July 2026, 16:50",
    description:
      "Added a sample log entry describing how nearby source context can support better agent decisions.",
  },
  {
    id: "filename-content-search",
    title: "Documented filename and content search",
    timestamp: "14 July 2026, 16:10",
    description:
      "Added a sample entry for source search capabilities used by agentic project workflows.",
  },
  {
    id: "bullmq-background-jobs",
    title: "Documented background job processing",
    timestamp: "14 July 2026, 15:20",
    description:
      "Summarized queue-backed processing for long-running project and agent tasks.",
  },
  {
    id: "project-workspaces",
    title: "Documented project workspace management",
    timestamp: "14 July 2026, 14:40",
    description:
      "Added a sample entry for isolated project workspaces used by generated preview flows.",
  },
];
```

Render entries newest first.

Each entry should include:

- Title
- Date and time
- Short description of what was added, changed, tested, or learned

## Visual Direction

The website should take inspiration from **1950s American editorial and commercial illustration**, resembling a technical journal or engineering bulletin rather than a modern SaaS landing page.

The objective is not nostalgia for its own sake, but to create the feeling of reading an engineer's notebook documenting the construction of new technology.

### Design Inspiration

Reference visual influences include:

- Mid-century American editorial illustration
- Saturday Evening Post artwork
- 1950s engineering magazines
- Atomic-age industrial design
- Vintage laboratory notebooks
- Mid-century modern graphic design
- Retro technical manuals

Avoid styles such as:

- Glassmorphism
- Cyberpunk
- Futuristic neon
- Minimal SaaS dashboards
- Material Design
- Bootstrap-style admin interfaces

### Colour Palette

Use a restrained mid-century palette.

Examples include:

- Warm ivory / paper background
- Charcoal typography
- Forest green accents
- Burnt orange highlights
- Muted mustard
- Soft teal
- Warm grey borders

Avoid bright gradients, glowing elements, or highly saturated colours.

### Typography

Typography should resemble a printed engineering journal.

- Elegant serif or handwritten display font for the main title
- Clean sans-serif for body content
- Monospace only for timestamps, metadata, and technology names
- Comfortable line height
- Generous whitespace

Typography should provide most of the visual identity.

### Layout

Use an editorial layout rather than an application dashboard.

- Single reading column
- Comfortable maximum content width
- Large margins
- Consistent spacing rhythm
- Thin horizontal separators
- Sections that naturally flow from top to bottom

The page should feel like a beautifully typeset technical article.

### Components

Components should resemble printed paper rather than software widgets.

Use:

- Thin borders
- Small corner radius
- Extremely subtle shadows (or none)
- Soft paper-like surfaces
- Calm spacing

Avoid:

- Floating cards
- Heavy elevation
- Bright coloured panels
- Oversized rounded corners
- Decorative UI effects

### Development Log

The development log is the primary focus of the page.

Render it as a vertically scrollable engineering journal.

Each entry should resemble a notebook entry with the following hierarchy:

- Title
- Timestamp
- Description

Separate entries with whitespace and subtle dividers.

The log should feel like flipping through an engineering notebook documenting the evolution of the project.

### Motion

Use very little animation.

Allowed:

- Subtle hover transitions
- Gentle opacity changes
- Focus transitions

Avoid:

- Parallax
- Animated backgrounds
- Scroll-driven effects
- Excessive transforms

### Overall Feeling

The website should communicate:

> "An engineer documenting the construction of an AI system."

It should feel thoughtful, handcrafted, timeless, and technical.

The repository itself is the product, and the website should reflect an ongoing engineering effort rather than a polished commercial SaaS product.

The development log block should have a sensible maximum height and internal vertical scrolling while the rest of the page remains static.

## Accessibility

Use semantic page structure and accessible defaults.

- Use `main`, `header`, `section`, `article`, and `footer` where appropriate.
- Maintain proper heading hierarchy.
- Make links keyboard accessible.
- Provide visible focus states.
- Ensure readable contrast.
- Ensure the scrollable log container can receive keyboard focus and be scrolled with the keyboard.

## Acceptance Criteria

- The page immediately answers what Anvil is.
- The page summarizes the committed repository state without relying on uncommitted files.
- The page lists the current tech stack at a high level.
- The page shows future implementation direction.
- The page shows recent development progress as sample local data in reverse chronological order.
- The page includes a place to follow the repository.
- The first implementation is a static Next.js page deployable on Vercel.
- The design remains minimal, responsive, accessible, and developer-oriented.
