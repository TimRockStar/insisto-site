// FR/EN switch: elements carry both texts in data-fr / data-en; the choice is remembered.
(function () {
  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-fr]').forEach(function (el) { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('.lang').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.set === lang)); });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = saved || ((navigator.language || 'fr').slice(0, 2) === 'en' ? 'en' : 'fr');
  document.querySelectorAll('.lang').forEach(function (b) { b.addEventListener('click', function () { apply(b.dataset.set); }); });
  apply(lang);
})();
