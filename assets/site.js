const copyButton = document.getElementById('copy-citation');
const citation = document.getElementById('citation');
const copyStatus = document.getElementById('copy-status');

if (navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      copyStatus.textContent = 'BibTeX copied.';
    } catch {
      copyStatus.textContent = 'Please select the BibTeX text to copy it, or use Download.';
    }
  });
}
