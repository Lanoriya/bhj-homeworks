let timerCounter = setInterval(function counter() {
  let timer = document.getElementById('timer');
  timer.textContent -= 1;
  if (timer.textContent == 0) {
    alert('Вы победили в конкурсе')
    clearInterval(timerCounter);
  }
}, 1000)
