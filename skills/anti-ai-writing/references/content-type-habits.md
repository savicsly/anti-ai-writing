# Content-Type Habits: Email, Social, Marketing, Academic & More

Genre-specific AI tells and human replacements. Consult the section that matches the draft you're editing. For UI/PR/docs/RFCs, see [project-writing.md](project-writing.md).

---

## Emails

AI emails are fluent and grammatically clean but often sound like "essays in email form" (Reply.io). They run polite, formal, and interchangeable.

### Greetings & openers

| AI habit | Human equivalent |
|----------|------------------|
| I hope this email finds you well | (skip, or "Hope you're well" once you know them) |
| I trust you're doing well | (skip) |
| I wanted to reach out… | I'm writing because… / Quick question about… |
| I am writing to follow up regarding… | Following up on… |
| Please be advised that… | (state the news) |

### Politeness formulas

- Please don't hesitate to reach out
- Kindly let me know
- Thank you for your time and consideration
- It would be greatly appreciated if…

**Human:** "Can you send thoughts by Thursday?" / "Happy to jump on a call."

### Closings

| AI habit | Human equivalent |
|----------|------------------|
| In conclusion / To sum up | (don't summarize a short email) |
| Please let me know if you have any questions | Happy to clarify / (omit) |
| Looking forward to your response | Looking forward to hearing from you / Thanks |
| Best regards / Warm regards stacks | Match the relationship |

### By style

**HR**
- AI: "We are pleased to inform you that your application…"
- Human: "We'd like to offer you the role…"

**Customer support**
- AI: "I completely understand your frustration. Please accept our sincere apologies…"
- Human: "Sorry about the delay — here's what happened and what we're doing."

**Sales / outreach**
- AI: "I came across your profile and was impressed by… I'd love to explore synergies…"
- Human: Name one specific, real detail; one clear ask; short.

**Follow-up**
- AI: "Just circling back on my previous email regarding…"
- Human: "Checking in on the proposal — do you still want to move this week?"

### Structural tells

- Three balanced paragraphs in a short note
- Over-signposted transitions (*moreover*, *furthermore*)
- Inflated vocab (*plethora*, *paradigm*, *leverage*)
- No personal context the recipient would recognize
- Even sentence rhythm

**AI:** "I am writing to follow up on our previous discussion regarding the project timeline. It is worth noting that the team's availability is crucial."

**Human:** "Just checking in about our timeline. We'll need everyone's input before we set dates."

---

## LinkedIn posts

### Storytelling formula

1. Hook vulnerability or win
2. Story in broad strokes
3. Exactly three lessons
4. Inspirational closer + CTA ("Agree? Comment below.")

### Stock lines

- Today I learned…
- Here's what I discovered…
- I wish someone had told me…
- Nobody talks about…
- The truth is…
- Here's why…

### Other habits

- Fake vulnerability (trauma → tidy lesson in 4 lines)
- Excessive whitespace (one sentence per line, endlessly)
- Emoji overload
- Engagement bait ("Comment 'YES' if…")
- Generic coach voice with no names, dates, or stakes

**Human fix:** write like an experienced person sharing a real insight — specific, slightly imperfect, no lesson list unless the lessons are actually distinct.

---

## YouTube scripts

### Hook templates

- "Hey guys, welcome back…"
- "In this video I'll show you…"
- "Stay until the end because…"
- "Have you ever…?"
- "Let's be honest…" / "Here's the thing…"

### Retention tricks (overused)

- Preview of later payoff every 30 seconds
- "But first…" loops
- Artificial curiosity gaps without payoff

### Mid-roll transitions

- "Next up…"
- "Let's dive into…"
- "Moving on to point two…"

### CTA / outro formulas

- Like and subscribe reminders stacked
- "Comment below what you want next"
- "Thanks for watching, see you in the next one"

### AI narration style

Enthusiastic but generic ("That's amazing!"), even pacing, numbered points with little storytelling.

**Human fix:** cold open; speak to one viewer; vary energy; cut ritual CTAs to one honest ask.

---

## Blog writing

### SEO patterns

- Keyword in every H2
- "What is X?" section nobody needs
- Artificial FAQ glued on for rich results
- Synonym stuffing (*utilize* / *leverage* / *employ*)

### Heading structure

Perfectly balanced sections of equal length; "Conclusion" heading by default.

### Bullet usage

Tips lists that restate prose; "Key takeaways" after every H2.

### Generic examples

"Imagine a company that…" without industry, constraint, or number.

**Human fix:** prioritize useful information; one vivid example beats three abstract ones; skip FAQs that invent questions.

---

## Website / landing pages

Marketing and product sites often read as AI because every section uses the same intensity and interchangeable claims.

### Hero & above-the-fold

| AI habit | Human equivalent |
|----------|------------------|
| Welcome to the future of… | (state the concrete outcome) |
| The all-in-one platform for… | Name what it does in plain terms |
| Seamless / effortless / powerful | Specific capability or result |
| Transform / unlock / elevate your… | Say the actual change |
| Built for modern teams | Built for [role] who [specific job] |

### Feature grids

- Three equal cards, each with an abstract noun + vague benefit
- Icons paired with words that fit any SaaS tool (*collaborate*, *scale*, *insights*)
- "Everything you need to…" with no boundary on what "everything" means

**Human fix:** each feature line should fail the swap test — if you can paste it onto a competitor's site unchanged, rewrite it.

### CTAs

| AI habit | Human equivalent |
|----------|------------------|
| Get started / Learn more / Book a demo stacked | One primary CTA; secondary only if needed |
| Start your journey | Start free / Try [product] / See pricing |
| Join thousands of happy customers | Join [named customers] / [number] teams using… |

### Social proof & about

- "Trusted by teams worldwide" with no logos or names
- Mission paragraphs full of *empower*, *reimagine*, *better way*
- Founder story that could belong to any startup

**Human fix:** name real customers, constraints, or decisions. About copy should sound like people who built something specific.

### FAQ & pricing blurbs

- FAQs that restate the hero in question form
- Pricing tiers described with the same three adjectives at different prices
- "Perfect for growing teams" on every plan

**Human fix:** answer real objections; differentiate plans by limit, audience, or capability — not vibe.

### In-codebase review

When copy lives in pages, components, MDX, or locale files:

- Edit visible strings only; keep JSX, props, keys, and routes intact
- Keep tone consistent across hero → features → CTA on the same page
- Prefer in-file rewrites over a detached "suggested copy" doc unless asked

**AI:** "Unlock seamless collaboration and elevate your workflow with our all-in-one platform."

**Human:** "Share a link, leave comments, and ship the doc without exporting five versions."

---

## Conversation / chatbot habits

### Assistant disclaimers

- "As an AI language model…" (rarer now, still a fingerprint when present)
- "I don't have personal experiences, but…"
- "While I can't provide financial advice…" stacked before every answer

### Over-explaining

- Restating the user's question
- Offering five options when one was requested
- "Great question!" / "Absolutely!" openers
- Long preambles before the answer

### Support-reply wording

- "I'd be happy to help you with that!"
- "I understand how important this is for you."
- "Here are a few steps you can take:" + generic list

### Customer-service phrases

- "Please don't hesitate…"
- "We value your patience…"
- Empathy templates without a fix

**Human fix:** answer first; explain second; match the user's brevity; skip praise of the question.

---

## Technical writing

Docs, runbooks, API references, how-tos. Accuracy stays; brochure tone goes.

### AI habits

- "Simply" / "just" / "easily" before steps that aren't simple
- Restating the endpoint or function name in a full sentence
- "It is important to note that" before every caveat
- Conceptual preambles before the first actionable step
- Parallel feature blurbs that could sit on a marketing page

### Human fix

- Lead with the task or the contract (what this API does / requires)
- Keep required terminology; cut ornamental synonyms
- Put warnings next to the dangerous step, not in a throat-clearing intro
- Prefer examples with real shapes over abstract "foo/bar" when the domain has them

**AI:** "In order to leverage the API effectively, users should utilize the authentication endpoint to obtain a token."

**Human:** "POST `/auth/token` with client id and secret. Use the returned bearer token on later requests."

---

## Academic writing

Keep the field's register and citation rules. Cut generated throat-clearing.

### AI habits

| AI habit | Human equivalent |
|----------|------------------|
| This paper aims to explore… | We argue / We test / We show… |
| In recent years, there has been growing interest in… | (start with the gap or claim) |
| A plethora of studies… | Name the studies or the count |
| It is important to note that… | (state the caveat) |
| This study seeks to fill a gap in the literature | Name the specific gap |
| Overall, the findings suggest… | The findings show / We find… |
| Furthermore / Moreover stacks between every claim | Vary or cut transitions |

### Human fix

- Thesis or research question early
- Cite specifics instead of "many researchers argue"
- Uniform academic cadence still reads as generated — vary sentence length
- Preserve passive voice / citation style where the discipline expects it
- Don't "humanize" into casual blog voice unless asked

**AI:** "In recent years, there has been growing interest in the pivotal role of sleep in cognitive performance. This paper aims to explore this landscape."

**Human:** "Sleep restriction of under five hours impairs working memory on n-back tasks; whether naps reverse that within the same day remains unclear."

---

## Social media captions

### AI habits

- POV: …
- Tell me you're X without telling me you're X
- This is your sign to…
- Not me doing/being…
- Rare footage of…
- Manufactured relatability (*Anyone else…?*)
- Emoji as every beat of punctuation
- Hook → vague inspiration → "comment below" with no specific thought

### Human fix

- One observation that belongs to a specific person or moment
- Humor from the actual detail, not a recycled meme shell
- Short because the platform is short — not because you're filling slots

**AI:** "This is your sign to stop scrolling and start building the life you deserve ✨"

**Human:** "Closed the laptop at 6 for once. The Slack badge can wait."

---

## Text messages / DMs

### AI habits

- Full formal sentences and sign-offs in a chat thread
- *Hope you're doing well!* / *Just wanted to reach out*
- Numbered essays in a text
- Over-hedged asks (*I was wondering if maybe you might…*)

### Human fix

- Match how that person actually texts — clipped, casual, real
- Ask or news first; skip the warm-up
- Fragments are fine; polish is suspicious

**AI:** "Hi! I hope you're doing well. I wanted to reach out to see if you might be available to chat sometime this week regarding the project."

**Human:** "Free Thu or Fri to talk through the launch checklist?"

---

## Product descriptions

### AI habits

| AI habit | Human equivalent |
|----------|------------------|
| Experience the ultimate… | (name the product and what it does) |
| Designed to elevate your… | Made for [use] / [material/spec] |
| Say goodbye to [problem] forever | Cuts [problem] by / Handles [case] |
| Unleash the power of… | (concrete capability) |
| Whether you're a beginner or a pro… | For [specific user] who [job] |
| Perfect for any occasion | Name two real occasions or drop it |

### Human fix

- Lead with the detail a buyer compares (size, material, compatibility, limit)
- Cut adjectives that fit every SKU in the category
- Specificity sells; intensity doesn't

**AI:** "Experience the ultimate comfort with our innovative, seamlessly designed chair that elevates your workspace."

**Human:** "Mesh back, adjustable lumbar, rated for all-day desk use. Seat height 16–21 inches."

---

## Press releases

### AI habits

- We are thrilled/excited/proud to announce…
- This marks a significant milestone…
- [Company] is proud to unveil…
- Interchangeable executive quotes (*"This underscores our commitment to innovation"*)
- Boilerplate that could belong to any company in the paragraph

### Human fix

- Lead with the news (what shipped, who it affects, when)
- Quotes: something only that person would say — a number, a customer, a constraint
- Keep emotion out of the lede; facts carry the release

**AI:** "We are thrilled to announce a significant milestone as we proudly unveil our next-generation platform."

**Human:** "Acme launches EU data residency for Enterprise plans, available May 12 in Frankfurt and Dublin."

---

## Cover letters / résumés

### AI habits

| AI habit | Human equivalent |
|----------|------------------|
| I am writing to express my interest in… | (why this role / why you — concrete) |
| Proven track record of… | Shipped X / Grew Y by Z |
| Team player with excellent communication skills | (show via a collaboration example) |
| Results-driven professional… | (delete; show results) |
| Passionate about leveraging my skills… | I want this role because [specific] |
| Responsible for managing… | Owned / Led / Built… |

### Human fix

- Open on fit or a relevant outcome, not a template sentence
- Replace trait claims with evidence
- Sound like someone who did specific things — not a keyword cloud
- Keep the employer's required format; humanize the prose inside it

**AI:** "I am a results-driven professional passionate about leveraging my skills to contribute to your innovative team."

**Human:** "I led the checkout rewrite that cut payment failures 18% last quarter — same problem your posting describes."

---

## Cross-format editing checklist

- [ ] Delete genre templates (email hope-you're-well, LinkedIn three lessons, YouTube welcome-back, website unlock/elevate heroes, press thrilled-to-announce)
- [ ] Add one concrete detail only a real person/context would know
- [ ] Match formality to the relationship and channel
- [ ] Cut stacked CTAs and summary closers
- [ ] Prefer one clear ask over soft hedges

For UI microcopy, commits, PRs, issues, docs, RFCs/ADRs, and review comments, see [project-writing.md](project-writing.md).
