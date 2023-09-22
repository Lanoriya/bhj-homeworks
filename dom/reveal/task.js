let blocks = document.querySelectorAll('.reveal')

function isVisible() {
  for (let i = 0; i < blocks.length; i++) {
    const {top, bottom} = blocks[i].getBoundingClientRect()
    if (top > window.innerHeight || bottom < 0) {
      blocks[i].classList.remove('reveal_active')
    } else {
      blocks[i].classList.add('reveal_active')
    }
  }
}

setInterval(() => {
  isVisible()
}, 1000);