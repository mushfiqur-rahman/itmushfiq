# Service-page conversion and AI discovery plan

Audit date: 30 October 2026

## Verdict

**The seven service pages partly meet buyer expectations, but they are not yet strong decision-making pages.** They communicate problems and benefits, contain readable text, and offer contact links. They do not give enough service-specific proof, commercial clarity, delivery boundaries, or detail about the next step. Several absolute promises weaken credibility.

The recommended positioning is: **Business email specialists for Microsoft 365 and Google Workspace, with ongoing IT support and practical automation.** Migration and deliverability should lead acquisition; platform management and remote support provide the ongoing relationship. Automation is a related offer with its own buyer needs.

This is a qualitative marketing assessment, not a measured conversion-rate or AI-ranking result. Buyer questions below are hypotheses based on the service and purchasing risk; validate them with real enquiry records and customer interviews.

## What was inspected

Visited all seven production service URLs in a browser, reviewed visible page content and local source including FAQs, and extracted live titles, meta descriptions, canonical tags, and JSON-LD. The production pages inspected were:

- [Email migration](https://itsupportbee.com/services/email-migration/)
- [Email deliverability](https://itsupportbee.com/services/email-deliverability/)
- [Google Workspace management](https://itsupportbee.com/services/workspace-management/)
- [Microsoft 365 management](https://itsupportbee.com/services/microsoft-365-management/)
- [Email marketing](https://itsupportbee.com/services/email-marketing/)
- [Remote IT support](https://itsupportbee.com/services/remote-it-support/)
- [Business automation](https://itsupportbee.com/services/business-automation/)

Production still has the old generic meta description on all seven pages, no canonical link, and only WebSite and Organization JSON-LD. Service and FAQ entities were absent from the live DOM. Local changes from the previous task fix the description, canonical, and head-slot omissions; they have not appeared in production. Do not treat those completed local changes as missing implementation work.

No analytics account, sales pipeline, customer interviews, or search-indexing reports were reviewed. No forms were submitted. This audit does not establish mobile usability, performance scores, actual service availability, or recommendations by any AI assistant. Page rewrites and schema changes described below are proposals, not changes implemented in this audit.

## What a client needs before contacting you

| Buyer question | Current coverage | Required improvement | Why it matters |
| --- | --- | --- | --- |
| Can you solve my exact problem? | Partial: service topics are clear, but introductions can be broad or technical. | Name the symptom, platform, and suitable customer in the first paragraph. | Helps a visitor recognize a relevant provider immediately. |
| What exactly am I buying? | Partial: capability lists are present. | List deliverables, prerequisites, exclusions, and one-time versus ongoing scope. | Makes the offer comparable and reduces surprises. |
| Have you done work like mine? | Weak on the service pages. | Add relevant, attributable reviews and linked case studies. | Provides reasons to trust the claims. |
| What might it cost and how long will it take? | Weak. | Publish verified ranges if available; otherwise explain quote inputs, dependencies, and scheduling. | Lets a buyer judge feasibility before investing in a conversation. |
| What could go wrong, and how is it managed? | Risks are described, but outcomes are overstated. | Explain checks, limitations, approvals, recovery planning, and responsibilities. | Shows professional judgment and reduces purchasing anxiety. |
| What happens after I click? | Contact links exist, but audit scope and booking expectations are unclear. | Explain whether this starts an enquiry, opens a draft, requests an assessment, or books an appointment. | Aligns the promise with the actual interaction. |

## 1. Email migration — highest priority

Source: [email-migration.astro](../src/pages/services/email-migration.astro)

**Buyer intent:** “Move our company email without losing messages or interrupting work.” The buyer may be a business owner, operations manager, or internal administrator. Typical research includes provider compatibility, mailbox count, what transfers, downtime, price, and aftercare.

**What works:** The page names real scenarios: Exchange to Workspace, cPanel to Microsoft 365, tenant consolidation, and GoDaddy defederation. “Plan Your Migration” is relevant.

**Where expectations are not met:** “Flawless,” “Zero Data Loss,” a universal Friday-to-Monday outcome, and a claim that standard agencies cause 12–48 hours of downtime substitute promises for evidence. Scope and exclusions are not clear. The case study is not used near the decision point.

**Proposed opening:**

> Business email migration for Microsoft 365 and Google Workspace.
>
> Moving providers or combining company accounts? We assess your current setup, plan the transfer of supported data, and coordinate the email cutover around your team. Scope, timing, and validation are agreed before the move.

**Plan:**

1. Add a source-to-destination matrix containing only supported combinations. Separate tenant defederation from mailbox migration.
2. Add “What moves?” covering mail, folders/labels, contacts, calendars, shared resources, and explicit platform/tool limitations. Explain separately whether files, Teams, or SharePoint are included.
3. Replace the competitor table with “Your concern / Our process / What we confirm first.” Include pilot checks, routing, cutover validation, and an agreed recovery approach where actually offered.
4. Link the existing 23-hour migration case study and a matching customer review. Identify that duration as one project's result, not the default service promise.
5. Explain cost inputs: users, data volume, platforms, tool licenses, complexity, and aftercare. Separate third-party costs from service fees.
6. Explain handover and post-cutover support duration after the business confirms them.

**Primary CTA:** “Request a migration plan.” **Secondary:** “Read a migration case study.” Enquiry inputs: current provider, destination, users, approximate mailbox sizes, timing.

**Questions to answer:** Can we keep our domain? What will not transfer? Do staff need to reconnect Outlook or phones? What happens to mail during cutover? Who owns the tenant afterward? What determines the price?

**Expected benefit:** Better qualification and less uncertainty for a high-risk purchase. A concrete compatibility table and attributable project evidence also make the page more useful to an assistant answering a specific migration question.

## 2. Email deliverability — highest priority

Source: [email-deliverability.astro](../src/pages/services/email-deliverability.astro)

**Buyer intent:** “My emails are going to spam or being rejected; find the cause and help fix it.” This can mean everyday business email, CRM/transactional mail, or marketing campaigns. These are different diagnostic situations.

**What works:** The page names SPF, DKIM, DMARC, reputation, and monitoring. It recognizes a problem buyers can already see.

**Where expectations are not met:** “Hit the Inbox Every Time,” “99%+” placement, and instant provider trust are unsupported outcomes. Cold outreach dominates a page that should also reassure businesses sending invoices, proposals, and customer replies. The “free audit” has no defined scope.

**Proposed headline:** “Business emails going to spam? Find the cause.”

**Plan:**

1. Introduce three entry points: business email problems, application/CRM sending, and marketing deliverability. Explain which you support.
2. Define the diagnostic deliverable: sender inventory, authentication/alignment review, bounce/header evidence, prioritized findings, and remediation options. Confirm this scope before advertising it.
3. State that authentication is one factor and inbox placement cannot be guaranteed. Separate a configuration fix from reputation recovery, which may take ongoing work.
4. Replace universal enforcement claims with a staged DMARC process that checks legitimate senders before tightening policy.
5. Add an anonymized example: symptom, evidence, cause, changes, and observed result, without exposing customer messages.
6. If an audit is free, say what is checked, what the customer receives, and whether implementation is separately quoted. Otherwise use “Request a deliverability review.”

**Primary CTA:** “Request an email delivery review.” Inputs: domain, sending platform, affected recipients, whether messages bounce or go to spam, and when it began. Request sensitive diagnostic material through an agreed secure method later.

**Questions to answer:** Can you investigate Microsoft 365, Gmail, or CRM mail? Will DNS changes affect existing senders? Do you fix the issue or only report it? How is progress measured? Can you guarantee inbox placement?

**Expected benefit:** Matches urgent problem-solving intent and makes a smaller first engagement understandable. Evidence and qualified explanations are more defensible citation material than absolute promises.

## 3. Google Workspace management — high priority

Source: [workspace-management.astro](../src/pages/services/workspace-management.astro)

**Buyer intent:** “We need someone to manage Gmail, employees, shared files, and security.” Buyers need to distinguish one-time cleanup from an ongoing administrator.

**What works:** User lifecycle, Drive organization, and helpdesk coverage are relevant. Platform naming is explicit.

**Where expectations are not met:** “Enterprise-grade” leads while everyday tasks, coverage, ownership, and pricing remain unclear. The unsubstantiated 20% usage statistic and absolute licensing/security statements distract from the offer.

**Proposed headline:** “Google Workspace administration for your growing team.”

**Plan:**

1. Separate setup/cleanup projects from ongoing management. Describe what each engagement produces.
2. Show common requests: new employee account, departed employee access, aliases/groups, shared files, Gmail troubleshooting, and license review.
3. Explain approval and access: customer ownership, administrator roles, changes requiring permission, documentation, and handover.
4. State license/edition dependencies for advanced security and retention. Review offboarding and deletion advice before publishing.
5. Add an example onboarding/offboarding checklist and a relevant Workspace review.
6. Publish agreed support hours, request channels, response targets, billing basis, and exclusions.

**Primary CTA:** “Discuss Google Workspace support.” **Secondary:** “See what management includes.”

**Questions to answer:** Can you take over our existing setup? Will we retain admin control? Is migration included? What happens to former staff email/files? Are subscriptions included? Can you work alongside our internal IT person?

**Expected benefit:** Converts a technical capability page into an understandable ongoing service and gives assistants clearer criteria for matching teams to the offer.

## 4. Microsoft 365 management — high priority

Source: [microsoft-365-management.astro](../src/pages/services/microsoft-365-management.astro)

**Buyer intent:** “Manage our Microsoft 365 email and staff accounts, and secure our devices.” Some need Outlook/Exchange help; others specifically need Intune and Entra ID.

**What works:** Named Microsoft technologies establish specialization. Shared mailbox and licensing work is already mentioned, but appears late.

**Where expectations are not met:** Security dominates the page. Email administration is less visible than it should be for the business's positioning. Device lock/wipe claims lack prerequisites and limits.

**Proposed headline:** “Microsoft 365 email, account, and device management.”

**Plan:**

1. Bring supported email/account work above the advanced device section: shared mailboxes, access, licensing, onboarding, and offboarding. Confirm the scope of Outlook and mail-flow troubleshooting.
2. Divide services into email and administration, identity/security, and device management. Let buyers identify what they need.
3. Add prerequisites for Intune, Autopilot, Conditional Access, and supported devices; explain licensing separately from management fees.
4. Describe policy planning and testing rather than promising immediate or complete protection.
5. Add a small implementation example and relevant evidence; do not substitute training certificates for project outcomes.
6. Link migration and GoDaddy questions to the migration page to avoid confusing services.

**Primary CTA:** “Discuss Microsoft 365 support.” **Secondary:** “Review security and device options.”

**Questions to answer:** Can you manage our existing tenant? Do you support shared mailboxes? Which licenses do we need? Can you work with our existing devices? What is included monthly? What access do you need?

**Expected benefit:** Broadens relevance to everyday email buyers while retaining a clearly defined advanced-security offer.

## 5. Email marketing automation — second phase

Source: [email-marketing.astro](../src/pages/services/email-marketing.astro)

**Buyer intent:** “Set up customer follow-ups and email journeys that support sales.” Buyers need to know whether this includes copywriting, templates, strategy, integration, and ongoing campaign management.

**What works:** Welcome sequences, segmentation, and cart reminders are understandable use cases.

**Where expectations are not met:** The page mixes strategy and technical setup without specifying deliverables or supported platforms. Revenue and inbox guarantees are too strong; generic percentages lack supporting evidence.

**Proposed headline:** “Email marketing automation for customer follow-ups.”

**Plan:**

1. Confirm whether the actual offer is implementation, copy/creative, campaign management, or a defined combination; make it explicit.
2. List verified supported platforms and integrations. Separate service-business nurture from e-commerce cart recovery.
3. Show one illustrative journey: signup → welcome → relevant follow-up → enquiry/purchase, with unsubscribe and exit conditions. Label it as an example, not a completed client project.
4. Define agreed flows, emails/templates, revisions, testing, handover, and maintenance.
5. Explain list readiness, customer permissions, subscription costs, and measurement. Promise a working, tested system; do not promise revenue.
6. Add a real case study when available, including the measurement period and attribution limitations.

**Primary CTA:** “Plan my email automation.” Inputs: platform, business type, existing list, intended journey, and technical support versus campaign needs.

**Questions to answer:** Do you write the emails? Can you use our current platform? Is ongoing campaign management included? Who owns the workflows? What if our list is small? What results can be measured?

**Expected benefit:** Prevents mismatched enquiries and makes the deliverable easier to compare with marketing agencies and platform freelancers.

## 6. Remote IT support — second phase

Source: [remote-it-support.astro](../src/pages/services/remote-it-support.astro)

**Buyer intent:** Two distinct journeys: “I need help now” and “I need ongoing support for my team.” Availability and coverage are more important than broad productivity claims.

**What works:** Remote help, onboarding, and ongoing support are easy to understand.

**Where expectations are not met:** “Within minutes,” instant restoration, and a flat-rate promise are not accompanied by hours, eligibility, response terms, or included tools. The primary and final CTAs imply different urgency.

**Proposed headline:** “Remote IT support for business email and everyday tech problems.”

**Plan:**

1. Separate “Request help with a current issue” from “Discuss ongoing team support.” Do not imply a staffed emergency queue unless one exists.
2. Publish actual time zones, support hours, channels, and expected first response versus resolution targets.
3. List supported systems and exclusions: physical repair, on-site tasks, specialist applications, and recovery dependencies.
4. Explain remote-session consent, access boundaries, and ending access after a session.
5. State whether monitoring, backup software, restore testing, and security licenses are included or separately scoped.
6. Describe monthly billing/contract terms and project exclusions only after business confirmation.

**Primary CTAs:** “Request remote help” and “Discuss ongoing support,” with distinct destinations or preselected enquiry types.

**Questions to answer:** Are you available in our time zone? Can you support Macs/Windows? Can you help without a contract? What cannot be fixed remotely? What does the monthly plan cover?

**Expected benefit:** Makes urgent enquiries and recurring-service leads easier to route, with fewer disappointed expectations.

## 7. Business automation — second phase

Source: [business-automation.astro](../src/pages/services/business-automation.astro)

**Buyer intent:** “Connect these tools and stop this repetitive task.” Buyers usually think in workflows rather than the term automation.

**What works:** CRM lead routing, onboarding, and document processing are concrete use cases.

**Where expectations are not met:** Supported tools, deliverables, ongoing ownership, failure handling, and usage costs are missing. “100% accurate” and “zero-touch” conceal the review and exception handling many workflows need.

**Proposed headline:** “Connect your business tools and reduce repetitive admin.”

**Plan:**

1. Name supported tools only when verified, with three specific workflow examples.
2. Offer a defined initial workflow review or scoped pilot before suggesting broad transformation.
3. Explain discovery, field mapping, build, test cases, human approvals, launch, documentation, and handover.
4. Describe failures, retries, alerts, rate limits, third-party changes, and maintenance ownership.
5. Where AI extraction/classification is used, explain uncertainty and human review. Do not label deterministic integrations as AI to attract attention.
6. Use a real before/after example with workload and measurement period. Discuss possible savings as estimates until measured.

**Primary CTA:** “Discuss one workflow to automate.” Inputs: apps, trigger, desired output, weekly volume, current effort, exceptions.

**Questions to answer:** Can you connect our existing tools? Who owns the automation accounts? What are ongoing costs? Who handles failures? Does the workflow need AI? Can staff review actions before they run?

**Expected benefit:** Turns a broad promise into a manageable first project and gives assistants specific use cases to match.

## Shared page structure

Use the same decision sequence, with different substance for each service:

1. Specific service/outcome headline, suitable buyer, direct explanation, primary enquiry CTA.
2. Relevant proof: one attributable review and a case-study link where available.
3. Problems and supported scenarios, stated without exaggerating what all customers experience.
4. Included deliverables, exclusions, required access, and prerequisites.
5. Process, timing dependencies, and risk controls.
6. Price/range if approved; otherwise transparent quote inputs and third-party costs.
7. Questions that address buying objections, followed by the same primary CTA and a clear explanation of the next step.

Replace the repeated “inferior alternatives versus us” tables with scope and decision tables. Avoid presenting competitors, DIY setups, or unconfigured systems as uniformly disastrous. Keep sufficient technical depth for administrators, but lead with the business task.

## Schema audit and implementation design

Relevant files: [Schema.astro](../src/components/Schema.astro), [BaseLayout.astro](../src/layouts/BaseLayout.astro), [Footer.astro](../src/components/Footer.astro), [BlogLayout.astro](../src/layouts/BlogLayout.astro), and the seven service routes above.

**Finding 1 — every page is modeled as a WebSite.** The shared component defaults to WebSite and the service pages explicitly pass that type. Use one stable WebSite identity for the site and WebPage for individual pages. Model the actual service separately.

**Finding 2 — service entity identity is disconnected.** Local service scripts use an anonymous LocalBusiness provider while the footer defines an Organization with a stable ID. Reference the existing organization ID consistently. Use LocalBusiness only when it accurately describes verified business/location information.

**Finding 3 — FAQ nesting uses the wrong relationship.** Local scripts place FAQPage under Service.mainEntity. Schema.org defines mainEntity on CreativeWork, such as WebPage, rather than Service. Make the page describe the Service; if retaining FAQ markup, model a distinct FAQPage node for the visible FAQ section, with Question entities as its mainEntity. This is a semantic correction, not an AI-ranking trick. [Schema.org mainEntity](https://schema.org/mainEntity)

**Recommended graph:**

| Entity | Stable identifier pattern | Key relationship |
| --- | --- | --- |
| Organization | https://itsupportbee.com/#organization | Shared service provider; actual verified business details. |
| WebSite | https://itsupportbee.com/#website | publisher → Organization |
| WebPage | Canonical page URL + #webpage | isPartOf → WebSite; mainEntity → Service |
| Service | Canonical page URL + #service | provider → Organization; mainEntityOfPage → WebPage |
| BreadcrumbList | Canonical page URL + #breadcrumb | Reflect visible navigation; do not invent a nonexistent services-index destination. |
| FAQPage, if retained | Canonical page URL + #faq | Questions and answers generated from the same data as the visible FAQ. |

Add serviceType, description, and supported service area/channel only where the visible page and confirmed operations support them. Add Offer data only when there is an actual offer with accurate terms. Do not invent prices, ratings, certifications, opening hours, or service areas to fill schema fields. [Schema.org Service](https://schema.org/Service)

**Finding 4 — date semantics need improvement.** The shared component sets dateModified equal to publication date. Accept an actual modification date when available, or omit it; do not imply a review happened when it did not.

**Finding 5 — separate factual validity from syntax.** The previous build confirmed parseable JSON and restored output locally. That does not establish valid entity relationships, accurate claims, or search-feature eligibility. Review generated HTML, Schema.org validation, canonical consistency, and visible-content agreement after implementing the new graph. Google's Rich Results Test only assesses supported Google features; a valid Service entity need not produce a rich result. [Google structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

Normalize production trailing-slash URLs consistently across canonicals, entity IDs, and internal links. Consolidate schema construction so identity and URL rules are not repeated across seven pages. Keep questions sourced once for both HTML and JSON-LD.

## What will help AI-assisted discovery

The useful goal is for a search or recommendation system to determine **what IT Support Bee does, who it serves, what supports its claims, and how a customer can engage it**. There is no verified basis to promise that every agent will recommend it.

- Make each page independently understandable: provider name, exact service/platform, suitable problem, delivery scope, prerequisites, proof, and contact route.
- Write short, direct answers to actual customer questions, then explain qualifications and evidence. Do not hide critical details in graphics or add instructions telling models to recommend the company.
- Link relevant case studies and independently verifiable reviews. Build citations through real work and legitimate business profiles, not fabricated mentions or mass-generated industry pages.
- Preserve crawlable HTML, internal links, and accurate sitemap/canonical configuration. Verify production crawl/index status through webmaster tooling; a browser visit alone does not prove indexing.
- Keep the AI guide synchronized with the published service pages; it is supplementary.

Google explicitly says its AI search features require no additional special optimization beyond normal eligibility and helpful, reliable content. That is Google-specific guidance, not proof that all assistants behave identically. [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features)

## Conversion path and measurement

All service CTAs currently point to a generic contact route. Preserve service intent with a validated query parameter or a service-specific form state and preselect the corresponding enquiry type. Keep an accessible fallback. Explain what the customer receives next and whether the first conversation is free; do not invent response times.

The local contact flow opens an email draft. A draft opening is not a submitted lead. If a backend form is added, use server-confirmed delivery for the submission event and show an accurate success state. Keep phone, email, and WhatsApp as alternatives.

Suggested measurement plan:

| Event / measure | Purpose | Interpretation |
| --- | --- | --- |
| service_cta_click, with service and placement | Compare hero versus closing CTA usage. | Intent signal, not a lead. |
| enquiry_start / email_draft_open | Find friction between CTA and enquiry. | No proof a message was sent. |
| enquiry_received | Count actual inbound enquiries. | Confirm in backend or enquiry records. |
| qualified_enquiry | Separate suitable prospects from irrelevant requests. | Use agreed service fit, need, and feasibility criteria. |
| proposal_sent and project_won | Measure commercial usefulness. | Link to service and source when known. |
| qualified enquiries / service landing sessions | Assess page-level conversion. | Interpret cautiously for small samples and attribution gaps. |

Do not send names, email addresses, domains entered by customers, or message content to analytics. Use service/placement categories. Establish a baseline before setting targets. Start with migration and deliverability; compare equivalent periods and traffic mix. An increase in clicks alone is not proof of better conversion.

For AI discovery, record a fixed set of buyer questions, date, service/provider cited, linked URL, and factual accuracy across selected assistants. Combine this with identifiable referrals and qualified leads; many referrals are unattributed and recommendation samples vary.

## Execution order and completion criteria

| Priority | Work | Completion criteria | Dependency |
| --- | --- | --- | --- |
| P0 | Review accuracy of promises on all seven pages. | Remove universal inbox/downtime/security/revenue claims; substantiate every numeric claim or omit it. | Technical review and real evidence. |
| P0 | Prepare the existing local metadata changes for deployment. | All seven live pages show unique descriptions, correct canonicals, and intended structured data after deployment. | Normal deployment process; this audit does not publish. |
| P1 | Rewrite migration and deliverability first. | Each has specific scope, limitations, proof, quote inputs, FAQs, and an intent-preserving CTA. | Confirm scope and audit offer. |
| P1 | Refactor schema relationships. | Stable connected entities; no Service.mainEntity misuse; rendered content matches claims. | Agreed content and canonical rules. |
| P1 | Improve Google Workspace and Microsoft 365 pages. | Ongoing service terms, license dependencies, daily tasks, and ownership are clear. | Confirm support operations. |
| P2 | Improve remote support, email marketing, and automation. | Separate buyer journeys, specific deliverables, costs/dependencies, and ownership. | Confirm tools, coverage, and boundaries. |
| P2 | Add service-context enquiry routing and measurement. | No lost service selection; distinguish draft opening from received lead; event checks pass. | Contact-flow decision. |
| P3 | Expand proof and supporting articles. | Real project evidence and linked answers to recurring sales questions. | Customer permission and documented results. |

Before writing final offers, obtain a short business-facts sheet: supported platforms, actual deliverables/exclusions, hours/time zones, first-response policy, pricing model, paid/free audit scope, aftercare, subscriptions, account ownership, and permission to use relevant reviews/results. Work on structure and factual cleanup can proceed while those details are gathered.

**Recommended first release:** migration and deliverability rewrites, accurate shared metadata/schema, relevant proof near CTAs, and clear enquiry routing. This aligns the website with the business's strongest stated specialization and the most concrete customer problems.
