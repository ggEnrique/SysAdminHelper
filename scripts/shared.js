// Function to copy content to clipboard
function copyToClipboard(elementId) {
    const content = document.getElementById(elementId).value;
    navigator.clipboard.writeText(content)
        .then(() => alert('Content copied to clipboard!'))
        .catch(err => console.error('Error copying content:', err));
}

// Function to reset text in a textarea to its default value
function resetText(elementId, defaultText) {
    document.getElementById(elementId).value = defaultText.trim();
    alert('Text has been reset to default.');
}
