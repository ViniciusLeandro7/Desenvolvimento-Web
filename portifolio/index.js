const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const darkMode = document.body.classList.contains('dark');
  toggleButton.textContent = darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});
