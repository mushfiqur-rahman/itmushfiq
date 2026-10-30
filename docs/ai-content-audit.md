# IT Support Bee: email services and AI discovery content audit

Reviewed: 30 October 2026. Scope: local website source, all seven service pages, homepage components, about and contact pages, blog templates and two articles, shared metadata, privacy/terms, robots and sitemap configuration. This is a source-content audit, not a measurement of live indexing, backlinks, search rankings, or AI recommendations.

## Positioning

Lead with **business email expertise**, supported by cloud administration and remote IT support. A customer should understand the offer without knowing terms such as DMARC or defederation.

Suggested core message: “IT Support Bee helps businesses set up, migrate, troubleshoot, and manage email on Microsoft 365 and Google Workspace.”

Use customer problems as entry points: “Our emails go to spam,” “We need to move our company email,” “We need someone to manage our accounts,” and “We want automated customer follow-ups.” Explain the technical work after identifying the problem. Do not add AI buzzwords to services that do not require AI.

The existing testimonials about Microsoft/Google migrations, DreamHost migration, DNS setup, and email delivery are more relevant evidence than generic claims about growth. Keep quotes accurate and obtain permission and source links where appropriate.

## Changes implemented

| Location | Finding | Change |
| --- | --- | --- |
| [AI service guide](../public/llms.txt) | Promotional instructions to models, broad guarantees, no useful page directory, and disproportionate web-development emphasis. | Replaced with a structured Markdown summary, all seven service links, common buyer questions, company/contact information, and a clearly contextualized migration case study. |
| [Homepage hero](../src/components/Hero.astro) | Ungrammatical headline, generic IT description, and unexplained uptime/ticket/response metrics. | Email-focused headline, problem-led introduction, relevant CTAs, and service descriptions replacing unsupported dashboard metrics. Existing design retained. |
| [Homepage](../src/pages/index.astro) | Title contained “Lonodon”; no specific description. | Business email title and description aligned with the offer. |
| [Service cards](../src/components/Services.astro) | Email migration and deliverability were secondary; email marketing was absent. | Email-first order, Google Workspace named explicitly, seven linked services, and clearer descriptions. |
| [Homepage FAQ](../src/components/FAQ.astro) | Promised zero disruption and implied guaranteed inbox placement. | Seven questions about scope, migration, spam, GoDaddy, ongoing support, pricing inputs, and automation, with qualified answers. |
| [Shared layout](../src/layouts/BaseLayout.astro) | Hard-coded description ignored page descriptions. Service pages supplied a head slot that the layout never rendered. No canonical tag. | Page descriptions, canonical URLs, Open Graph metadata, AI guide link, and a rendered head slot for existing service schema. |
| [Shared schema](../src/components/Schema.astro) and [blog layout](../src/layouts/BlogLayout.astro) | Referenced missing logo/default-image assets; blog title used the older brand and omitted its description. | Removed nonexistent schema image defaults, connected publishers to the organization ID, passed blog metadata, and unified blog branding. |
| [Author data](../src/data/site.ts) | Old personal website/email appeared alongside the business identity. | Preserved the named author; aligned contact details and biography with IT Support Bee. |
| [Footer](../src/components/Footer.astro) | Email marketing and the AI guide were not listed. | Added both links. |
| [Contact](../src/pages/contact.astro) | Service selector did not reflect the full offering; enquiry prompt was generic. | Updated service choices, page metadata, and prompts for provider, user count, problem, destination, and timing. |

## Priority 1: improve accuracy and decision support

These are remaining recommendations, not claims that the full service-page rewrite has been completed. Confirm operational details before publishing prices, response promises, licensing advice, or outcome statistics.

