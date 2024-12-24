// Default Ticket Notes
const defaultNotes = {
    toyota: `
Copied AD profile from indicated user
Input indicated information in AD
Created account in Exchange
Created Proofpoint account
Emailed back to the customer and forwarded it to the IS team
Created contact in Autotask
    `,
    rva: `
Created AD account
Added SMTP proxy email
Added user to groups - check to confirm what groups needed to be added
Checked licenses - asked for one in escalation
Changed settings for username/email in 365
Added user to Proofpoint
Checked Adobe licenses available
Emailed user welcome and added license
    `
};

// Email Templates
const emailTemplates = {
    toyota: (name, username, link) => `
Good evening,

I have completed the onboarding process for ${name}.

Their credentials are available via the provided link, which is designed to display the information only once upon clicking.

Username login: ${username}
Password: ${link}

I will now forward this information to the IS team so they can finalize the necessary tasks on their end. @tlcsupport@toyotacarlsbad.com
We’ve assigned them a 365 Business Basic License; please let me know if they require a different license.

Thank you!
    `,
    rva: (name, usernameEmail, usernameRDS, email, link) => `
Hello,

I have completed the onboarding process for ${name}.

Their credentials are available via the provided link, which is designed to display the information only once upon clicking.

Username login for email: ${usernameEmail}
Username for RDS: ${usernameRDS} (Have them call/chat to set it up)
Email: ${email}
Password: ${link}

Please let me know if you have any questions or concerns. Thank you!

Sincerely,
    `
};
