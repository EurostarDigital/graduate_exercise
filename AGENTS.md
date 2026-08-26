# AGENTS.md — EurostarDigital agent working agreement

This repository is part of the EurostarDigital engineering organisation and is
operated with AI agent assistance. Every agent working in this repository MUST
comply with the rules below. Human maintainers should treat these rules as the
baseline for any automated or AI-assisted contribution.

## 1. Agent identification on every commit (MANDATORY)

Any commit that an agent authors, co-authors, or that is committed on an agent's
behalf MUST carry a `Co-authored-by:` trailer identifying the agent and the
model that produced the change. This is non-negotiable and applies to every
commit, including merge commits, squash commits, and hotfixes.

The trailer MUST follow the standard GitHub two-part `Co-authored-by:` format —
a Name and an email in angle brackets — so GitHub recognises it as a valid
co-author. The Name field carries the agent and model; the email field carries
the HUMAN author's real address (the address the commit is authored under, i.e.
the human GitHub account responsible for the change). Never use a synthetic or
fake agent domain as the email.

Format for the trailer, in the commit body:

```
Co-authored-by: AGENT-NAME (MODEL-ID) HUMAN-AUTHOR-EMAIL-IN-ANGLE-BRACKETS
```

Examples (real human author address in the email field, agent+model in Name):

```
Co-authored-by: Archer (deepseek-v4-flash) <david.opperman@eurostar.com>
Co-authored-by: opencode (claude-sonnet-4.6) <david.opperman@eurostar.com>
Co-authored-by: codex (gpt-5) <david.opperman@eurostar.com>
```

Rules:

- The trailer MUST be `Name <email>` — the model identifier goes in the Name
  field (in parentheses after the agent name), never as a bare third field.
- Exactly one line per agent who contributed to the commit.
- Multiple agents contribute multiple consecutive trailers.
- The trailer MUST sit in the commit body (never in the subject line).
- The email field MUST be the human author's real address, not a synthetic or
  agent-generated address.
- Never strip or rewrite an existing `Co-authored-by:` trailer that a previous
  agent added to a commit you are reusing or cherry-picking.
- A human pushing an agent-authored commit is responsible for ensuring the
  trailer is present and carries their real address before push.

Purpose: auditability of which agent and which model produced every change, so
rollbacks, blame, and security review can trace authorship accurately — while
keeping every trailer valid and GitHub-recognised.

## 2. Scope and safety

- Stay within the scope of the task you were given. Do not refactor or rename
  unrelated code "while you're in there".
- Read-only investigation, reporting, and audit work stays read-only unless
  change authorisation is explicit.
- Never run destructive operations (force-push, branch deletion, resource
  teardown) without explicit sign-off.
- If a task's scope changes mid-flight, stop the superseded work immediately and
  confirm before continuing.

## 3. Version control and pull requests

- Branch from the default branch; use a descriptive branch name.
- Open a pull request for every change. Never push directly to the default
  branch.
- Reference the relevant JIRA ticket key in the PR and commit body.
- NOJIRA is not permitted. Every change MUST reference a real JIRA ticket key.
  If no ticket exists for the work, create one before opening the PR — do not
  proceed without a reference.
- Never use an admin/`--admin` merge.
- Keep PRs focused: one logical change per PR.

## 4. Verification before hand-off

- Run the repository's test and build commands before submitting a PR.
- State which commands you actually ran and their results. Do not claim a test
  or build passed that you did not run.
- Flag any verification you could not perform, and why.

## 5. Transparency and honesty

- Never fabricate tool output, test results, or data. If something could not be
  obtained or executed, say so and explain why.
- Cite sources where possible; if you cannot, say so explicitly.
