# Project Writing: UI, PRs, Docs, RFCs & Team Text

Everyday writing inside software projects. Consult this file when editing microcopy, commits, PRs, issues, READMEs, changelogs, release notes, RFCs/ADRs, comments, or review notes.

Match the repo's existing voice when one exists (terse eng docs vs. friendlier product UI). Don't impose one "human" persona on every surface.

---

## UI microcopy

Buttons, empty states, errors, toasts, form labels, tooltips, onboarding, confirmations.

### Stock AI lines

| AI habit | Human equivalent |
|----------|------------------|
| Oops! Something went wrong | Couldn't save. Try again. / Payment failed — card was declined. |
| Let's get you started! | Create your first project / Add a teammate |
| You're all set! | Done. / Workspace ready. |
| Please try again later | Try again in a minute / Still failing? Contact support |
| An unexpected error occurred | We couldn't load invoices (timeout) |
| Are you sure you want to continue? | Delete this project? This can't be undone. |
| Welcome aboard! | (skip — show the next useful action) |

### Habits to cut

- Cheerleading empty states ("Your adventure begins here")
- Fake empathy on every error ("We know this is frustrating…")
- Vague success toasts ("Success!" with no object)
- Button labels that market instead of act (*Unlock insights* → *Export CSV*)
- Identical tone on destructive and safe actions

**Human fix:** say what happened, what to do next, and what's at stake. Specific beats friendly.

**AI:** "Oops! We hit a snag while processing your request. Please try again."

**Human:** "Couldn't upload `report.pdf` — file is over 10 MB."

---

## Commit messages

### AI habits

- "Update code" / "Fix issue" / "Improve logic"
- "Comprehensive refactor of the authentication module"
- "Enhance user experience and overall performance"
- Padded bodies that restate the diff in corporate prose
- Fake Conventional Commit theater (`feat: implement comprehensive…`)

### Human fix

- Subject: what changed, in plain language (imperative is fine if the repo uses it)
- Body only when needed: why, risk, follow-ups — not a tour of every line
- Match the repo's commit style (short one-liners vs. detailed bodies)

**AI:** "Refactor codebase to leverage improved patterns and enhance maintainability."

**Human:** "Extract billing webhook handler so retries don't block the request thread."

---

## PR descriptions

### AI habits

- "This PR aims to…" / "This pull request seeks to address…"
- "Comprehensive improvements across the stack"
- Template sections filled with filler (*Summary:* restates the title; *Test plan:* "Tested locally")
- Motivation paragraphs with no bug, ticket, or constraint
- Bullet lists that mirror the file list

### Human fix

- Lead with what changed and why (bug, ticket, constraint)
- Call out risk, migrations, and what reviewers should focus on
- Test plan: concrete steps or "N/A — docs only," not theater
- Keep it short; link the issue instead of rewriting it

**AI:** "This PR aims to improve the robustness of our API layer by implementing comprehensive error handling."

**Human:** "Return 422 with field errors from `/checkout` instead of a generic 500 when the cart is empty."

---

## Issues & tickets

GitHub, Linear, Jira, etc.

### AI habits

- Vague titles (*Improve performance*, *Update UI*)
- Padded user stories with no acceptance edge (*As a user I want a better experience…*)
- Acceptance criteria that restate the title three ways
- "Steps to reproduce: 1. Open the app 2. Observe the issue"

### Human fix

- Title: entity + failure or ask (`Checkout 500 when cart empty`)
- Repro: exact steps, expected vs. actual, environment if it matters
- Scope: what's in / out; link designs or logs

---

## README, docs & changelogs

### AI habits

- "Welcome to X — a powerful and flexible…"
- Feature lists that restate the hero
- "Getting started is easy!" then a wall of setup
- Changelog: "We're excited to announce…" / synonym stuffing for one change
- Docs that explain what the code already names clearly

### Human fix

- README: what it is, who it's for, how to run it — in that order
- Docs: task-oriented ("Rotate an API key") over brochure sections
- Changelog: what changed for the user or operator; skip emotion

**AI:** "Our robust CLI empowers developers to seamlessly manage infrastructure."

**Human:** "CLI to create, list, and destroy preview environments."

