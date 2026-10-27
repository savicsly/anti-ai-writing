---
name: anti-ai-writing
description: >-
  Rewrite or review text so it reads like a specific, thoughtful person wrote
  it. Removes AI fingerprints (stock vocabulary, contrast framing, triads,
  uniform rhythm, hazy "significance" clauses, over-formatting, template
  openers and closers, corporate and promotional tone) while preserving
  meaning, facts, names, numbers and the author's voice. Use whenever the user
  asks to write, rewrite, edit, proofread, polish, humanize, tighten,
  paraphrase or improve text, or says it "sounds like AI" or "sounds
  robotic" — including emails, proposals, client messages, case studies,
  website and landing-page copy, UI microcopy, commit and PR messages, READMEs,
  docs, RFCs/ADRs, LinkedIn posts, blogs, scripts, cover letters and reports.
  Also use for a review-only pass that lists AI tells without rewriting.
---

# Anti-AI Writing Humanizer

Use this skill whenever you write, rewrite, edit, proofread, humanize, paraphrase, or improve text. Remove common AI writing patterns while preserving meaning, facts, intent, and voice.

Do **not** rewrite for the sake of rewriting. Edit with purpose. The goal is writing that reads like a thoughtful human, not "beating" AI detectors. Detectors are unreliable and produce false positives, especially for non-native and formal writers, so never optimise for a detector score.

Read the matching file under [reference/](reference/) when you need patterns, examples or genre guidance.

---

# Core Principles

Always:

* Preserve the original meaning, facts, and technical accuracy.
* Preserve the author's tone and real voice unless told otherwise. Heavy LLM use homogenises style; protect what is distinctive.
* Add specificity: names, numbers, dates, examples, decisions. Missing specifics is the most durable AI tell.
* Prefer clarity over complexity. Write for humans, not algorithms.
* Judge signals as clusters. One word or one dash proves nothing.

Never:

* Invent information, quotes, metrics or sources. If specifics are missing, mark the gap or ask; do not fabricate them.
* Add generic filler.
* Make writing more "professional" at the expense of sounding natural.
* Treat formality, a regional business register, or correct formal English as a defect.

---

# Modes

* **Rewrite (default):** return the improved text. Add a short note only if you changed meaning-adjacent choices or had to flag a gap.
* **Review only:** when asked to check, audit or "find the AI tells", list the tells found with the line or string they came from, group by type (vocabulary, structure, rhythm, formatting, missing specifics), and do not rewrite until asked.
* **Light touch:** when the text is mostly fine, change only what is clearly templated and say so. Returning text nearly unchanged is a valid result.

# Protected content (never alter)

Legal and contract clauses; prices, taxes, dates, durations and other figures; names, titles, IDs, URLs, emails; quoted speech and testimonials; code, commands, config and API names; mandated formats. If a sentence mixes protected and loose text, rewrite only the loose text. See [reference/business-and-agency-writing.md](reference/business-and-agency-writing.md).

---

# AI Fingerprints to Remove

## Vocabulary & stock phrases

Replace overused AI vocabulary (`leverage`, `utilize`, `robust`, `seamless`, `comprehensive`, `innovative`, `cutting-edge`, `empower`, `unlock`, `elevate`, `streamline`, `furthermore`, `moreover`) and newer habits (`quietly`, `genuinely`, `fundamentally`, `tapestry`, `landscape`, `serves as`, `stands as a testament`) with plain words. Keep real technical terms in technical writing.

Cut stock openers/closers: *In today's world…*, *It is important to note…*, *Let's dive in…*, *Here's the thing…*, *Whether you're…*, *In conclusion…*, *The key takeaway is…*, *At the end of the day…*.

Full lists and substitutes: [reference/vocabulary.md](reference/vocabulary.md).

## Structure & rhythm

The tells that outlast vocabulary clean-ups: contrast framing (*not just X but Y*), triads by default, symmetrical paragraphs, a hazy "-ing" clause that claims significance, fractal summaries, performed fragments, and uniform sentence length. Mix short, medium and long sentences; let paragraphs vary; read aloud.

Details: [reference/sentence-and-rhythm.md](reference/sentence-and-rhythm.md).

## Tone & clichés

Avoid corporate jargon, promotional gloss, empty motivation and internet clichés (*game changer*, *next level*, *let that sink in*, *this changes everything*, *three lessons…*). Be direct and specific.

## Openings, closings & filler

