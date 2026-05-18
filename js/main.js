const PARTIALS = [
  { selector: '[data-include="header"]', file: 'components/header.html' },
  { selector: '[data-include="footer"]', file: 'components/footer.html' }
];

async function loadPartials() {
  await Promise.all(PARTIALS.map(async ({ selector, file }) => {
    const host = document.querySelector(selector);
    if (!host) return;
    try {
      const response = await fetch(file, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`Could not load ${file}`);
      host.innerHTML = await response.text();
    } catch (error) {
      host.innerHTML = selector.includes('header')
        ? '<header class="site-header"><a class="brand" href="index.html"><img src="assets/images/rsh-family-foundation-logo.png" alt="RSH Family Foundation logo" class="brand-logo"><span class="brand-text">RSH Family Foundation</span></a></header>'
        : '<footer class="site-footer"><p>&copy; RSH Family Foundation</p></footer>';
    }
  }));
  initializeNavigation();
  markCurrentPage();
  setYear();
}

function initializeNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
}

function markCurrentPage() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a').forEach(link => {
    const target = link.getAttribute('href');
    if (target === current) link.setAttribute('aria-current', 'page');
  });
}

function setYear() {
  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });
}

loadPartials();