### Release notes (vs. changelog)

Changelogs are for operators scanning versions. Release notes are for humans deciding whether to care.

| AI habit | Human equivalent |
|----------|------------------|
| We're excited to announce… | (state the change) |
| This release brings significant improvements… | Name 1–3 changes that matter |
| Enhanced performance and reliability | Checkout p95 down ~40% under load |
| Synonym parade for one feature | One clear name + what it unlocks |

**Human fix:** lead with user-visible change; put breaking changes first; skip celebration adjectives.

---

## RFCs / ADRs / design notes

Architecture Decision Records, RFCs, and design docs go wrong when they sound like a strategy deck instead of a decision.

### AI habits

- Landscape openers (*In today's rapidly evolving…*, *As systems scale…*)
- Padded Context that restates the ticket without a constraint
- "We propose a comprehensive solution that…" with no rejected alternatives
- Tradeoffs section that's three synonyms of "flexibility vs. complexity"
- Consequences that only list upsides
- Fake certainty (*This will ensure…*, *This guarantees…*) when you're choosing under uncertainty

### Human fix

- **Context:** the forcing function (incident, cost, deadline, constraint) — not industry weather
- **Decision:** one sentence saying what you chose
- **Alternatives considered:** real options you rejected, with why (even "we didn't have time")
- **Consequences:** what gets easier *and* what gets harder; migration/rollback if relevant
- Match the template your team uses (MADR, Nygard ADR, internal RFC) — fill it honestly, don't inflate it

**AI:** "In order to enhance scalability and ensure long-term maintainability, we propose adopting a robust event-driven architecture that will empower teams to iterate seamlessly."

**Human:** "Move billing webhooks to a queue. Sync handlers timed out at 12k events/day last week; a queue lets us retry without blocking Checkout."

### Structural tells

- Equal-length sections with no decision until the end
- Status set to "Accepted" with zero dissent or open questions
- Diagrams described in prose as "holistic" / "seamless" instead of showing data flow

---

## Code comments & JSDoc

### AI habits

- Narrating the next line (`// Increment the counter by one`)
- "This function is responsible for…" restating the name
- JSDoc that only repeats parameter names with no units, invariants, or edge cases
- Comment banners on every trivial helper

### Human fix

- Comment *why*, constraints, and non-obvious tradeoffs
- Delete comments that only echo the code
- Document surprising behavior, defaults, and failure modes

---

## Code review comments

### AI habits

- Hedge stacks (*It might be worth considering potentially…*)
- Essay replies for a one-line fix
- Fake praise openers on every thread (*Great work! One small nit…*)
- Restating the patch before the ask

### Human fix

- Lead with the ask or concern; keep tone direct and respectful
- Point at the line; suggest a concrete alternative when you have one
- Save praise for something specific, or skip it

**AI:** "It might be worth considering potentially extracting this into a reusable utility to enhance maintainability."

**Human:** "Pull the date formatting into `formatBillingDate` — we do this in three places now."

---

## Slack / status updates

### AI habits

- "Just circling back on this"
- "Happy to provide more context if helpful!"
- Standup padding (*Yesterday I continued to make progress on…*)
- Softened blockers that hide the ask

### Human fix

- Status: done / doing / blocked — with the blocker named
- One clear ask per message when you need something

---

## Editing project text in a codebase

1. Prefer source files over pasted dumps or live-site scrapes.
2. Change user-facing or docs text only — not logic, props, routes, styles, test IDs, or i18n **key names** unless asked.
3. Preserve interpolation, JSX/expressions, markdown structure, and link targets.
4. Keep tone consistent across one surface (same page, same PR, same doc).
5. Review-only when asked: list AI tells with file references before rewriting.
6. Do-not-touch by default: variable names, API paths, error **codes**, enum values, translation keys.

---

## Quick checklist

- [ ] Microcopy names the object and next step
- [ ] Commits/PRs state what/why without brochure language
- [ ] Issues are reproducible or clearly scoped
- [ ] Docs help someone do a task, not admire the product
- [ ] RFCs/ADRs state the decision, rejected alternatives, and real tradeoffs
- [ ] Comments explain why, not what the syntax already says
- [ ] Review notes lead with the ask
