# anti-ai-writing

A Claude Skill that rewrites text to sound genuinely human — removing common AI writing
patterns (overused vocabulary, robotic sentence rhythm, corporate tone, clichéd
transitions) while preserving the original meaning, facts, and voice.

The goal isn't to dodge AI detectors. It's to produce writing that reads like it came
from a thoughtful person, not a template.

## What it does

When active, this skill edits, rewrites, proofreads, humanizes, or paraphrases text with
a checklist-driven pass against a knowledge base of known AI writing tics — vocabulary,
sentence rhythm, filler phrases, and formulaic openings/closings — with dedicated
guidance for several content types:

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

## Installation

### Claude.ai / Claude apps

1. Download `anti-ai-writing/SKILL.md` from this repo (or clone the whole repo).
2. In Claude, open **Settings → Capabilities → Skills** (or wherever skills are managed
   in your client) and upload the `anti-ai-writing` folder, or use the **Save skill**
   button if you received it as a `.skill` file.

### Claude Code / other environments that read from a skills directory

Copy the `anti-ai-writing/` folder into your skills directory, e.g.:

```bash
git clone https://github.com/<your-username>/anti-ai-writing.git
cp -r anti-ai-writing/anti-ai-writing ~/.claude/skills/
```

Adjust the destination path for whatever skills directory your setup uses.

## Usage

Once installed, just ask Claude to write, rewrite, edit, proofread, humanize, or
paraphrase text. The skill triggers automatically based on its description — no special
command needed.

## Customizing

`SKILL.md` is a single, self-contained markdown file — open it and edit directly. It's
organized into sections (vocabulary to avoid, sentence rhythm, content-specific
guidelines, a final quality checklist) so you can add or loosen rules without touching
the rest.

## License

MIT — see [LICENSE](LICENSE).
