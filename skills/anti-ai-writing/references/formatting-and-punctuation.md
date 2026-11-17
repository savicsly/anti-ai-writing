# Formatting Fingerprints & Punctuation Patterns

How LLM output looks on the page — lists, emphasis, dashes, and "too perfect" punctuation. Use this file when the draft is structurally neat but visually generic.

---

## Formatting fingerprints

### Bullet patterns

AI defaults to bullets when uncertain. Tells include:

- Bullets mid-essay where prose would do
- Parallel bullet grammar so strict it feels generated
- A bullet list that restates the preceding paragraph
- "Key takeaways" boxes that summarize what was just said

**Human fix:** convert weak lists back to sentences; keep lists for true inventories, steps, or options.

### Bold usage

- Bolding every other phrase for "scannability"
- Bold lead-ins on every bullet (`**Clarity:** …`)
- Bolding the thesis in every section

**Human fix:** bold sparingly — one idea per section max, or none.

### Heading hierarchy

- Perfectly nested H2 → H3 → H4 for short posts
- Title Case Everywhere
- Headings that are full SEO sentences
- Sections named Conclusion / Summary / Final Thoughts by default

**Human fix:** fewer headings; sentence-case; headings that tease a claim, not a label.

### Numbered lists

- "Here are 7 ways…" with seven equal items
- Steps that aren't sequential forced into numbers
- Lessons always in threes or fives

**Human fix:** number only real sequences; uneven list lengths are fine.

### Markdown habits

- Horizontal rules between every section
- Tables for content that wants a paragraph
- Code fences around non-code
- Emoji headers (📌 Key Point) unless the brand uses them

### Emoji habits

Unless prompted, many models avoid emoji — or, when asked for "engaging" copy, spray them as punctuation. Both extremes read as synthetic.

**Human fix:** match the author's real channel habits; never use emoji as bullet substitutes in formal prose.

### Colon overuse

AI introduces explanations with colons constantly:

- "The reason is simple: …"
- "Here's why: …"
- "The answer: …"

**Human fix:** sometimes a period or a rewrite is cleaner.

### Em dash habits

Models often use em dashes for asides and dramatic pauses, more densely than most human writers. Pangram's figures put several model families at roughly 7x to 10x the human rate, while Gemini 3 Pro sits below it; a 2026 informal test reported in the UWA piece found most chatbots barely used them. So treat dash density as one weak signal. Do not search-and-replace every dash: fix the cause (too many asides in one passage) and keep dashes the author uses naturally.

**Human fix:** keep dashes for genuine interruptions; prefer commas or split sentences.

### Parentheses

Some analyses note AI underuses casual parentheses (the human aside) and overuses polished clause stacking instead. When AI does use parentheses, they tend to be definitional, not conversational.

### Quotation style

- Fake quotes from unnamed experts
- "As the saying goes…"
- Quote marks for emphasis ("success") — a weak tell when stacked with other signals

---

## Punctuation patterns

| Mark | AI-leaning habit | Human-leaning habit |
|------|------------------|---------------------|
| Em dash | Frequent dramatic asides | Sparing, intentional |
| Semicolon | Often rare; ideas split into new sentences | Used for related independent clauses |
| Colon | Chains of "label: explanation" | Occasional |
| Ellipsis | Trailing profundity ("and that changed everything…") | Hesitation or omission |
| Exclamation | Either none (flat) or hype bursts | Rare, sincere |
| Oxford comma | Almost always present | Author-dependent |
| Contractions | Avoided → stiff formality | Common in natural prose |
| Fragments | Avoided | Allowed in informal genres |

### Grammar perfection

Zero fragments, zero run-ons, consistent Oxford commas, no contractions — together these create a polished register that can feel non-human in casual genres (email, social, scripts).

**Not a proof of AI** — many careful humans write this way. Treat as one signal in a cluster.

---

## Before / after

**AI (dash + colon + bold list):**

> Here's the reality: great teams share three traits — **clarity**, **trust**, and **speed**. Let's unpack each.

**Human:**

> Great teams get three things right: they know what "done" means, they trust each other enough to disagree, and they ship.

**AI (emoji + scannable bold):**

> ✅ **Tip:** Always leverage feedback loops.

**Human:**

> Ask for feedback before the second draft, not after launch.

---

## Editing checklist

- [ ] Remove decorative bold and emoji scaffolding
- [ ] Convert pointless mid-prose bullet blocks to paragraphs
- [ ] Reduce em dashes; split sentences where needed
- [ ] Allow contractions if the genre is conversational
- [ ] Delete "Summary" / "Key takeaways" sections that only restate
- [ ] Check whether every section heading is necessary

---

## Data points and newer habits (2025 to 2026)

Pangram's per-10,000-word comparison (vendor data, indicative only): markdown formatting about 12x the human rate, bullet lists about 9x, bold lead-ins about 43x, headers about 23x.

Other habits to check:

- **Title Case headings** and "What / Why / How" header trios on short pieces.
- **Bold lead-in on every bullet** ("**Speed:** it is fast"). Keep bold for the few things a skimming reader must not miss.
- **Decorative Unicode:** arrows (→), "≈", box-drawing lines, curly quotes pasted into plain-text surfaces, and emoji bullets such as ✅ and 🚀, which Pangram reports at far above human rates.
- **Over-formatting short answers:** headers and bullets on a reply that needed three sentences.
- **Context test:** headers and bullets are correct in READMEs, specs, runbooks and PRDs. Judge formatting against the genre, not against a blanket rule.

