export function copyToClipboard(textId) {
    const text = document.getElementById(textId).textContent;
    navigator.clipboard.writeText(text).then(() => alert("Copied!"));
  }
  