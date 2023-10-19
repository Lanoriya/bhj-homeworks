let input = document.querySelector('.tasks__input')
let inputBtn = document.querySelector('.tasks__add')
let tasksList = document.querySelector('.tasks__list')

inputBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let task = document.createElement('div')
  let taskTitle = document.createElement('div')
  let btnRemove = document.createElement('a')
  
  task.classList.add('task')
  taskTitle.classList.add('task__title')
  btnRemove.href = '#'
  btnRemove.classList.add('task__remove')

  taskTitle.innerHTML = input.value
  btnRemove.innerHTML = '&times;'

  task.appendChild(taskTitle)
  task.appendChild(btnRemove)
  
  tasksList.appendChild(task)
  taskRemover();
})

function taskRemover() {
  let taskRemoveBtns = document.querySelectorAll('.task__remove')
  for (let i = 0; i < taskRemoveBtns.length; i++) {
    taskRemoveBtns[i].onclick = (e) => {
      e.currentTarget.parentNode.remove()
    }
  }
}