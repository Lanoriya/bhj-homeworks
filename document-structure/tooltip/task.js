const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

function showTooltip(e) {
  e.preventDefault();
  const tooltipText = this.getAttribute('title');
  const elementRect = this.getBoundingClientRect();

  tooltip.textContent = tooltipText;
  tooltip.style.left = elementRect.left + 'px';
  tooltip.style.top = elementRect.bottom + 'px';

  if (!tooltip.classList.contains('tooltip_active')) {
    tooltip.classList.add('tooltip_active');
  } else {
    tooltip.classList.remove('tooltip_active');
  }
}

function hideTooltips(e) {
  if (!e.target.classList.contains('has-tooltip')) {
    tooltip.classList.remove('tooltip_active');
  }
}

document.addEventListener('click', hideTooltips);

const links = document.querySelectorAll('.has-tooltip');
links.forEach(link => {
  link.addEventListener('click', showTooltip);
});