| Page | Evidence or gap | Recommended improvement and buyer question |
| --- | --- | --- |
| [Email migration](../src/pages/services/email-migration.astro) | “Never stop receiving or sending,” guaranteed zero data loss, and identical folder/calendar outcomes are presented as universal. The page also says IMAP destroys folder structure. | Explain supported source/destination pairs, which data migrates, exceptions, pilot testing, cutover risks, validation, and rollback planning. IMAP generally migrates mail and folders, not calendars/contacts; fidelity depends on tools and platforms. Answer: “Can you move our email without losing messages, and what interruptions should we expect?” |
| [Email deliverability](../src/pages/services/email-deliverability.astro) | Authentication is presented as a guarantee of provider trust; a 2024 compliance claim and SORBS reference need updating. The DMARC FAQ implies failure of either SPF or DKIM is enough to fail DMARC. | Explain that DMARC passes when at least one of SPF or DKIM passes with alignment. Audit legitimate senders before moving from monitoring to enforcement. Cover bounce evidence, reputation, engagement, list quality, provider-specific requirements, and limits of delisting assistance. Answer: “Why are my invoices or customer emails going to spam?” |
| [Google Workspace](../src/pages/services/workspace-management.astro) | Unsupported “less than 20%” usage statistic; “Anyone with the link” is equated with Google indexing; free archival/licensing claims are too broad. | Separate public discoverability from link sharing. Explain organizational ownership, transfer/retention options, and edition-dependent Vault, DLP, and Context-Aware Access. Cloud Identity is not a replacement Gmail mailbox. Answer: “What happens to email and files when an employee leaves?” |
| [Microsoft 365](../src/pages/services/microsoft-365-management.astro) | “Instantly” locking/wiping devices and “completely safe” data overstate the outcome. | Explain enrollment, operating-system support, online connectivity, permissions, and license prerequisites. Add a visible paragraph on the exact mailbox and Exchange administration included. Answer: “Can you manage our Microsoft 365 accounts and secure staff devices?” |
| [Email marketing](../src/pages/services/email-marketing.astro) | Guaranteed inbox delivery and a 10–15% recovered-sales claim lack cited evidence. | Distinguish campaign automation from inbox troubleshooting. Describe agreed platforms, consent, unsubscribe handling, segmentation, testing, and reporting. Publish quantified results only with documented baselines. Answer: “Can you set up welcome emails and abandoned-cart follow-ups?” |
| [Remote support](../src/pages/services/remote-it-support.astro) | “Over 95%” remotely fixable and connection “within minutes” need evidence and service boundaries. | State real support hours/time zones, contact channels, included tasks, response targets if contracted, exclusions, and when on-site help is needed. Answer: “Who can support our remote team, and when are they available?” |
| [Business automation](../src/pages/services/business-automation.astro) | “100% accurate,” unlimited-sounding scale, and absolute data protection promises. | Describe supported integrations, permission scopes, retry/error alerts, human review, usage costs, and maintenance ownership. Add one real workflow example with measured before/after time. Answer: “Can you connect our enquiries to our CRM without manual copying?” |

## Priority 2: make expertise easy to evaluate

- **About:** [The about page](../src/pages/about.astro) has a useful named founder and linked credentials. Distinguish training certificates from vendor professional certifications. The long industry list would benefit from two or three evidence-backed examples rather than more sector names. Healthcare training alone does not establish an organization's regulatory compliance. Describe which office locations are operational offices versus service coverage only when verified.
- **Proof:** [Testimonials](../src/components/Testimonials.astro) already contain relevant email work. Feature matching quotes near each service CTA and link to the original review when permission allows. Never convert testimonials into invented aggregate ratings or business-wide performance statistics.
- **Case studies:** [The migration article](../src/data/blog/exchange-to-workspace.md) is the strongest email-related proof asset. Add permitted scope details, source/target platforms, data volume, checks, limitations, and measurable outcomes. Keep “23 hours” explicitly tied to this project. Review technical routing and filtering guidance before presenting it as a reusable procedure. Rename “Answer Engine Optimization (FAQ)” to a reader-facing heading such as “Migration questions.”
- **Blog focus:** [The blog](../src/pages/blog/index.astro) has only one email-focused article alongside [an LMS deployment case study](../src/data/blog/lms-docker-vps-deployment-case-study.md). Build a small, accurate email knowledge hub before expanding into unrelated topics. Compute reading times from content rather than assigning them by list position.
- **Contact conversion:** [The contact page](../src/pages/contact.astro) opens an email draft; it does not submit a lead to a backend. It correctly tells users this. Consider a real form endpoint and delivery monitoring as a separate implementation, with appropriate privacy updates. Add pricing ranges or minimum project sizes only after business confirmation.
- **Navigation:** [The active header](../src/components/HeaderRedesign.astro) obtains service labels from [the route utility](../src/utils/getServices.ts). Prefer explicit customer-facing labels and a deliberate email-first order over title-cased slugs. “Workspace Management” should consistently mean “Google Workspace Management.”
- **Process:** [The process section](../src/components/ProcessTimeline.astro) is generic. Link its discovery, implementation, and support steps to concrete deliverables such as a sender inventory, migration plan, cutover checklist, and handover notes where these are actually provided.
- **Legal and identity:** [Privacy](../src/pages/privacy-policy.astro) and [terms](../src/pages/terms.astro) should remain factual, not keyword targets. Review their descriptions of data collection against the contact flow and analytics actually running. Keep legal business details, public contact details, and organization markup consistent.

