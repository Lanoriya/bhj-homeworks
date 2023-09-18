let dropDownList = document.querySelector('.dropdown__list')
let dropDownBtn = document.querySelector('.dropdown__value')
let dropDownLinks = document.querySelectorAll('.dropdown__link')

for(let i = 0; i < dropDownLinks.length; i++) {
  dropDownLinks[i].onclick = function() {
    dropDownBtn.innerHTML = dropDownLinks[i].innerHTML
    dropDownList.classList.remove('dropdown__link')
    return false;
  }
}

function opener() {
  dropDownList.classList = (dropDownList.classList == 'dropdown__list dropdown__link' ? 'dropdown__list' : 'dropdown__list dropdown__link')
}

dropDownBtn.addEventListener('click', opener)