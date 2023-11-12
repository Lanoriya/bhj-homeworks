let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let loader = document.getElementById('loader')
      loader.classList.remove('loader_active')

      let data = JSON.parse(xhr.responseText);

      let items = document.getElementById('items');

      for (let valuteCode in data.response.Valute) {
        if (data.response.Valute.hasOwnProperty(valuteCode)) {
          let valute = data.response.Valute[valuteCode];

          let itemElement = document.createElement('div');
          itemElement.classList.add('item');

          let itemCodeElement = document.createElement('div');
          itemCodeElement.classList.add('item__code');
          itemCodeElement.innerText = valute.CharCode;

          let itemValueElement = document.createElement('div');
          itemValueElement.classList.add('item__value');
          itemValueElement.innerText = valute.Value;

          let itemCurrencyElement = document.createElement('div');
          itemCurrencyElement.classList.add('item__currency');
          itemCurrencyElement.innerText = 'руб.';

          itemElement.appendChild(itemCodeElement);
          itemElement.appendChild(itemValueElement);
          itemElement.appendChild(itemCurrencyElement);

          items.appendChild(itemElement);
        }
      }
    } else {
      console.log('Ошибка при выполнении запроса. Статус:', xhr.status);
    }
  }
}
