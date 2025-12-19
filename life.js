const dateEl = document.getElementById('visit-date');
const today = new Date();
dateEl.textContent = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });