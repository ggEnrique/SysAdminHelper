function generateEmail() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const link = document.getElementById('link').value;

    // Use the Toyota email template from text.js
    const emailContent = emailTemplates.toyota(name, username, link);

    document.getElementById('emailOutput').value = emailContent;
}

// Attach event listeners for copying and resetting
document.getElementById('copyBtn').addEventListener('click', () => copyToClipboard('emailOutput'));
document.getElementById('copyNotesBtn').addEventListener('click', () => copyToClipboard('ticketNotes'));
document.getElementById('resetNotesBtn').addEventListener('click', () => resetText('ticketNotes', defaultNotes.toyota));
