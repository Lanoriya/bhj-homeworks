let block = document.querySelector('.reveal')

function isVisible(e) {
  const {top, bottom} = e.getBoundingClientRect()

  if (top > window.innerHeight || bottom < 0) {
    return block.classList.remove('reveal_active');
  }

  return block.classList.add('reveal_active');
}

setInterval(() => {
  isVisible(block)
}, 1000);