# Agent Teams — Master Reference Guide

A practical reference for designing, launching, and steering effective Claude Code
agent teams. Use this to build better and more effective teams over time.

> Source: [Orchestrate teams of Claude Code sessions](https://code.claude.com/docs/en/agent-teams)
> Status: **Experimental** — disabled by default. Requires Claude Code **v2.1.32+**.

---

## 1. What agent teams are

An agent team coordinates multiple independent Claude Code instances working
together:

- **One lead** — the session that creates the team, spawns teammates, assigns
  work, and synthesizes results.
- **Teammates** — separate Claude Code instances, each with its own context
  window, working on assigned tasks. You can talk to any teammate directly.
- **Shared task list** — work items teammates claim and complete.
- **Mailbox** — messaging system; teammates message each other directly by name.

The defining feature: teammates **communicate with each other**, not just report
upward. They share findings, challenge each other, and self-coordinate.

---

## 2. Teams vs. subagents — choosing the right tool

| | Subagents | Agent teams |
| :-- | :-- | :-- |
| Context | Own window; result returns to caller | Own window; fully independent |
| Communication | Report back to main agent only | Teammates message each other directly |
| Coordination | Main agent manages all work | Shared task list, self-coordination |
| Best for | Focused tasks where only the result matters | Complex work needing discussion |
| Token cost | Lower — results summarized back | Higher — each teammate is a full instance |

**Decision rule:**
- Workers need to talk to each other / challenge findings → **agent team**
- Workers just need to do a focused job and report a result → **subagent**
- Sequential work, same-file edits, many dependencies → **single session**

---

## 3. Enabling agent teams

Set the environment variable `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, either in
your shell or in `settings.json`:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

---

## 4. When agent teams pay off

Strongest use cases — parallel exploration adds real value:

- **Research & review** — investigate different aspects simultaneously, then
  share and challenge findings.
- **New modules / features** — each teammate owns a separate, non-overlapping piece.
- **Debugging with competing hypotheses** — teammates test rival theories in
  parallel and converge faster.
- **Cross-layer coordination** — frontend / backend / tests, each owned by a
  different teammate.

**Avoid teams for:** sequential tasks, same-file edits, work with many
dependencies, routine tasks. The coordination overhead and token cost outweigh
the benefit. Use a single session or subagents instead.

---

## 5. Starting a team

Describe the task **and the team structure** in natural language. Claude creates
the team, spawns teammates, and coordinates.

```text
I'm designing a CLI tool that helps developers track TODO comments across
their codebase. Create an agent team to explore this from different angles: one
teammate on UX, one on technical architecture, one playing devil's advocate.
```

Two ways teams start:
1. **You request it** — give a parallel-friendly task and explicitly ask for a team.
2. **Claude proposes it** — Claude may suggest a team; you confirm first.

Either way, Claude never creates a team without approval.

---

## 6. Controlling the team

### Display modes

- **In-process** — all teammates run in the main terminal. Works anywhere, no setup.
  - `Shift+Down` — cycle through teammates (wraps back to lead); type to message.
  - `Enter` — view a teammate's session; `Escape` — interrupt their turn.
  - `Ctrl+T` — toggle the task list.
- **Split panes** — each teammate gets its own pane; click in to interact.
  Requires **tmux** or **iTerm2** (`it2` CLI + Python API enabled).

Set via `~/.claude/settings.json`:

```json
{ "teammateMode": "in-process" }
```

Values: `"auto"` (default — split panes if already in tmux, else in-process),
`"tmux"` (split panes, auto-detects tmux vs iTerm2), `"in-process"`.
One-off override: `claude --teammate-mode in-process`.

> Split panes are **not** supported in VS Code's integrated terminal, Windows
> Terminal, or Ghostty.

### Specifying teammates and models

Claude picks the teammate count, or you specify:

```text
Create a team with 4 teammates to refactor these modules in parallel.
Use Sonnet for each teammate.
```

Teammates do **not** inherit the lead's `/model`. Set **Default teammate model**
in `/config` (choose "Default (leader's model)" to follow the lead).

### Requiring plan approval

For risky tasks, require teammates to plan in read-only mode before implementing:

```text
Spawn an architect teammate to refactor the authentication module.
Require plan approval before they make any changes.
```

The teammate sends a plan to the lead; the lead approves or rejects with
feedback (rejected → teammate revises and resubmits). The lead decides
**autonomously** — steer it with criteria in your prompt, e.g. "only approve
plans that include test coverage" or "reject plans that modify the DB schema."

### Talking to teammates directly

Each teammate is a full, independent session.
- In-process: `Shift+Down` to the teammate, then type.
- Split panes: click into the pane.

### Tasks: assign and claim

Task states: **pending → in progress → completed**. Tasks may depend on others;
a pending task with unresolved dependencies can't be claimed until they finish.
Dependency unblocking is automatic.

- **Lead assigns** — tell the lead which task goes to which teammate.
- **Self-claim** — after finishing, a teammate picks up the next unassigned,
  unblocked task.

Task claiming uses **file locking** to prevent races.

### Shutting down & cleanup

```text
Ask the researcher teammate to shut down
```
The teammate can approve (exit gracefully) or reject with an explanation.

```text
Clean up the team
```
Removes shared team resources. **Always use the lead to clean up** — it checks
for active teammates and fails if any are running, so shut them down first.
Teammates running cleanup may corrupt team state.

---

## 7. Architecture & internals

| Component | Role |
| :-- | :-- |
| Team lead | Main session — creates team, spawns teammates, coordinates |
| Teammates | Separate Claude Code instances, each on assigned tasks |
| Task list | Shared work items teammates claim and complete |
| Mailbox | Messaging between agents |

**Storage (auto-generated — do not hand-edit):**
- Team config: `~/.claude/teams/{team-name}/config.json`
- Task list: `~/.claude/tasks/{team-name}/`

The team config holds runtime state (session IDs, tmux pane IDs) and a `members`
array (name, agent ID, agent type) teammates can read to discover each other.
It's overwritten on every state update — never pre-author it. There is **no
project-level team config**; a `.claude/teams/teams.json` is treated as an
ordinary file.

### Context each teammate gets

On spawn, a teammate loads the same project context as a regular session:
`CLAUDE.md`, MCP servers, skills — **plus** the spawn prompt from the lead.
The lead's conversation history does **not** carry over.

### How teammates share information

- **Automatic message delivery** — no polling needed.
- **Idle notifications** — a teammate that finishes notifies the lead automatically.
- **Shared task list** — all agents see status and claim available work.
- **Direct messaging** — message one teammate by name; to reach everyone, send
  one message per recipient.

Name teammates explicitly in your spawn prompt so you can reference them later.

### Permissions

Teammates start with the **lead's** permission settings (including
`--dangerously-skip-permissions`). You can change individual teammate modes
**after** spawning, but not per-teammate at spawn time. Teammate permission
prompts bubble up to the lead — pre-approve common operations to reduce friction.

### Token usage

Token cost scales **linearly** with active teammates — each has its own context
window. Worthwhile for research/review/new features; wasteful for routine tasks.

---

## 8. Reusable roles via subagent definitions

When spawning a teammate, reference a subagent type from any scope (project,
user, plugin, CLI-defined):

```text
Spawn a teammate using the security-reviewer agent type to audit the auth module.
```

- The teammate honors the definition's `tools` allowlist and `model`.
- The definition's body is **appended** to the teammate's system prompt (not a
  replacement).
- Team coordination tools (`SendMessage`, task management) are **always**
  available even if `tools` restricts other tools.
- **Not applied:** the `skills` and `mcpServers` frontmatter fields — teammates
  load skills/MCP from project + user settings like a normal session.

---

## 9. Quality gates with hooks

Enforce rules at team lifecycle points (exit code 2 = block + send feedback):

- **`TeammateIdle`** — runs before a teammate goes idle. Exit 2 → send feedback
  and keep it working.
- **`TaskCreated`** — runs when a task is being created. Exit 2 → prevent creation.
- **`TaskCompleted`** — runs when a task is being marked complete. Exit 2 →
  prevent completion and send feedback.

Useful for: requiring tests before a task can complete, blocking malformed tasks,
keeping teammates from going idle with work undone.

---

## 10. Best practices

1. **Give teammates enough context.** They don't inherit conversation history.
   Put task-specific detail in the spawn prompt:
   ```text
   Spawn a security reviewer teammate with the prompt: "Review the authentication
   module at src/auth/ for security vulnerabilities. Focus on token handling,
   session management, and input validation. The app uses JWT tokens stored in
   httpOnly cookies. Report any issues with severity ratings."
   ```
2. **Right-size the team.** Start with **3–5 teammates** for most workflows.
   Token cost scales linearly; coordination overhead and diminishing returns kick
   in beyond that. Three focused teammates beat five scattered ones.
3. **Right-size tasks.** ~**5–6 tasks per teammate**. Too small → overhead
   exceeds benefit. Too large → long runs without check-ins risk wasted effort.
   Aim for self-contained units with a clear deliverable (a function, a test
   file, a review). 15 independent tasks → ~3 teammates.
4. **Wait for teammates to finish.** If the lead starts doing the work itself:
   `Wait for your teammates to complete their tasks before proceeding`.
5. **Start with research & review.** New to teams? Begin with no-code tasks
   (review a PR, research a library, investigate a bug) — clear boundaries, no
   parallel-implementation conflicts.
6. **Avoid file conflicts.** Two teammates editing the same file → overwrites.
   Split work so each teammate owns a distinct set of files.
7. **Monitor and steer.** Check progress, redirect failing approaches,
   synthesize findings as they arrive. Don't let a team run unattended.

---

## 11. Use case patterns (proven prompts)

### Parallel code review — distinct lenses

```text
Create an agent team to review PR #142. Spawn three reviewers:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.
```
Each reviewer applies a different filter; the lead synthesizes across all three.

### Competing-hypotheses debugging — adversarial debate

```text
Users report the app exits after one message instead of staying connected.
Spawn 5 agent teammates to investigate different hypotheses. Have them talk to
each other to try to disprove each other's theories, like a scientific
debate. Update the findings doc with whatever consensus emerges.
```
The debate structure beats anchoring: sequential investigation biases toward the
first plausible theory. Independent investigators trying to disprove each other
surface the actual root cause.

### Multi-angle design exploration

```text
Create an agent team to explore [problem] from different angles: one teammate on
UX, one on technical architecture, one playing devil's advocate.
```

---

## 12. Troubleshooting

| Symptom | Fix |
| :-- | :-- |
| Teammates not appearing | In-process: press `Shift+Down` to cycle. Confirm the task was complex enough. For split panes: `which tmux`; for iTerm2 verify `it2` CLI + Python API. |
| Too many permission prompts | Pre-approve common operations in permission settings before spawning. |
| Teammates stop on errors | View their output (`Shift+Down` / click pane); give instructions or spawn a replacement. |
| Lead shuts down early | Tell it to keep going; tell it to wait for teammates instead of doing work itself. |
| Orphaned tmux sessions | `tmux ls` then `tmux kill-session -t <name>`. |
| Task stuck / status lags | Check if the work is actually done; update status manually or nudge the teammate. |

---

## 13. Known limitations

- **No session resumption with in-process teammates** — `/resume` and `/rewind`
  don't restore them. After resuming, tell the lead to spawn new teammates.
- **Task status can lag** — teammates sometimes fail to mark tasks complete,
  blocking dependents. Check and update manually if stuck.
- **Shutdown can be slow** — teammates finish the current request/tool call first.
- **One team at a time** — clean up before creating a new team.
- **No nested teams** — teammates can't spawn their own teams/teammates.
- **Lead is fixed** — the creating session is lead for the team's lifetime; no
  promotion or transfer.
- **Permissions set at spawn** — all teammates start with the lead's mode.
- **Split panes need tmux or iTerm2** — unsupported in VS Code integrated
  terminal, Windows Terminal, Ghostty.

---

## 14. Quick checklist for a new team

- [ ] `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` set; Claude Code v2.1.32+.
- [ ] Task genuinely benefits from parallel work (independent, low dependencies).
- [ ] Team size 3–5; ~5–6 tasks per teammate.
- [ ] Each teammate owns a distinct set of files (no overlap).
- [ ] Spawn prompts carry full task-specific context (no history inherited).
- [ ] Teammates named explicitly for later reference.
- [ ] Plan approval required for risky changes; approval criteria given to lead.
- [ ] Permissions pre-approved to limit prompt friction.
- [ ] Hooks set for quality gates if needed (`TaskCompleted`, `TeammateIdle`).
- [ ] Monitor progress; steer; clean up via the **lead** when done.

---

## 15. Related approaches

- **Subagents** — lightweight delegation for research/verification within a
  session; no inter-agent coordination.
- **Git worktrees** — run multiple Claude Code sessions yourself, manually,
  without automated team coordination.
