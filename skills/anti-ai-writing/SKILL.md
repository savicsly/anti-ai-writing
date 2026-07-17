---
name: anti-ai-writing
description: >-
  Rewrite text to sound genuinely human. Remove AI fingerprints including
  overused words, robotic rhythm, corporate tone, repetitive sentence
  structures, and internet clichés. Preserve meaning, improve flow, and
  eliminate filler. Use when asked to write, rewrite, edit, proofread,
  humanize, paraphrase, or improve text — including website copy, landing
  pages, UI microcopy, PR/commit messages, docs, READMEs, and other
  user-facing or project writing in a codebase (including RFCs/ADRs).
---

# Anti-AI Writing Humanizer

Use this skill whenever you are asked to write, rewrite, edit, proofread, humanize, paraphrase, or improve text. Eliminate common AI writing patterns while preserving meaning, facts, intent, and voice.

Do **not** rewrite for the sake of rewriting. Edit with purpose. The goal is writing that reads like a thoughtful human — not "beating" AI detectors.

For deeper examples or genre patterns, read the matching file under [reference/](reference/).

---

# Core Principles

Always:

* Preserve the original meaning, facts, and technical accuracy.
* Preserve the author's tone unless instructed otherwise.
* Improve readability and flow; remove unnecessary words.
* Prefer clarity over complexity. Write for humans, not algorithms.

Never:

* Invent information or change the intended message.
* Add generic filler.
* Make writing sound more "professional" at the expense of sounding natural.

---

# AI Fingerprints to Remove

## Vocabulary & stock phrases

Replace overused AI vocabulary (`leverage`, `utilize`, `robust`, `seamless`, `comprehensive`, `innovative`, `cutting-edge`, `empower`, `unlock`, `elevate`, `streamline`, `furthermore`, `moreover`, etc.) with simpler alternatives when appropriate.

Cut stock openers/closers: *In today's world…*, *It is important to note…*, *Let's dive in…*, *Here's the thing…*, *Whether you're…*, *In conclusion…*, *The key takeaway is…*, *At the end of the day…*.

Full lists and substitutes: [reference/vocabulary.md](reference/vocabulary.md).

## Sentence rhythm

Avoid similar lengths, repeated openings, perfectly balanced paragraphs, and excessively polished flow. Mix short, medium, and long sentences; let paragraphs vary; read aloud to check rhythm.

Details: [reference/sentence-and-rhythm.md](reference/sentence-and-rhythm.md).

## Tone & clichés

Avoid corporate jargon, empty motivational language, and internet clichés (*game changer*, *next level*, *let that sink in*, *this changes everything*, *three lessons…*). Be direct and specific. Prefer plain English.

## Openings, closings & filler

Start with the actual point or a concrete observation — not *Technology is changing the world* or *In today's digital age*. End naturally; stop when the point is made. Delete filler (*It should be noted that…*, *In order to…*, *Due to the fact that…*). Don't repeat the same idea in different words.

More openers/closers: [reference/openings-and-closings.md](reference/openings-and-closings.md).

## Human voice

Add specificity and concrete nouns. Prefer active voice. Allow slight imperfections. Sound like someone with experience, not a summary bot.

Personas and texture: [reference/human-voice.md](reference/human-voice.md).

---

# Content-Type Guidelines

Keep these short. For playbooks and before/after examples, open the matching reference.

**Emails** — Skip *I hope this email finds you well* / *Please don't hesitate…*. Be concise. → [content-type-habits.md](reference/content-type-habits.md)

**LinkedIn** — No fake vulnerability, three-lesson formulas, engagement bait, or emoji overload. → [content-type-habits.md](reference/content-type-habits.md)

**Blog** — Cut SEO fluff, generic intros, repeated summaries, artificial FAQs. → [content-type-habits.md](reference/content-type-habits.md)

**YouTube scripts** — No *Before we begin…* / *watch until the end* / *Let's dive right in*. Speak to one person. → [content-type-habits.md](reference/content-type-habits.md)

