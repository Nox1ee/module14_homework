document.querySelector("button").addEventListener('click', () => {
    const input = document.querySelector('input').value;
    const someText = document.querySelector('#some-text');
    const images = document.querySelector('#images');

    const reqUrl = `https://jsonplaceholder.typicode.com/photos?_limit=${input}`;

    someText.textContent = '';
    images.innerHTML = '';

    if ((input < 1) || (input > 10)) {
        // const someString = `<p>"Число вне диапазона от 1 до 10"</p>`;
        someText.innerHTML = `<p>"Число вне диапазона от 1 до 10"</p>`;
    } else {
        useRequest(reqUrl, displayImages);   
    }

    function useRequest(url, callback) {
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', reqUrl);

        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);
                if (callback) {
                    callback(result);
                }
            }
        }

        xhr.onerror = function() {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };

        xhr.send();
    }   
    
    function displayImages(apiData) {
        let cards = "";

        apiData.forEach(item => {
            const cardBlock = `
            <div class="images__item">
                <img src="${item.thumbnailUrl}">
                <p>${item.title}<p>
            </div>`;
            cards += cardBlock;
        });

        images.innerHTML = cards;
    }
});


