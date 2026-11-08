// Native details elements also work when JavaScript is unavailable.
(() => {
  const button = document.getElementById('toggle-paper-details');
  const details = [...document.querySelectorAll('.paper details')];
  if (!button || !details.length) return;

  const update = () => {
    const allOpen = details.every(detail => detail.open);
    button.textContent = allOpen ? 'Collapse all details' : 'Expand all details';
    button.setAttribute('aria-expanded', String(allOpen));
  };

  button.setAttribute('aria-controls', details.map(detail => detail.id).join(' '));
  button.hidden = false;
  button.addEventListener('click', () => {
    const open = !details.every(detail => detail.open);
    details.forEach(detail => { detail.open = open; });
    update();
  });
  details.forEach(detail => detail.addEventListener('toggle', update));
  update();
})();
