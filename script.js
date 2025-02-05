// Day/Night Mode Toggle
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
