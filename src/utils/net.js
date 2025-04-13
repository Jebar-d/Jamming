export function checkNetworkStatus(statusId) {
    const el = document.getElementById(statusId);
    const update = () => el.textContent = navigator.onLine ? 'Online ✅' : 'Offline ❌';
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
  }