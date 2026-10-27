# Detection, Model Tendencies & Research Appendix

Why AI writing is recognizable, how to check drafts, how models differ, and where the evidence comes from. Use this file for detection checklists and citations — not as a substitute for editorial judgment.

---

## Executive summary

AI-generated writing follows a consistent style fingerprint across genres. LLM output tends to use elevated, generic vocabulary and polished grammar, but falls into predictable syntactic and structural patterns.

Common telltales:

- Formulaic openings and endings ("In summary…", "To conclude…")
- Clichéd connectors and hedges ("that being said", "generally speaking", "arguably")
- Buzzword-heavy phrasing ("cutting-edge", "innovative", "harness")
- Excessive formality (few contractions, little slang or personal aside)
- Uniform rhythm (monotonic sentence lengths and paragraph shapes)
- Over-explaining and tidy wrap-ups of every point

Bloomberry's AI Sentence DNA research describes the compound pattern as: generic vocabulary, smooth but low-information transitions, symmetrical rhetorical forms, uniform cadence, predictable openings/closings, and low-specificity conclusions. Recognition comes from **signals stacking**, not from any single word.

Empirically, Kobak et al. (2025) found abrupt post-ChatGPT spikes in style words across 15+ million PubMed abstracts (e.g. *delve* ~28× baseline), estimating at least ~13.5% of 2024 biomedical abstracts were LLM-processed (higher in some subcorpora).

Human writers vary vocabulary, accept imperfection, use personal voice, and favor concrete detail.

**Goal of this skill:** produce writing that reads as though a thoughtful person wrote it — not to "beat" detectors.

---

## Detection checklist

Look for a **cluster** of signals, not one token.

### Strong indicators (when several co-occur)

- [ ] Over-polished formal tone; little slang; consistent formality; Oxford commas everywhere
- [ ] Stock phrases repeating: "in conclusion", "at the end of the day", "the reality is", "food for thought", "as a reminder"
- [ ] Excessive hedging: "arguably", "for the most part", "to some degree"
- [ ] Cliched insights: "a key takeaway is…", "this underscores the importance of…"
- [ ] Generic content with few specifics (no names, dates, numbers, sources)
- [ ] Symmetric structure: equal-length paragraphs, each ending in a mini-summary
- [ ] Punctuation excess: dense em dashes or colon chains
- [ ] Uniform sentence lengths; almost no fragments
- [ ] Unusually high synonym hopping on a mundane topic
- [ ] No personal voice or conversational interjection (unless required)
- [ ] Answer-like comprehensive coverage (exam-question completeness)

### False positives — do not over-call

- Careful human editors also write formally
- Non-native English writers are disproportionately flagged by some detectors (Liang et al., 2023)
- Domain jargon (*robust*, *latency*, *regression*) is legitimate in technical writing
- Templates required by institutions (cover letters, abstracts) can mimic AI structure
- Short messages lack enough signal for confident judgment

### Human-editing indicators

- Specific anecdotes, named entities, local references
- Irregular paragraph and sentence lengths
- Stance and risk (claims someone could dispute)
- Mild disfluency or intentional fragments in informal genres
- Draft history / versioning that shows revision (process evidence)
- Ability to explain choices orally — detectors can't replace conversation

**Heuristic, not proof.** Humans can write formally; AI can be prompted toward variation. Multiple aligned signals matter.

---

## Model comparisons

Most patterns in this manual appear across major LLMs, and they shift with every model release. Treat anything below as a snapshot of editorial observation, not a guarantee, and prefer structural checks (specificity, stance, rhythm) over trying to name the model.

What the 2025 to 2026 sources agree on:

