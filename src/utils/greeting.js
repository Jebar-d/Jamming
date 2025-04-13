export function showGreeting(elementId) {
    const hour = new Date().getHours();
    const msg = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    document.getElementById(elementId).textContent = msg;
  }