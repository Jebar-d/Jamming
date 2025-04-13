export function showDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleString();
}