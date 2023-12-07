const textArea = document.getElementById('editor')
const btn = document.getElementById('restore')

btn.addEventListener('click', () => {
  textArea.value = ''
  localStorage.clear()
})

function saveObject(key, object) {
  localStorage.setItem(key, JSON.stringify(object))
}

textArea.addEventListener('keyup', () => {
  saveObject('text', textArea.value)
})

textArea.value = JSON.parse(localStorage.getItem('text')) 