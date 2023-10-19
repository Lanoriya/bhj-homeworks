const links = document.querySelectorAll('.has-tooltip');
const tooltips = [];

function showTooltip(e) {
  e.preventDefault();
  const tooltipText = this.getAttribute('title');
  let tooltip = tooltips.find(t => t.element === this);

  if (!tooltip) {
    tooltip = createTooltip(tooltipText, this);
    tooltips.push({ element: this, tooltip });
  } else {
    removeTooltip(tooltip);
  }
}

function createTooltip(text, element) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;

  const elementRect = element.getBoundingClientRect();
  tooltip.style.left = elementRect.left + 'px';
  tooltip.style.top = elementRect.bottom + 'px';

  document.body.appendChild(tooltip);
  tooltip.classList.add('tooltip_active');

  return tooltip;
}

function removeTooltip(tooltip) {
  tooltip.tooltip.remove();
  tooltips.splice(tooltips.indexOf(tooltip), 1);
}

document.addEventListener('click', hideTooltips);

function hideTooltips(e) {
  if (!e.target.classList.contains('has-tooltip')) {
    tooltips.forEach(tooltip => {
      removeTooltip(tooltip);
    });
  }
}

links.forEach(link => {
  link.addEventListener('click', showTooltip);
});
