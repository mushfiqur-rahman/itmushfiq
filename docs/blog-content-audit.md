# Blog content and presentation audit

Reviewed 30 October 2026. Scope: both current Markdown posts, article layout, blog index, homepage article cards, content schema, and routing. This is an editorial/source review, not a search-ranking, backlink, traffic, or AI recommendation measurement.

## Assessment

The blog's strongest material is specific project experience. The migration article diluted that value with guarantees and an incomplete technical recipe. The LMS article has useful errors, resolutions, and operational checks, but its length makes the main takeaway harder to find. Both benefit from direct summaries, explicit limits, and a relevant next step.

Google recommends helpful, reliable content for people; its AI-search guidance does not prescribe a special additional optimization scheme. Treat SEO/GEO as clarity, technical accessibility, and evidence rather than agent-directed promotional text. [People-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features).

## Improvements applied

| Area | Finding | Change |
| --- | --- | --- |
| [Migration case study](../src/data/blog/exchange-to-workspace.md) | Guaranteed zero downtime, conflicting routing/cutover sequence, copyable partial DNS examples, broad quarantine advice, and repeated images described as different screenshots. | Reframed as a bounded project account; clarified the reported 23-hour sync; removed unsafe generic recipes and duplicate images; separated observed work from recommended validation; added direct questions, official references, service links, and a scoped CTA. |
| [LMS case study](../src/data/blog/lms-docker-vps-deployment-case-study.md) | Long technical narrative with no quick scope/result summary; startup checks could be overread as full production readiness. | Added an at-a-glance summary and verification limits, Docker references, and a relevant enquiry path. Preserved supplied project facts and existing operational detail. |
| [Article layout](../src/layouts/BlogLayout.astro) | Contents unavailable on mobile; dates had no update support; author not linked; article identity incomplete. | Visible mobile contents, linked author, published/updated dates, calculated reading estimate, canonical article identity, language/category, and publication/modification metadata. Applied the shared background. |
| [Shared layout](../src/layouts/BaseLayout.astro) | Article pages emitted a generic WebSite entity alongside BlogPosting and used website Open Graph type. | Added an opt-out for the generic schema and selected article Open Graph type for the article template. BlogPosting remains the single article entity. |
| [Blog index](../src/pages/blog/index.astro) and [homepage cards](../src/components/RecentArticles.astro) | Reading times were arbitrary and inconsistent. | Both now use the same [reading-time estimate](../src/utils/readingTime.ts), based on article content. |
| [Content schema](../src/content.config.ts) | No optional modification date. | Added updatedDate; both substantively edited articles now record the edit date. |

## Remaining editorial work

1. **Strengthen case-study evidence.** The public migration account lacks mailbox count, data volume, tool identification, and detailed validation records. Add them only from approved project evidence; do not infer a zero-loss or zero-interruption outcome. The LMS article's original deployment observations were preserved, not independently re-executed.
2. **Create an email-focused sequence.** Prioritize business email spam diagnosis, what transfers in a Microsoft-to-Google migration, migration quote inputs, GoDaddy defederation versus migration, and employee offboarding. Use real sales questions to refine priorities; no search-volume data was collected.
3. **Link supporting articles and services deliberately.** Keep informational answers useful before the CTA. Avoid duplicating service-page sales copy across articles or inserting unrelated offers.
4. **Verify assets.** Existing featured images were retained; their provenance and accuracy as technical illustrations still need confirmation. New screenshots should show the actual described screen, be redacted, and have descriptive alt text.
5. **Keep technical advice current.** Verify platform/edition prerequisites and commands before publishing new how-to content. References support general technical claims, not private project outcomes.
6. **Measure business value.** Track qualified enquiries and relevant article-to-service clicks, not only pageviews. Treat sampled AI citations as variable observations, not ranking guarantees.

## Reusable writing workflow

Use [the article-generation prompt](./article-generation-prompt.md). It includes a brief, evidence requirements, intent-specific structure, compatible frontmatter, internal linking, CTA guidance, and a publication checklist. Missing business facts or assets must remain explicit editorial blockers rather than becoming invented article content.

No content or deployment was published by this audit. Validate the generated site before deployment and check live indexing separately afterward.