- **Em dash density varies by model family and is no longer a reliable tell on its own.** Pangram's published figures put OpenAI models around 9x the human rate, open-source models around 8x, Anthropic models around 7x, and Gemini 3 Pro below the human rate (about 0.7x). This is vendor data from a company that sells detection, so treat the numbers as indicative. A 2026 UWA write-up reports that in an informal test only one of six chatbots leaned on em dashes, and calls the em dash an unreliable tell.
- **Markdown scaffolding is the strongest family-agnostic signal in chat-style output:** bold, headers and bullets appear far more often in AI text than in human prose (Pangram reports bold about 43x and headers about 23x per 10,000 words).
- **Stock-phrase hooks differ by model, but contrast framing ("not just X but Y"), triads and "serves as"-style verb swaps appear across all of them.**
- **Open-weight and fine-tuned models vary widely.** Chat fine-tunes often inherit the habits of the larger proprietary models they were trained on.
- **Newer models are tuned against the old tells.** Words like *delve* have faded in some outputs while structure (symmetry, hazy trailing clauses, stacked caveats) persists. A tell has a half-life of months, not years.

| Signal | Reliability in 2026 | Notes |
|--------|---------------------|-------|
| Single word (*delve*, *tapestry*) | Weak and decaying | Wikipedia editors and journalists both note weak evidence for specific words |
| Markdown density in prose | Strong when it appears where a person would write plain text | Context matters: docs and READMEs legitimately use headers and bullets |
| Em dash density | Weak to moderate; varies by model | Do not strip dashes mechanically |
| Contrast framing and triads | Moderate; stacks well with others | Pangram: roughly 3x and 4x human rate |
| Hazy trailing significance clauses | Moderate to strong | Called out in the Wikipedia guide |
| Missing specifics (no names, numbers, dates) | Strong and durable | Hardest for a model to fake without real input |
| Uniform cadence and paragraph shape | Moderate and durable | See sentence-and-rhythm.md |

Detectors: Wikipedia's editor guide describes automated detection tools as close to useless for its purposes, and Liang et al. (2023) showed detectors flagging non-native writers at high rates. Do not use detector scores as a target.

Homogenisation: a Nature Human Behaviour study of more than 880,000 texts, as reported in the UWA piece, links wider LLM use to less variation in writing style. That is a reason to protect the author's real voice, not only to remove tells.

---

## Example rewrite table (multi-signal)

| Pattern | AI example | Human rewrite |
|---------|------------|---------------|
| Buzzword | "Our innovative platform will revolutionize business processes." | "Our new platform will greatly improve business processes." |
| Transition | "That being said, we can implement X with caution." | "However, we can implement X with caution." |
| Stated lesson | "A key takeaway is that collaboration drives success." | "Collaboration drives success." |
| Contrast framing | "It's not about getting more done; it's about doing the right things." | "Focus on doing the right things, not just getting more done." |
| Corporate jargon | "We leverage analytics to optimize customer engagement." | "We use analytics to improve customer engagement." |
| Overly formal | "Please be advised that we have concluded the review." | "We have finished the review." |
| Even rhythm | "The project will require coordination. Each team must deliver on time. Without this, deadlines will slip." | "We'll need coordination — every team delivering on time is crucial. Otherwise we miss deadlines." |
| Hedged claim | "Arguably, this approach has the most robust framework." | "This approach has a strong framework." |
| Conclusion cue | "In conclusion, continuous learning is key." | "Continuous learning is key." |
| Email filler | "It is my pleasure to inform you that…" | "I'm happy to tell you that…" |

---

## Research appendix

### Academic & corpus studies

- Kobak, D., González-Márquez, R., Horvát, E.-Á., & Lause, J. (2025). *Delving into LLM-assisted writing in biomedical publications through excess vocabulary.* Science Advances. https://www.science.org/doi/10.1126/sciadv.adt3813 — PubMed excess-vocabulary analysis; *delve* ~28×; lower-bound LLM-processing estimates for 2024 abstracts.
- Liang, W., Yuksekgonul, M., Mao, Y., Wu, E., & Zou, J. (2023). *GPT detectors are biased against non-native English writers.* Patterns. https://arxiv.org/abs/2304.02819 — detector false positives against non-native writers.
- Emi, B., & Spero, M. *Technical Report on the Pangram AI-Generated Text Classifier.* https://arxiv.org/html/2402.14873 — detector methodology; hard-negative mining; domain coverage.

