const loginForm = document.getElementById(`signin__form`);

loginForm.addEventListener(`submit`, event => {
  event.preventDefault();
  
  const formData = new FormData(loginForm);
  const xhr = new XMLHttpRequest();
  
  xhr.open(`POST`, `https://students.netoservices.ru/nestjs-backend/auth`);
  xhr.responseType = 'json';
  xhr.send(formData);
  
  xhr.onload = () => {
    if (xhr.response.success) {
      localStorage.setItem(`userId`, xhr.response.user_id);
      displayWelcome();
      loginForm.reset();
    } else {
      alert(`Неверный логин/пароль`);
    }
  };
});

window.addEventListener(`load`, () => {
  localStorage.userId ? displayWelcome() : false;
});

function displayWelcome() {
  const loginBlock = document.querySelector(`.signin`);
  loginBlock.classList.remove(`signin_active`);
  
  const welcomeBlock = document.querySelector(`.welcome`);
  const currentUserSpan = welcomeBlock.querySelector(`span`);
  
  currentUserSpan.textContent = localStorage.userId;
  welcomeBlock.classList.add(`welcome_active`);
}
