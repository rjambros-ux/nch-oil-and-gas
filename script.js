const toggle = document.getElementById('lang-toggle');
toggle.addEventListener('click', () => {
  const isEn = toggle.textContent === 'EN';
  document.documentElement.lang = isEn ? 'en' : 'es';
  toggle.textContent = isEn ? 'ES' : 'EN';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isEn ? el.dataset.en : el.dataset.es;
  });
});
