let getHole = index => document.getElementById(`hole${index}`)
let dead = document.getElementById('dead')
let lost = document.getElementById('lost')

for (let i = 1; i <= 9 ; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).className.includes('hole_has-mole')) {
      dead.textContent++
    } else {
      lost.textContent++
    }
    if (lost.textContent >= 5) {
      location.reload()
      alert('Вы проиграли')
    }
    if (dead.textContent >= 10) {
      location.reload()
      alert('Вы победили')
    }
  }
}