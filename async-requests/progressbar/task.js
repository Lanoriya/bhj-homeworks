const progress = document.getElementById('progress');

let url = 'https://students.netoservices.ru/nestjs-backend/upload';

let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(form);
  let request = new XMLHttpRequest();

  request.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total);
      console.log(`${(percentComplete * 100).toFixed(0)} %`)
      progress.value = percentComplete;
    }
  });

  request.addEventListener('load', () => {
    if (request.status === 200) {
      console.log('Загрузка завершена успешно.');
    } else {
      console.error('Произошла ошибка при загрузке. Статус:', request.status);
    }
  });

  request.addEventListener('error', () => {
    console.error('Произошла ошибка при выполнении запроса.');
  });

  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'multipart/form-data');
  request.send(formData);
})
