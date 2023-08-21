let cookie = document.getElementById('cookie')
let clickerCounter = document.getElementById('clicker__counter')
let click = 0;

cookie.onclick = function() {
  click += 1;
  clickerCounter.textContent = click;
  cookie.width = 180
  setTimeout(() => cookie.width = 200, 100)
}
