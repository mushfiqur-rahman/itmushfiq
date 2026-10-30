---
title: "Exchange Online to Google Workspace: A 23-Hour Migration Case Study"
description: "Lessons from an Exchange Online to Google Workspace migration: mailbox discovery, routing, synchronization, DNS checks, and post-migration validation."
pubDate: "October 10, 2026"
updatedDate: "2026-10-30"
author: "Mushfiqur Rahman"
category: "Cloud Migration"
image: "/blog/exchange-to-workspace.png"
---

Moving business email from Exchange Online to Google Workspace requires more than copying messages. The work includes identifying accounts and sending applications, planning mail routing, transferring supported data, and checking that people can use the new system.

This case study describes a project in which I used mailbox discovery, dual delivery, data synchronization, and authentication changes. The initial data synchronization took **23 hours**. That is a result from this project, not a standard migration timeline or a guarantee of uninterrupted service.

## What this case study covers

- Source: Microsoft Exchange Online.
- Destination: Google Workspace.
- Main concerns: continued mail delivery, synchronization, and unwanted messages reaching secondary alias domains.
- Reported milestone: a 23-hour initial synchronization, followed by additional synchronization and cutover work.
- Scope limits: mailbox count, total data volume, migration tool, and detailed validation records are not included in this public account. The duration alone is not enough to estimate another project.

For business owners, the key question is whether the migration plan covers the way the team actually uses email. For administrators, the important work is mapping dependencies and verifying the result of each change.

## 1. Identify mailboxes and sending applications

Before changing DNS or routing, I reviewed mailbox sizes and the existing environment. Data volume helps with capacity and scheduling, but it is only one part of the assessment.

A migration inventory should also identify aliases, groups, shared resources, and applications that send mail on the company's behalf. Website forms, CRM systems, scanners, and billing tools can depend on the old provider even when staff use only Outlook.

For another project, confirm which data the chosen migration method supports. Messages, contacts, calendars, permissions, and client settings should not be assumed to transfer identically between platforms.

## 2. Plan routing during the transition

I used dual delivery as part of the transition. Google documents dual delivery as a configuration that delivers incoming mail to Gmail and a separate mail system. It needs a defined primary server and routing configuration; it is not a universal guarantee against interruption. See [Google's dual-delivery guidance](https://knowledge.workspace.google.com/admin/gmail/advanced/deliver-email-to-multiple-inboxes-with-dual-delivery).

The practical lesson is to document the intended mail path before changing it. Test delivery to representative users and aliases, check for loops and duplicates, and agree when the old route can be removed.

This account describes the approach rather than a complete tenant-specific runbook. The precise sequence of routing and MX changes must be designed for the source, destination, and migration tool.

## 3. Monitor synchronization and reconcile remaining data

The initial server-to-server synchronization took 23 hours. During that period, I monitored progress and potential throttling. An additional synchronization was used to capture messages arriving after the initial transfer.

A progress percentage alone is not a completion test. For a new migration, inspect failures and exclusions, resolve recoverable errors, and compare representative source and destination data. Keep the source available for the agreed validation period rather than decommissioning it solely because the tool reports completion.

Timing depends on mailbox volume, message count, tool capabilities, provider limits, and the amount of work needed to resolve exceptions.

## 4. Review unwanted mail to secondary domains

The project also involved unwanted traffic addressed to secondary alias domains. I used Google Workspace compliance rules and quarantine as part of the response.

A recipient-domain match identifies mail addressed to that domain; it does not prove that the message is spam. A rule matching an entire domain can also hold legitimate customer messages. Any such rule needs sample-message testing, narrow conditions where possible, a review owner, and a process for releasing legitimate mail.

Quarantine can give an administrator an opportunity to review messages, but it should not be described as a guarantee that mail cannot be missed or lost.

## 5. Check DNS and sender authentication

The migration included DNS and authentication changes for the new sending environment. For any business, those changes must account for every legitimate sender, including third-party applications.

Use the destination provider's current setup instructions and tenant-generated values rather than copying another company's records. Confirm SPF and DKIM configuration and review DMARC reporting before deciding whether to tighten enforcement. Google's [DMARC setup guidance](https://knowledge.workspace.google.com/admin/security/set-up-dmarc) explains the prerequisites and rollout process.

Authentication and successful message acceptance are useful checks, but neither proves that every recipient will place messages in the inbox.

## What to verify before signing off a migration

The following is a recommended checklist for a future migration, not a claim that each test has published evidence in this case study:

| Check | What it helps establish |
| --- | --- |
| Send and receive mail with external test accounts | Basic mail flow is working in both directions. |
| Check aliases, groups, and shared addresses | Important business addresses still reach the intended people. |
| Review migration errors and sample transferred data | Exceptions and missing items can be investigated. |
| Test calendars and contacts where included | Supported non-mail data behaves as expected. |
| Test CRM, forms, scanners, and billing senders | Business applications still send through the intended route. |
| Review authentication results in received messages | Messages from each sender use the expected authentication. |
| Check staff access and client configuration | Users can sign in and work with the destination system. |
| Agree aftercare and source retirement | There is a clear owner for issues after cutover. |

## Migration questions

### How long does an Exchange Online to Google Workspace migration take?

There is no single duration. The initial synchronization in this project took 23 hours, but discovery, preparation, validation, user changes, and aftercare are separate work. A useful estimate needs the mailbox count, data volume, supported data types, and migration method.

### Can dual delivery prevent all email downtime?

No. It can support a transition by delivering incoming messages to two systems, but configuration errors and other dependencies still need to be managed. A migration plan should include testing, monitoring, and an agreed response if something fails.

### Will calendars, contacts, and permissions move with email?

That depends on the migration method and the source and destination features. Confirm each data type and any limitations before agreeing the project scope. Do not assume mailbox transfer includes files, all permissions, or every Outlook setting.

### Should all mail to a secondary domain be quarantined?

Only if that behavior is intentional and appropriate for the business. A domain-wide rule can also hold legitimate messages. Review the actual problem and test proposed conditions before applying them broadly.

## Planning a similar email migration?

IT Support Bee provides [business email migration services](/services/email-migration), with related [Google Workspace administration](/services/workspace-management) and [email deliverability support](/services/email-deliverability).

[Discuss your migration](/contact) with your current provider, target platform, approximate user count and data size, and preferred timing. Those details make it possible to scope the work around your team's needs.
