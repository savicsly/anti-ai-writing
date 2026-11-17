# Anti-AI Writing

[![npm](https://img.shields.io/npm/v/anti-ai-writing)](https://www.npmjs.com/package/anti-ai-writing)

An AI agent skill that rewrites or reviews text so it reads like a specific, thoughtful person wrote it. It removes the patterns that make writing sound machine-made (stock vocabulary, contrast framing, default triads, uniform rhythm, over-formatting, template openers and closers) and keeps the meaning, facts, names, numbers and the author's voice.

The aim is better writing, not dodging AI detectors. Detectors are unreliable and flag formal and non-native writers unfairly, so the skill never optimises for a detector score.

It works in Claude Code, Cursor, VS Code with GitHub Copilot, OpenAI Codex, Gemini CLI, Windsurf, OpenCode, and any other tool that supports the open Agent Skills format.

## Install

Pick one method. All of them install the same skill.

### Option 1: Skills CLI (any tool that supports Agent Skills)

Run this inside your project folder:

```bash
npx skills add savicsly/anti-ai-writing
```

The full GitHub URL works too:

```bash
npx skills add https://github.com/savicsly/anti-ai-writing
```

The [Skills CLI](https://github.com/vercel-labs/skills) asks which tools to install for (Claude Code, Cursor, Codex, Copilot and others) and whether to install for this project or globally. Add `-g` for all your projects, or `-a claude-code` to pick a tool without the prompt. The package is called `skills`, plural; `npx skill add` will not work.

### Option 2: Bundled installer (npx)

```bash
npx anti-ai-writing                       # from npm
npx github:savicsly/anti-ai-writing       # straight from GitHub, no npm needed
```

It asks which tool you use and where to install. Or skip the questions:

```bash
npx anti-ai-writing install --agent cursor            # this project, Cursor
npx anti-ai-writing install --agent vscode            # this project, VS Code (GitHub Copilot)
npx anti-ai-writing install --agent claude --global   # all your projects, Claude Code
npx anti-ai-writing install --all --yes               # every supported tool
```

| Tool | `--agent` | This project | All projects (`--global`) |
|---|---|---|---|
| Claude Code | `claude` | `.claude/skills/` | `~/.claude/skills/` |
| Cursor | `cursor` | `.cursor/skills/` | `~/.cursor/skills/` |
| VS Code (GitHub Copilot) | `vscode` | `.github/skills/` | `~/.copilot/skills/` |
| OpenAI Codex | `codex` | `.codex/skills/` | `~/.codex/skills/` |
| Gemini CLI | `gemini` | `.gemini/skills/` | `~/.gemini/skills/` |
| Windsurf | `windsurf` | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |
| OpenCode | `opencode` | `.opencode/skills/` | `~/.config/opencode/skills/` |
| Shared folder read by several tools | `agents` | `.agents/skills/` | `~/.agents/skills/` |

For any other tool, point the installer at its skills folder: `npx anti-ai-writing install --dir path/to/skills`.

Other commands: `status` shows where the skill is installed, `uninstall --agent <name>` removes it, and running `install` again updates it (use `npx anti-ai-writing@latest` to be sure you get the newest version).

The installer only copies files. It has no dependencies, makes no network requests, and collects nothing.

### Option 3: Claude Code plugin

Inside Claude Code:

```
/plugin marketplace add savicsly/anti-ai-writing
/plugin install anti-ai-writing@human-writing
```

Updates then arrive through `/plugin`.

### Option 4: Claude.ai and the Claude apps

Zip the `skills/anti-ai-writing` folder (it must contain `SKILL.md`) and upload it under **Settings → Capabilities → Skills**. The wording varies a little between clients.

### Option 5: Manual

Copy the `skills/anti-ai-writing` folder from this repository into your tool's skills folder (see the table above).

## Use

Restart or reload your tool after installing, then ask in plain words. The skill triggers from its description; there is no special command to remember.

- "Humanize this LinkedIn post: …"
- "Rewrite this email so it doesn't sound like ChatGPT wrote it."
- "Review this proposal for AI tells. Don't rewrite it yet."
- "Light touch on this cover letter. Keep the formal register."
- "Humanize the hero and feature blurbs in `app/page.tsx` and keep the JSX intact."
- "Rewrite this empty state and error toast. Less 'Oops!', more specific."
- "Tighten this ADR: decision first, cut the landscape opener."

In Claude Code with the plugin installed you can also type `/anti-ai-writing:anti-ai-writing`.

## What it does

The skill has three modes:

- **Rewrite** (default) returns the improved text, with a short note only when it had to flag a gap.
- **Review only** lists the tells it found, grouped by type and quoting the line each came from, and changes nothing until you ask.
- **Light touch** changes only what is clearly templated. Getting your text back nearly unchanged is a valid result.

Whatever the mode, it never alters protected content: legal and contract clauses, prices, dates and other figures, names, IDs, URLs, quotes and testimonials, and code, commands or config. It never invents facts, metrics or quotes to make text sound more specific. If a specific is missing, it marks the gap or asks.

Inside a codebase it edits user-facing copy and docs in the source files, and leaves logic, keys, class names, interpolation and markup alone.

## What it covers

| Area | Kinds of text |
|---|---|
| Everyday writing | Emails, texts and DMs, cover letters and résumés |
| Social and content | LinkedIn posts, blog articles, YouTube scripts, social captions |
| Marketing | Website and landing-page copy, product descriptions, press releases |
| Business and agency | Proposals, client emails, case studies, invoices and payment reminders, status updates |
| Project writing | UI microcopy, commit messages, PRs, issues, READMEs, docs, changelogs, release notes, RFCs and ADRs, code comments, review notes |
| Formal | Technical and academic writing, keeping field conventions and terminology |

## Reference manual

The `references/` files can be read on their own. The skill loads them only when the text in front of it needs them.

| File | Contents |
|------|----------|
| `vocabulary.md` | Overused words, transitions, phrase categories, substitutes |
| `sentence-and-rhythm.md` | Sentence and paragraph patterns, cadence |
| `openings-and-closings.md` | Formulaic intros and endings, with human replacements |
| `formatting-and-punctuation.md` | Lists, bold, em dashes, punctuation tells |
| `content-type-habits.md` | Email, LinkedIn, YouTube, blog, website, technical, academic, social, product, press, cover letters, chat |
| `business-and-agency-writing.md` | Proposals, client emails, case studies, agency sites, invoices, status updates; what never to rewrite |
| `project-writing.md` | UI microcopy, commits, PRs, issues, docs, release notes, RFCs/ADRs, comments, review notes |
| `human-voice.md` | Conversational texture and persona style guides |
| `detection-and-models.md` | Why AI text is recognisable, a checklist, model tendencies (2026), sources |

## Limits you should know

- **It edits; it does not know your facts.** Specific writing needs specifics, and only you have them. Expect the occasional "[add the actual figure]" marker instead of an invented number.
- **Results depend on the model.** A more capable model follows the reference material more closely.
- **It is not a detector bypass.** Passing or failing an AI detector says little about whether the writing is good.
- **Check meaning-sensitive edits.** Read rewrites of contracts, policies and anything legal or medical before sending them.

## Requirements

- Node.js 18 or later, for the `npx` installers only. The skill itself is plain Markdown.

## Repository layout

```
anti-ai-writing/
├── bin/cli.js                    npx installer
├── package.json
├── CHANGELOG.md
├── RELEASING.md
├── .claude-plugin/
│   ├── plugin.json               Claude Code plugin manifest
│   ├── marketplace.json          Lets Claude Code install from this repository
│   └── icon.png
└── skills/anti-ai-writing/
    ├── SKILL.md                  Rules and working method the assistant follows
    └── references/               Pattern catalogues and genre guides, loaded on demand
```

## Customizing

Edit `SKILL.md` or any file under `references/`. Keep core rules in `SKILL.md` short and put long catalogues in the reference files, so the assistant only loads what it needs.

## License

MIT. See [LICENSE](LICENSE).
