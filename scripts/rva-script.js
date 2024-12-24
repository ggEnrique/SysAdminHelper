function generateEmail() {
    const name = document.getElementById('name').value;
    const usernameEmail = document.getElementById('usernameEmail').value;
    const usernameRDS = document.getElementById('usernameRDS').value;
    const email = document.getElementById('email').value;
    const link = document.getElementById('link').value;

    // Use the RVA email template from text.js
    const emailContent = emailTemplates.rva(name, usernameEmail, usernameRDS, email, link);

    document.getElementById('emailOutput').value = emailContent;
}

// Attach event listeners for copying and resetting
document.getElementById('copyBtn').addEventListener('click', () => copyToClipboard('emailOutput'));
document.getElementById('copyNotesBtn').addEventListener('click', () => copyToClipboard('ticketNotes'));
document.getElementById('resetNotesBtn').addEventListener('click', () => resetText('ticketNotes', defaultNotes.rva));
