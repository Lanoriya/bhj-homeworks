let book = document.querySelector('.book')
let fontSize = document.querySelectorAll('.font-size')

for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].onclick = function() {
    for (let j = 0; j < fontSize.length; j++) {
      fontSize[j].classList.remove('font-size_active')
      book.classList.remove('font-size_big','font-size_small')
    }
    if (fontSize[i].classList.contains('font-size')) {
      fontSize[i].classList.add('font-size_active')
      if (fontSize[i].classList.contains('font-size_big')) {
        book.classList.add('font-size_big')
      } else if (fontSize[i].classList.contains('font-size_small')) {
        book.classList.add('font-size_small')
      }
    }
    return false;
  }
}