## Recommended content briefs

| Priority | Working title / customer query | What the answer should contain | Destination CTA |
| --- | --- | --- | --- |
| 1 | Why are my Google Workspace emails going to spam? | Symptoms, sample-header checks, authentication alignment, sender reputation, safe next steps, limits of any fix. | Email deliverability review |
| 1 | Microsoft 365 to Google Workspace migration: what moves and what does not? | Mail, contacts, calendars, shared resources, platform limitations, preparation, cutover expectations. | Discuss a migration |
| 1 | How much does a business email migration cost? | Mailbox count/size, platforms, tools/licenses, complexity, timing, support; only approved pricing examples. | Request a scoped quote |
| 2 | Moving Microsoft 365 away from GoDaddy: migration or defederation? | Explain the difference, prerequisites, access and licensing, risk management, scenarios. | Review our tenant |
| 2 | SPF, DKIM, and DMARC for businesses using a CRM and email marketing platform | Sender inventory, alignment examples, staged enforcement, reporting, testing every legitimate sender. | Review authentication |
| 2 | Google Workspace vs Microsoft 365 for a growing team | Practical needs, collaboration, licensing, administration, migration costs; dated vendor sources. | Discuss platform fit |
| 3 | Employee offboarding: what happens to business email and files? | Access revocation, transfer, retention, forwarding, license dependencies, responsibilities. | Ongoing administration |

Use a short direct answer first, then scope, process, limitations, a real example, related links, and one relevant CTA. Include author and genuine review dates. Publish an article only when it adds information beyond the service page.

## Discovery and measurement

- [robots.txt](../public/robots.txt) currently allows all crawlers and points to the sitemap. This is useful access configuration, not proof that a crawler has visited or indexed the site. Verify deployed HTTP status, bot protection, and sitemap accessibility separately.
- [llms.txt](../public/llms.txt) is a supplementary plain-text guide. Its adoption varies; it cannot compel an assistant to recommend the business. The actual service pages, reputation, and independently verifiable evidence remain important.
- The restored head slot exposes existing Service/FAQ markup. Validate rendered structured data, ensure answers match visible content, and use a consistent organization identifier. FAQ markup does not guarantee rich results or AI citations.
- After deployment, verify the canonical hostname and any old-domain redirects, submit the sitemap through the site's webmaster accounts, and check indexing for each email service page.
- Establish a baseline for organic visits, qualified enquiries by service, conversions, and identifiable AI referral traffic. Some assistant visits have no usable referrer. Repeat a fixed set of buyer questions across selected assistants and record date, cited URLs, and factual accuracy; treat this as a sample, not a ranking guarantee.
- Review the guide whenever service scope or URLs change. Keep its linked descriptions consistent with the visible pages.

## Suggested sequence

1. Review and publish the implemented homepage, metadata, and AI guide changes after validation.
2. Correct the service-page accuracy issues above, prioritizing migration and deliverability.
3. Expand the migration case study and publish the first three content briefs using verified project facts.
4. Add approved pricing/support boundaries and measure qualified enquiries, not only traffic.
