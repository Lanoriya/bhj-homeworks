let book = document.querySelector('.book')
let fontSize = document.querySelectorAll('.font-size')

function changeSize(e) {
  e.preventDefault();  
  const size = e.target.dataset.size;

  for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].classList.remove('font-size_active');
  }

  if (e.target.classList.contains('font-size')) {
    e.target.classList.add('font-size_active');
  }

  if (size) {
    book.className = `book font-size_${size}`;
  } else {
    book.className = "book";
  }
}

for (let i = 0; i < fontSize.length; i++) {
  fontSize[i].addEventListener('click', changeSize)
}
