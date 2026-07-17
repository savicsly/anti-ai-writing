# anti-ai-writing

A skill that rewrites text to sound genuinely human — removing common AI writing patterns (overused vocabulary, robotic sentence rhythm, corporate tone, clichéd transitions) while preserving meaning, facts, and voice.

The goal isn't to dodge AI detectors. It's to produce writing that reads like it came from a thoughtful person, not a template.

This repo also includes a research-backed **reference manual** of AI writing fingerprints (vocabulary, cadence, openings/closings, formatting, genre habits, detection notes, and sources).

## What it covers

When active, the skill edits, rewrites, proofreads, humanizes, or paraphrases text against known AI writing tics, with guidance for:

- Emails
- LinkedIn posts
- Blog articles
- YouTube scripts
- Technical writing
- Academic writing
- Social media captions
- Text messages / DMs
- Product descriptions
- Website / landing page copy
- Press releases
- Cover letters / résumés
- Everyday project writing: UI microcopy, commits, PRs, issues, README/docs/changelogs, code comments, review notes

## Repo structure

```text
anti-ai-writing/                 # repo root
├── README.md
├── LICENSE
└── skills/
    └── anti-ai-writing/         # the skill folder
        ├── SKILL.md             # core instructions (thin router)
        └── reference/
            ├── vocabulary.md
            ├── sentence-and-rhythm.md
            ├── openings-and-closings.md
            ├── formatting-and-punctuation.md
            ├── content-type-habits.md
            ├── project-writing.md
            ├── human-voice.md
            └── detection-and-models.md
```

## Installation

### skills.sh (recommended)

```bash
npx skills@latest add savicsly/anti-ai-writing
```

The installer prompts for which agents to target (Cursor, Claude Code, etc.) and project vs global scope.

Non-interactive example (global, all prompts skipped):

```bash
npx skills@latest add savicsly/anti-ai-writing --skill anti-ai-writing -g -y
```

### Claude.ai / Claude apps

1. Zip or select the skill folder: `skills/anti-ai-writing/` (must contain `SKILL.md`).
2. In Claude, open **Settings → Capabilities → Skills** (wording may vary by client) and upload that folder, or use **Save skill** if you received a `.skill` package.

### Manual install

Clone, then copy the skill folder into your agent skills directory:

```bash
git clone git@github.com:savicsly/anti-ai-writing.git
cd anti-ai-writing
```

Claude Code:

```bash
cp -r skills/anti-ai-writing ~/.claude/skills/
```

Cursor (personal / all projects):

```bash
cp -r skills/anti-ai-writing ~/.cursor/skills/
```

Cursor (project-only):

```bash
mkdir -p .cursor/skills
cp -r skills/anti-ai-writing .cursor/skills/
```

Restart or reload the agent if skills don't appear immediately.

## How to use

Once installed, ask the agent to write, rewrite, edit, proofread, humanize, or paraphrase text. The skill triggers from its description — no special slash command required.

Example prompts:

- "Humanize this LinkedIn post: …"
- "Rewrite this email so it doesn't sound like ChatGPT wrote it."
- "Edit this blog intro — cut the generic opening and keep my point."
- "Proofread this cover letter for AI clichés and corporate filler."
- "Review the copy on this landing page for AI-sounding marketing language."
- "Humanize the hero and feature blurbs in `app/page.tsx` — keep the JSX intact."
- "Rewrite this empty state and error toast — less 'Oops!', more specific."
- "Humanize this PR description and the commit message."
- "Edit the README intro so it doesn't sound like a product brochure."

In a project (for example Cursor), the skill prefers editing user-facing strings and docs in source files over rewriting a pasted dump of the whole page. It leaves logic, keys, and structure alone unless you ask otherwise.

You can also ask the agent to consult a specific reference file (for example, project writing, website habits, or the detection checklist).

## Reference manual

The `reference/` files are readable on their own and linked from `SKILL.md` for on-demand use:

| File | Contents |
|------|----------|
| `vocabulary.md` | Overused words, transitions, phrase categories, substitutes |
| `sentence-and-rhythm.md` | Sentence/paragraph patterns and cadence |
| `openings-and-closings.md` | Formulaic intros/endings and human replacements |
| `formatting-and-punctuation.md` | Lists, bold, em dashes, punctuation tells |
| `content-type-habits.md` | Email, LinkedIn, YouTube, blog, website, chatbot habits |
| `project-writing.md` | UI microcopy, commits, PRs, issues, docs, comments, review notes |
| `human-voice.md` | Conversational texture and persona style guides |
| `detection-and-models.md` | Why AI is recognizable, checklist, models, sources |

## Customizing

Edit `SKILL.md` or any file under `reference/` directly. Keep core rules in `SKILL.md` short; put long catalogues in the reference files so the agent only loads what it needs.

## License

MIT — see [LICENSE](LICENSE).
