// Agência Carla - Material de Ajuda
// script.js

(function () {
  // ========== ACCORDION ==========
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;

      // Fechar todos
      buttons.forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.classList.remove('open');
      });

      // Abrir o clicado (se estava fechado)
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        content.classList.add('open');
      }
    });
  });

  // ========== THEME TOGGLE ==========
  const themeBtn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
  }

  // Detectar preferência do sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  themeBtn.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
})();
