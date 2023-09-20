let rotatorCases = document.querySelectorAll('.rotator__case')
let score = 0;

function timer() {
  score++
  if (score >= rotatorCases.length) {
    score = 0;
  }
  for (let i = 0; i < rotatorCases.length; i++) {
    rotatorCases[i].classList.remove('rotator__case_active')
  }
  rotatorCases[score].classList.add('rotator__case_active')
}

setInterval(() => {
  timer()
}, 1000);