let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');

if (!document.cookie) {
  modal.classList.add('modal_active')
} else {
  modal.classList.remove('modal_active')
}

modalClose.addEventListener('click', () => {
  setCookie('modalInfo', 'nonModal')

  function setCookie(modalInfo, value) {
    document.cookie = modalInfo + '=' + encodeURIComponent(value)
  }

  modal.classList.remove('modal_active')
})