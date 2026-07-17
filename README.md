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
- Press releases
- Cover letters / résumés

## Repo structure

```text
anti-ai-writing/                 # repo root
├── README.md
├── LICENSE
└── anti-ai-writing/             # the skill folder
    ├── SKILL.md                 # core instructions
    └── reference/
        ├── vocabulary.md
        ├── sentence-and-rhythm.md
        ├── openings-and-closings.md
        ├── formatting-and-punctuation.md
        ├── content-type-habits.md
        ├── human-voice.md
        └── detection-and-models.md
```

Install the inner `anti-ai-writing/` folder (the one that contains `SKILL.md`), not the whole git repo root.

## Installation

Clone the repo:

```bash
git clone git@github.com:savicsly/anti-ai-writing-repo.git
cd anti-ai-writing-repo
```

### Claude.ai / Claude apps

1. Zip or select the skill folder: `anti-ai-writing/` (must contain `SKILL.md`).
2. In Claude, open **Settings → Capabilities → Skills** (wording may vary by client) and upload that folder, or use **Save skill** if you received a `.skill` package.

### Claude Code

```bash
cp -r anti-ai-writing ~/.claude/skills/
```

### Cursor

Personal (all projects):

```bash
cp -r anti-ai-writing ~/.cursor/skills/
```

Project-only:

```bash
mkdir -p .cursor/skills
cp -r anti-ai-writing .cursor/skills/
```

Restart or reload the agent if skills don't appear immediately.

## How to use

Once installed, ask the agent to write, rewrite, edit, proofread, humanize, or paraphrase text. The skill triggers from its description — no special slash command required.

Example prompts:

- "Humanize this LinkedIn post: …"
- "Rewrite this email so it doesn't sound like ChatGPT wrote it."
- "Edit this blog intro — cut the generic opening and keep my point."
- "Proofread this cover letter for AI clichés and corporate filler."

You can also ask the agent to consult a specific reference file (for example, email habits or the detection checklist).

## Reference manual

The `reference/` files are readable on their own and linked from `SKILL.md` for on-demand use:

| File | Contents |
|------|----------|
| `vocabulary.md` | Overused words, transitions, phrase categories, substitutes |
| `sentence-and-rhythm.md` | Sentence/paragraph patterns and cadence |
| `openings-and-closings.md` | Formulaic intros/endings and human replacements |
| `formatting-and-punctuation.md` | Lists, bold, em dashes, punctuation tells |
| `content-type-habits.md` | Email, LinkedIn, YouTube, blog, chatbot habits |
| `human-voice.md` | Conversational texture and persona style guides |
| `detection-and-models.md` | Why AI is recognizable, checklist, models, sources |

## Customizing

Edit `SKILL.md` or any file under `reference/` directly. Keep core rules in `SKILL.md` short; put long catalogues in the reference files so the agent only loads what it needs.

## License

MIT — see [LICENSE](LICENSE).
