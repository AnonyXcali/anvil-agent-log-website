import Image from "next/image";
import { getDevelopmentLogEntries } from "@/lib/development-log";
import { getShowcaseItems } from "@/lib/showcase";
import { repositoryUrl, siteStatus } from "@/lib/site";

const repositoryState = [
  "Project workspace management for generated preview work.",
  "Intent-based routing between instant conversation and project-change flows.",
  "Background job processing for long-running tasks.",
  "Redis-backed streaming for conversation text, workflow progress, approvals, and job updates.",
  "Postgres persistence for users, projects, conversations, messages, jobs, and generated files.",
  "Mastra-based agents for conversation, source search, planning, editing, verification, and approvals.",
  "Optional context from public web sources and the rendered project preview.",
  "SSH-backed Docker preview infrastructure for generated React apps.",
  "React preview generation, project editing, and preview lifecycle control.",
];

const userFlows = [
  {
    name: "Instant conversation",
    description:
      "The conversation agent responds in short, plain language while text is delivered live to the UI. It can use project context, public web information, or the current preview when relevant.",
  },
  {
    name: "Project change",
    description:
      "The supervisor searches the project, presents a plan, waits for approval, then applies and verifies the approved changes before updating the preview.",
  },
];

const techStack = [
  "NestJS",
  "TypeScript",
  "Better Auth",
  "OpenAI",
  "Mastra",
  "BullMQ",
  "Redis / ioredis",
  "Postgres / pg",
  "Kysely",
  "node-pg-migrate",
  "Zod",
  "Docker + SSH previews",
  "Jest",
  "ESLint",
  "Prettier",
  "pnpm",
];

const futureWork = [
  "Continue improving the quality and efficiency of the current conversation and project-change flows.",
  "Expand verification and preview-aware feedback for generated applications.",
  "Improve preview isolation, authenticated preview URLs, and production-safe routing.",
  "Improve project job tracking and frontend polling around long-running work.",
  "Grow specialized tools for planning, editing, testing, building, and deploying generated apps.",
];

export default function Home() {
  const entries = getDevelopmentLogEntries();
  const showcase = getShowcaseItems();

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead-top">
          <h1 className="site-title">Anvil</h1>
          <span className="status">{siteStatus}</span>
        </div>
        <p className="site-tagline">
          A backend for AI-assisted project workspaces — where a conversation
          can become an immediate streamed answer or a source-aware
          implementation plan that updates a generated preview.
        </p>
        <p className="masthead-links">
          {repositoryUrl ? (
            <a href={repositoryUrl}>Follow the repository →</a>
          ) : (
            <span className="pending">Repository link — coming soon</span>
          )}
        </p>
      </header>

      <main>
        <section className="section" aria-labelledby="about-heading">
          <h2 className="section-title" id="about-heading">
            What Anvil is
          </h2>
          <p>
            Anvil supports authenticated conversations, routes user requests
            into background work, and produces React preview sandboxes that
            can be built and served through Docker-backed infrastructure.
          </p>
          <p>
            It is built for developers experimenting with agentic project
            workflows: a conversation can become an immediate streamed answer
            or a source-aware implementation plan that updates a generated
            preview.
          </p>
        </section>

        <section className="section" aria-labelledby="showcase-heading">
          <h2 className="section-title" id="showcase-heading">
            Built with Anvil
          </h2>
          <p className="showcase-intro">
            Screenshots from React previews generated and served by Anvil.
          </p>
          <div className="showcase-grid">
            {showcase.map((item) => (
              <figure className="showcase-item" key={item.id}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 720px) 100vw, 640px"
                />
                <figcaption>
                  <span className="showcase-title">{item.title}</span>
                  <span className="showcase-description">
                    {item.description}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="state-heading">
          <h2 className="section-title" id="state-heading">
            Current repository state
          </h2>
          <p>
            The committed repository is a NestJS backend for authenticated AI
            conversations, agentic project work, and React preview sandboxes.
            At a high level, the system includes:
          </p>
          <ul className="plain-list">
            {repositoryState.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="flows-heading">
          <h2 className="section-title" id="flows-heading">
            Current user flows
          </h2>
          <p>
            An authenticated user starts from a project conversation. An
            internal intent step routes the request into one of two
            experiences:
          </p>
          <ul className="plain-list">
            {userFlows.map((flow) => (
              <li key={flow.name}>
                <strong>{flow.name}:</strong> {flow.description}
              </li>
            ))}
          </ul>
          <p>
            The testing UI makes both paths observable. It shows the composed
            response, live workflow status, approval controls, completion or
            failure state, and the underlying stream events for debugging.
          </p>
        </section>

        <section className="section" aria-labelledby="stack-heading">
          <h2 className="section-title" id="stack-heading">
            Current tech stack
          </h2>
          <ul className="stack-list">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="future-heading">
          <h2 className="section-title" id="future-heading">
            Future implementation
          </h2>
          <ul className="plain-list">
            {futureWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="log-heading">
          <h2 className="section-title" id="log-heading">
            Development log
          </h2>
          <p className="log-intro">
            Recent progress, newest first. Sample entries for the first
            version of this journal.
          </p>
          <div
            className="log-scroll"
            tabIndex={0}
            role="region"
            aria-labelledby="log-heading"
          >
            {entries.map((entry) => (
              <article className="log-entry" key={entry.id}>
                <h3 className="log-entry-title">{entry.title}</h3>
                <time className="log-entry-time">{entry.timestamp}</time>
                <p className="log-entry-description">{entry.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Anvil — a public build journal</span>
        <span>
          {repositoryUrl ? (
            <a href={repositoryUrl}>Repository</a>
          ) : (
            "Repository link coming soon"
          )}
        </span>
      </footer>
    </div>
  );
}