Start with the actual point or a concrete observation. End when the point is made, with a real next step if one exists. Delete filler (*It should be noted that…*, *In order to…*, *Due to the fact that…*). Do not repeat an idea in other words.

More: [reference/openings-and-closings.md](reference/openings-and-closings.md).

## Formatting & punctuation

Check formatting against the genre. READMEs, specs and runbooks need headers and bullets; a short reply or a message does not. Cut decorative bold, bold lead-ins on every bullet, emoji bullets, stray Unicode arrows, and Title Case headings on short pieces. Do not strip every em dash mechanically; fix dash-heavy passages by restructuring.

Details: [reference/formatting-and-punctuation.md](reference/formatting-and-punctuation.md).

## Human voice

Add concrete nouns, take a stance where the author has one, prefer active voice, allow slight imperfection. Sound like someone with experience, not a summary bot.

Personas and texture: [reference/human-voice.md](reference/human-voice.md).

---

# Working method

1. **Read for purpose and audience.** Who is this for, what should they do or understand, what is the register?
2. **Mark protected content** (see above) so it is not touched.
3. **Diagnose.** Note the clusters of tells and what specifics are missing. Skim the matching reference file.
4. **Rewrite or review** according to the mode.
5. **Verify.** Compare against the original: meaning, facts, names and numbers unchanged; nothing invented; voice intact; reads naturally aloud.

---

# Content-Type Guidelines

Keep these short. For playbooks and before/after examples, open the matching reference.

**Emails** — Skip *I hope this email finds you well* / *Please don't hesitate…*. Be concise; match the recipient's formality. → [content-type-habits.md](reference/content-type-habits.md)

**Proposals, client messages, case studies, agency sites, invoices and reminders, status updates** → [business-and-agency-writing.md](reference/business-and-agency-writing.md)

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

When used inside a project (for example an IDE or Claude Code):

1. Prefer editing **source files** (pages, components, MDX, CMS/content JSON, i18n locales, docs) over scraping a live URL.
2. Change **user-facing or docs copy only** unless asked otherwise.
3. Do **not** alter logic, props, routes, styles, class names, test IDs, variable names, API paths, error codes, or translation **key names** unless asked.
4. Preserve interpolation, markdown structure, JSX/expressions, and link targets; rewrite surrounding natural language only.
5. Keep tone consistent across one surface (page, PR, doc).
6. If asked for review-only, list AI tells with file references before rewriting.
7. Return in-file edits (or clear before/after per string); don't only summarise unless asked.

Website-specific habits: [content-type-habits.md](reference/content-type-habits.md). Project surfaces: [project-writing.md](reference/project-writing.md).

---

# Final Quality Checklist

Before returning any response, verify that it:

* Preserves the original meaning, and every name, number, date and quote.
* Invents nothing.
* Sounds natural when read aloud.
* Varies sentence length and structure; avoids default triads and contrast framing.
* Carries specifics a competitor or another client could not reuse.
* Avoids AI vocabulary, corporate or promotional jargon, and overused internet phrases.
* Removes filler and formulaic openings and closings.
* Uses formatting that fits the genre.
* Keeps the author's voice and the recipient-appropriate register.

Skim the matching `reference/` file for genre-specific habits before finishing.

---

# Additional resources

Read on demand:

* [reference/vocabulary.md](reference/vocabulary.md) — vocabulary, transitions, substitutes, 2025–2026 additions
* [reference/sentence-and-rhythm.md](reference/sentence-and-rhythm.md) — sentence/paragraph patterns, newer structural tells
* [reference/openings-and-closings.md](reference/openings-and-closings.md) — intros and conclusions
* [reference/formatting-and-punctuation.md](reference/formatting-and-punctuation.md) — lists, bold, dashes, Unicode
* [reference/content-type-habits.md](reference/content-type-habits.md) — email, LinkedIn, YouTube, blog, website, technical, academic, social, product, press, cover letters, chat
* [reference/business-and-agency-writing.md](reference/business-and-agency-writing.md) — proposals, client messages, case studies, invoices, status updates
* [reference/project-writing.md](reference/project-writing.md) — UI microcopy, PRs, commits, docs, RFCs/ADRs, comments
* [reference/human-voice.md](reference/human-voice.md) — conversational texture and personas
* [reference/detection-and-models.md](reference/detection-and-models.md) — detection checklist, model tendencies, sources (updated 2026)

---

# Guiding Principle

The best writing doesn't sound like it was optimised by a machine. It sounds like it came from someone who understands the subject, knows the audience, and has something worthwhile to say. Every edit should move the writing closer to that standard.
