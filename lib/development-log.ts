export type DevelopmentLogEntry = {
  id: string;
  title: string;
  timestamp: string;
  description: string;
};

// Sample entries, kept newest first. This local array is the only data
// source for the first version; rendering never reaches into it beyond
// this module's exports, so it can later be swapped for Markdown files,
// Git commits, an API, or a database without touching the page.
const developmentLogEntries: DevelopmentLogEntry[] = [
  {
    id: "chunk-based-conversation-delivery",
    title: "Added request-scoped conversation streaming",
    timestamp: "6 August 2026, 22:36",
    description:
      "Improved live conversation delivery so instant replies stay associated with the right request while the testing UI can compose text, show progress, and preserve stream details.",
  },
  {
    id: "context-aware-conversation-tools",
    title: "Expanded conversational project context",
    timestamp: "6 August 2026, 21:50",
    description:
      "Enabled the conversation experience to use project search, relevant public web information, page content, and rendered preview context when answering questions.",
  },
  {
    id: "testing-ui-workflow-console",
    title: "Improved the workflow testing console",
    timestamp: "28 July 2026, 02:30",
    description:
      "Refined the internal testing interface so streamed progress, approvals, preview links, and debug information are easier to follow during agent runs.",
  },
  {
    id: "supervisor-workflow-streaming",
    title: "Expanded workflow streaming visibility",
    timestamp: "27 July 2026, 20:15",
    description:
      "Added clearer status updates for long-running agent workflows so planning, editing, verification, and completion can be tracked as they happen.",
  },
  {
    id: "verification-loop-stability",
    title: "Stabilized edit verification",
    timestamp: "27 July 2026, 19:20",
    description:
      "Improved the verification stage so generated file changes can be checked more reliably before they are promoted back into the preview workspace.",
  },
  {
    id: "precise-remote-editing",
    title: "Added precise remote file editing",
    timestamp: "26 July 2026, 15:40",
    description:
      "Introduced a safer edit flow that prepares local working copies, protects original files, applies targeted changes, verifies the result, and updates the remote workspace.",
  },
  {
    id: "human-approval-flow",
    title: "Added human approval before edits",
    timestamp: "25 July 2026, 22:10",
    description:
      "Added a human-in-the-loop checkpoint so proposed project changes can be reviewed and approved before the system applies them.",
  },
  {
    id: "supervisor-agent-flow",
    title: "Introduced the Supervisor Agent flow",
    timestamp: "24 July 2026, 18:30",
    description:
      "Moved complex frontend requests into a coordinated supervisor flow that can search the project, plan changes, request approval, and hand work to specialized editing agents.",
  },
  {
    id: "ssh-project-tools",
    title: "Expanded SSH-backed project tools",
    timestamp: "23 July 2026, 17:50",
    description:
      "Added project-scoped remote file operations to support safer preview workspace editing without exposing broad filesystem access.",
  },
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

export function getDevelopmentLogEntries(): DevelopmentLogEntry[] {
  return developmentLogEntries;
}
