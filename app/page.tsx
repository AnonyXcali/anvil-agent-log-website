import { getDevelopmentLogEntries } from "@/lib/development-log";
import { repositoryUrl, siteStatus } from "@/lib/site";

const repositoryState = [
  "Project workspace management for generated preview work.",
  "Conversation routing through a core request flow.",
  "Background job processing for long-running tasks.",
  "Redis-backed streaming for response and job updates.",
  "Postgres persistence for users, projects, conversations, messages, jobs, and generated files.",
  "Mastra-based agent workflows for source-aware project inspection.",
  "SSH-backed Docker preview infrastructure for generated React apps.",
  "React preview generation and preview lifecycle control.",
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
  "Route more /core requests into full agentic React code generation.",
  "Expand agent flows from search-and-instruct behavior toward direct multi-file editing.",
  "Improve preview isolation, authenticated preview URLs, and production-safe routing.",
  "Improve project job tracking and frontend polling around long-running work.",
  "Grow specialized tools for planning, editing, testing, building, and deploying generated apps.",
];

export default function Home() {
  const entries = getDevelopmentLogEntries();

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead-top">
          <h1 className="site-title">Anvil</h1>
          <span className="status">{siteStatus}</span>
        </div>
        <p className="site-tagline">
          A backend for AI-assisted project workspaces — where a conversation
          can become a generated preview, a queued job, or a source-aware
          implementation plan.
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
            workflows: you talk to the system, and the system turns that
            conversation into working previews, queued jobs, and plans that
            understand your source code.
          </p>
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
