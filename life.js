const dateEl = document.getElementById('visit-date');
const today = new Date();
dateEl.textContent = today.toLocaleDateString({ month: 'short', day: 'numeric' });