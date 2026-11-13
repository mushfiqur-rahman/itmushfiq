---
title: "Microsoft 365 Employee Offboarding Checklist for Small Teams"
description: "Block account access, preserve customer mail and OneDrive files, and test the handover from the successor’s account in Microsoft 365."
pubDate: 2026-07-22
author: "Mushfiqur Rahman"
category: "IT Support"
image: "/blog/microsoft-365-employee-offboarding-checklist-field-guide.png"
---

Microsoft 365 offboarding should remove a departing employee's access while preserving business information for an authorized owner. Decide who approves the work, when access must end, and what information the business needs before deleting an account or removing licenses.

This checklist is a planning aid. The exact actions depend on your tenant, licenses, device setup, and company retention requirements.

## Agree the handover and timing

Create one offboarding record with the person's account, departure time, approving manager, responsible administrator, and handover owner. Include shared mailboxes, group ownership, important business files, devices, and applications accessed through company identity.

For a planned departure, identify unfinished work and business contacts ahead of time. For an urgent departure, prioritize access containment and record any preservation decisions that still need approval.

## End account access and review sessions

Microsoft's [guidance for preventing sign-in](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee-step-1) covers password reset, session sign-out, and sign-in blocking. These actions have different effects and can take time to propagate. Do not assume that changing one setting immediately ends every active session.

Use an appropriately privileged administrator account. Check the result and keep the time of each action in the offboarding record. If there is evidence of account compromise, handle that as a separate incident investigation alongside the departure.

## Assign owners for mailbox and business files

Ask the manager what the team needs: continued handling of customer messages, access to specific project records, or a defined handover of business documents. Choose the supported mailbox and file-preservation process for the tenant before deleting accounts or changing licenses.

Avoid sharing the departing employee's password with a replacement. Use authorized access methods that retain accountability. Decide who can access the information, why they need it, and when that access should be reviewed.

A useful handover table includes:

| Resource              | Decision to record                          |
| --------------------- | ------------------------------------------- |
| Customer email        | New responsible person and response process |
| Project documents     | Business owner and required access          |
| Shared resources      | Replacement owner or administrator          |
| External applications | Account owner and removal confirmation      |
| Devices               | Return, recovery, and management action     |

## Review access beyond Microsoft 365

A company account may also be linked to a domain registrar, CRM, website, billing system, or password manager. Some applications use separate credentials even if staff usually start from a Microsoft portal.

Inventory those services and confirm removal with their owners. Review any shared credentials the departing person knew and rotate them through the normal business process. Update recovery contacts and administrative ownership where necessary.

## Work through a departure with two clocks running

Suppose an account manager leaves at 17:00 on Friday. Their access must end then. The replacement starts on Monday, a customer presentation is due on Tuesday, and the only editable copy sits in the departing employee’s OneDrive. Put two times on the ticket: when IT must act on the identity, and when the business needs the handover complete. The second deadline should never quietly extend the first.

### Before 17:00, ask for named resources

“Give the manager access to everything” is too broad to execute responsibly. Ask for the presentation folder, the customer correspondence that needs a response, the calendar the employee owns and the application where they approve quotes. Write the name of the successor against each item. Let the manager decide which ongoing responsibilities need reassignment and have the appropriate owner approve access to sensitive material.

List two types of dependency that teams often overlook:

- **A scheduled task running as the employee.** Ask the application owner to identify its connection, choose a supported replacement identity and prove it works on a controlled run.
- **An approval queue with one approver.** Reassign a test item and have the successor complete it. Being able to open the system says little about whether the next quote will move.

### At departure, record what each control changed

Have the authorised administrator perform the access actions defined for the tenant. Record the account identifier, UTC timestamp and result for each step. A blocked sign-in, a revoked session, recovered hardware and a disabled account inside a separate SaaS application answer different questions. Keep separate rows on the ticket. Review devices according to their ownership and management state before choosing any wipe action. Microsoft’s offboarding sequence covers access, mailbox and OneDrive decisions. [Microsoft’s former employee guide](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee)

### On Monday, test with the successor’s identity

| Business task               | Acceptance test                                                                                   | Who confirms      |
| --------------------------- | ------------------------------------------------------------------------------------------------- | ----------------- |
| Answer a customer           | Send a message from a controlled external account and respond through the approved shared process | Support lead      |
| Edit the presentation       | Successor opens the actual project file, edits a test copy and locates the source folder again    | Account director  |
| Approve a quote             | Route a harmless test approval through the replacement owner                                      | Sales operations  |
| Continue a scheduled export | Check the next scheduled output and its destination permissions                                   | Application owner |

A link that opens for the administrator can still fail for the account director. Run the tests through the user’s normal account. If the successor can open the project folder but cannot edit its contents, document that specific failure and grant only the permission the work requires.

## Make the mailbox decision explicit

A company may need a named mailbox preserved for authorised review, new customer enquiries routed to a team, or both. Ask separately who should read historical mail and who should receive new messages. Those groups can differ. Before changing a license, verify the chosen mailbox configuration, capacity, archive and hold requirements for the tenant. Record the next review date so temporary access does not become permanent by accident.

Close the departure ticket when the access owner, data owner and application owners have each signed off on their own items. If the device is still in transit, keep that named exception open with a due date. The next administrator should be able to see exactly what is complete without having to contact the former employee.

## Verify completion before closing the request

Have the administrator and business owner check different parts of the result. The administrator confirms access actions and records exceptions. The manager confirms that another authorized person can continue essential work.

Keep an exception list with an owner and review date. A resource without a new owner is unfinished handover work even if sign-in has been blocked.

### Should we delete the account immediately?

Decide preservation, ownership, and licensing dependencies first. Deletion is not a substitute for an offboarding plan.

### Is blocking sign-in enough?

It is one part of access removal. Review sessions, devices, separate application accounts, and shared credentials as appropriate to your environment.

For an organized process, see [Microsoft 365 management](/services/microsoft-365-management) or [remote IT support](/services/remote-it-support). If the departure is part of a provider change, coordinate it with the [email migration checklist](/blog/business-email-migration-checklist).

To plan the next employee handover, email **hello@itsupportbee.com** or [book a strategy call with IT Support Bee](https://itsupportbee.com/contact).
