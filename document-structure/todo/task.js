let input = document.querySelector('.tasks__input');
let inputBtn = document.querySelector('.tasks__add');
let tasksList = document.querySelector('.tasks__list');

inputBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue) {
    let task = document.createElement('div');
    let taskTitle = document.createElement('div');
    let btnRemove = document.createElement('a');

    task.classList.add('task');
    taskTitle.classList.add('task__title');
    btnRemove.href = '#';
    btnRemove.classList.add('task__remove');

    taskTitle.textContent = inputValue;
    btnRemove.innerHTML = '&times;';

    task.appendChild(taskTitle);
    task.appendChild(btnRemove);

    tasksList.appendChild(task);
    input.value = '';
  }
});

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    e.target.parentNode.remove();
  }
});
