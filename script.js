function generateEmail() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const link = document.getElementById('link').value;

    const emailTemplate = `Good evening,

I have completed the onboarding process for ${name}.

Their credentials are available via the provided link, which is designed to display the information only once upon clicking.

Username login: ${username}
Password: ${link}

I will now forward this information to the IS team so they can finalize the necessary tasks on their end. @tlcsupport@toyotacarlsbad.com
We’ve assigned him a 365 Business Basic License, please let me know if he requires a different license.

Thank you!`;

    document.getElementById('emailOutput').value = emailTemplate;
}
// Add Copy to Clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const emailContent = document.getElementById('emailOutput'); // The textarea ID
  
    // Select the content
    emailContent.select();
    emailContent.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the content
    document.execCommand('copy');
  
    // Notify the user (optional)
    alert('Email content copied to clipboard!');
  });
  