**Technical writing** — Keep accuracy and terminology; remove ornamental complexity only. → [content-type-habits.md](reference/content-type-habits.md)

**Academic** — Cut throat-clearing (*This paper aims to explore…*, *A plethora of studies…*). State the claim, cite specifics, preserve field conventions. → [content-type-habits.md](reference/content-type-habits.md)

**Social captions** — Avoid POV / "this is your sign" templates. Write a specific thought. → [content-type-habits.md](reference/content-type-habits.md)

**Texts / DMs** — Match real texting; say the thing first; skip preamble. → [content-type-habits.md](reference/content-type-habits.md)

**Product descriptions** — Lead with concrete buyer-relevant detail; cut category-generic adjectives. → [content-type-habits.md](reference/content-type-habits.md)

**Website / landing** — Concrete hero outcome; feature lines that fail a competitor swap-test; specific proof; one primary CTA. → [content-type-habits.md](reference/content-type-habits.md)

**Press releases** — Lead with the news; quotes a real person would say; no *thrilled to announce* padding. → [content-type-habits.md](reference/content-type-habits.md)

**Cover letters / résumés** — Concrete fit and evidence; not *passionate about leveraging* keyword soup. → [content-type-habits.md](reference/content-type-habits.md)

**Project writing** (UI microcopy, commits, PRs, issues, README/docs/changelogs/release notes, RFCs/ADRs, comments, review notes, Slack/status) → [reference/project-writing.md](reference/project-writing.md)

---

# Editing in a Codebase

When used inside an IDE project (for example Cursor):

1. Prefer editing **source files** (pages, components, MDX, CMS/content JSON, i18n locales, docs) over scraping a live URL.
2. Change **user-facing or docs copy only** unless asked otherwise.
3. Do **not** alter logic, props, routes, styles, class names, test IDs, variable names, API paths, error codes, or translation **key names** unless asked.
4. Preserve interpolation, markdown structure, JSX/expressions, and link targets; rewrite surrounding natural language only.
5. Keep tone consistent across one surface (page, PR, doc).
6. If asked for review-only, list AI tells with file references before rewriting.
7. Return in-file edits (or clear before/after per string) — don't only summarize unless asked.

Website-specific habits: [content-type-habits.md](reference/content-type-habits.md). Project surfaces: [project-writing.md](reference/project-writing.md).

---

# Final Quality Checklist

Before returning any response, verify that it:

* Preserves the original meaning.
* Sounds natural when read aloud.
* Uses varied sentence lengths and structures.
* Avoids AI vocabulary, corporate jargon, and overused internet phrases.
* Removes unnecessary filler and formulaic openings/closings.
* Feels conversational without sounding templated.
* Is concise without feeling abrupt.

Skim the matching `reference/` file for genre-specific habits before finishing.

---

# Additional resources

Read on demand:

* [reference/vocabulary.md](reference/vocabulary.md) — vocabulary, transitions, substitutes
* [reference/sentence-and-rhythm.md](reference/sentence-and-rhythm.md) — sentence/paragraph patterns
* [reference/openings-and-closings.md](reference/openings-and-closings.md) — intros and conclusions
* [reference/formatting-and-punctuation.md](reference/formatting-and-punctuation.md) — lists, bold, dashes
* [reference/content-type-habits.md](reference/content-type-habits.md) — email, LinkedIn, YouTube, blog, website, technical, academic, social, product, press, cover letters, chat
* [reference/project-writing.md](reference/project-writing.md) — UI microcopy, PRs, commits, docs, RFCs/ADRs, comments
* [reference/human-voice.md](reference/human-voice.md) — conversational texture and personas
* [reference/detection-and-models.md](reference/detection-and-models.md) — detection checklist, models, sources

---

# Guiding Principle

The best writing doesn't sound like it was optimized by a machine. It sounds like it came from someone who understands the subject, knows the audience, and has something worthwhile to say. Every edit should move the writing closer to that standard.
