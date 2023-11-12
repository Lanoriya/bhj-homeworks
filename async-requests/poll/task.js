let url = 'https://students.netoservices.ru/nestjs-backend/poll';
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText)

      let dataTitle = document.createElement('div');
      dataTitle.innerText = data.data.title
      document.getElementById('poll__title').appendChild(dataTitle)

      data.data.answers.forEach((item) => {
        let dataButton = document.createElement('button')
        dataButton.classList.add('poll__answer')
        dataButton.innerText = item;
        document.getElementById('poll__answers').appendChild(dataButton);
        
        dataButton.addEventListener('click', () => {
          alert('Спасибо, ваш голос засчитан!')
        })
      });
    } else {
      console.log('Ошибка при выполнении запроса. Статус:', xhr.status)
    }
  }
}

