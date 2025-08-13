const btn = document.querySelector(".button");
const pageInput = document.getElementById("numOfPage");
const limitInput = document.getElementById("limit");


btn.addEventListener("click", () => {
    const numOfPage = parseInt(pageInput.value);
    const limit = parseInt(limitInput.value);
    const errorMessage = document.querySelector(".errorMessage");
    const imagesList = document.querySelector(".images");
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${numOfPage}&_limit=${limit}`;

    let error = 0;

    errorMessage.textContent = "";
    imagesList.innerHTML = "";
    
    function displayImages(images) {
        let cards = "";
        images.forEach(image => {
            const imageItem = 
            `<div class="images__item">
                <img src="${image.thumbnailUrl}">
                <p>${image.title}<p>
            </div>`;
            cards += imageItem; 
        });

        imagesList.innerHTML = cards;
    }

    function useRequest(url) {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        
        .then((data) => {
            displayImages(data);
            localStorage.setItem('lastRequest', JSON.stringify({numOfPage, limit}));
        })

        .catch((error) => {
            console.log('error', error);
        });
    }

    if ((isNaN(numOfPage)) || (numOfPage < 1) || (numOfPage > 10)) {
        errorMessage.textContent = "Номер страницы вне диапазона от 1 до 10";
        error++;
    }

    if ((isNaN(limit)) || (limit < 1) || (limit > 10)) {
        errorMessage.textContent = "Лимит вне диапазона от 1 до 10";
        error++;
    }

    if (error === 2) {
        errorMessage.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (error === 0) {
        useRequest(url);
    }
});

window.onload = () => {
    const lastRequest = JSON.parse(localStorage.getItem('lastRequest'));
    if (lastRequest) {
        pageInput.value = lastRequest.numOfPage;
        limitInput.value = lastRequest.limit;
        btn.click();
    }
}