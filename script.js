(function () {
  var root = document.documentElement;

  /* Theme toggle (dark is the default) */
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return !(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
  }
  document.getElementById('theme').addEventListener('click', function () {
    root.setAttribute('data-theme', isDark() ? 'light' : 'dark');
  });

  /* Mobile menu */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.textContent = open ? '✕' : '☰';
  }
  burger.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });
  Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
})();
