let tabs =  document.querySelectorAll('.tab')
let tabContent = document.querySelectorAll('.tab__content')

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('tab_active')
      tabContent[j].classList.remove('tab__content_active')
      if (tabs[j].classList == ('tab')) {
        tabs[i].classList.add('tab_active')
        tabContent[i].classList.add('tab__content_active')
      }
    }
  }
}