### Industry & editorial analyses

- Bloomberry Research (2026). *AI Sentence DNA: 7,400+ AI Writing Patterns.* https://www.bloomberry.ai/research/ai-writing-patterns — signal taxonomy; stacked-fingerprint framing.
- Bloomberry Research. *The Emergence of AI Dialects.* https://www.bloomberry.ai/research/ai-dialects
- Pangram Labs. *Comprehensive Guide to Spotting AI Writing Patterns.* https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns
- Pangram Labs. *How to detect AI writing.* https://www.pangram.com/blog/how-to-detect-ai-writing
- Reply.io / Eugene Suslov (2025). *AI Words in Emails: A Practical Guide.* https://reply.io/blog/ai-words-in-emails/
- Grammarly. *How to Avoid AI Detection* / AI detector explainers. https://www.grammarly.com/blog/ai/how-to-avoid-ai-detection/ — note: product-oriented; useful on perplexity/burstiness framing.
- HumanizeMyAI. *AI Words to Avoid* (detector-backed list). https://humanizemy.ai/ai-words-to-avoid — aggregates excess-vocab and phrase signals; treat lists as provisional.

### 2025 to 2026 additions

- Pangram Labs. *9 Signs of AI Writing, Backed by Data.* https://www.pangram.com/signs-of-ai-writing: per-10,000-word rates for markdown, stock phrases, em dashes, bullets, triads, contrast framing, unusual Unicode, openers and emoji. Vendor data; the page itself says no single tell is a giveaway and its em dash baselines are not fully consistent.
- Wikipedia editors. *Signs of AI writing* (WikiProject AI Cleanup guide, 2025). Covered by TechCrunch, 20 Nov 2025: https://techcrunch.com/2025/11/20/the-best-guide-to-spotting-ai-writing-comes-from-wikipedia/: overstated importance, padded notability, hazy trailing clauses, promotional tone; warns that detectors are unreliable.
- tropes.fyi directory of AI writing tropes (49 entries with trend tags): https://tropes.fyi/directory
- University of Western Australia (Aug 2026). *Can you teach yourself to detect AI writing? Maybe.* https://www.uwa.edu.au/news/article/2026/august/can-you-teach-yourself-to-detect-ai-writing: cues that help and mislead, em dash unreliability, homogenisation finding, caveats about detectors.

### Community & style guides

- Wikipedia. *Signs of AI writing* (community essay / guidance for editors). Search: "Wikipedia Signs of AI writing" — curated phrase and structure markers for encyclopedic prose.
- Wandering Educators. Humanizing AI writing / spotting average cadence. https://www.wanderingeducators.com/education/tips/how-to-make-ai-writing-sound-human-without-losing-your-voice

### Notes on sources named in the originating research brief

- **Grammarly "Decoding AI Language" (Feb 2026):** the exact title was not cleanly verified as a standalone URL at plan time; Grammarly's AI-detection and AI-language posts cover related ground (linked above). Claims tied only to that title are treated as editorial synthesis unless a stable URL is confirmed.
- **Savliuk (Medium, 2026) and Kernan ("13 Signs You Used ChatGPT"):** widely circulated editorial lists; pattern-consistent with the above, but prefer primary/corpus sources for frequency claims.
- **OpenAI forum lexical-diversity (TTR) discussions:** practitioner observations; not a peer-reviewed effect size.

### How to cite frequency claims in this manual

- Use Kobak et al. for PubMed excess ratios (*delve*, *underscores*, *showcasing*).
- Use Bloomberry for stacked-signal / cadence taxonomy framing.
- Use Liang et al. for detector bias / false-positive caution.
- Mark unmatched claims as editorial observation.
