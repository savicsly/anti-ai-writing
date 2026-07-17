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

Most patterns above appear across major LLMs. Differences below are **editorial tendencies** from published analyses and practitioner reports — not hard guarantees. Models change with updates.

| Model family | Often-noted tendencies |
|--------------|------------------------|
| **ChatGPT / GPT** | Polite, cautious, helpful-explainer register; list scaffolding; historically "As an AI…" disclaimers (rarer now); phrases like "let's unpack" appear in ChatGPT-associated hook lists; strong grammar polish |
| **Claude** | Formal register; comparatively dense em-dash use in many observations; philosophical asides; vocabulary like *tapestry* flagged in some corpora |
| **Gemini** | Broadly GPT-like in pure text; sometimes more concrete/visual examples when multimodal context is present (limited public stylometry) |
| **Llama** (open) | More variance by fine-tune; base models can show odd phrase choices; chat fine-tunes often mimic GPT-like patterns |
| **DeepSeek** | Strong technical/expository competence; can still exhibit list-heavy, hedged explainer register in general prose (editorial observation) |
| **Grok** | Tuned toward informal / irreverent voice in product positioning; still capable of stock AI structure when unconstrained |
| **Mistral** | Depends heavily on fine-tune; instruction models often share cross-model transition and framing habits |

Bloomberry marks frames like "at its core" and "when it comes to" as elevated across models, while some hooks are model-tilted. Pangram Labs has published work on distinguishing LLM sources from one another — styles are separable in aggregate, not by one phrase.

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
