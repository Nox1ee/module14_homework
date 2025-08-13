document.querySelector(".button").addEventListener("click", () => {
    const inputWidth = document.getElementById("inputWidth").value;
    const inputHeight = document.getElementById("inputHeight").value;
    const errorMessage = document.querySelector(".errorMessage");
    const images = document.querySelector(".images");
    const url = `https://dummyimage.com/${inputWidth}x${inputHeight}/`;

    errorMessage.textContent = "";
    images.innerHTML = "";

    if ((isNaN(inputWidth)) || (isNaN(inputHeight)) || (inputWidth < 100) || (inputWidth > 300) || (inputHeight < 100) || (inputHeight > 300)) {
        errorMessage.textContent = "Одно из чисел вне диапазона от 100 до 300";
    } else {
        fetch(url)
            .then((repsonse) => {
                images.innerHTML = `<img src="${url}">`
            })

            .catch((error) => {
                console.log("error");
            });
    }
})