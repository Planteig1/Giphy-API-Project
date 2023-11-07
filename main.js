
const searchField = document.querySelector("#gif-search");
const outputField = document.querySelector(".output-field")
const apiKey = "UJKhBMRmdZS5nDEP3oAjBaQHiPAI9cii";
const giphyUrl = "api.giphy.com/v1/gifs/search";
const searchUrl = `https://${giphyUrl}?api_key=${apiKey}&q=`;

searchField.addEventListener("change",() => {
    outputField.innerHTML = ""
    let userSearchInput = searchField.value
    let fullSearchUrl = `${searchUrl}${userSearchInput}&limit=10`
    fetch(fullSearchUrl)
        .then(response => response.json())
        .then(gifs => {
            gifs.data.forEach((gif) => {
                let currentGifElement = document.createElement("img");
                let currentGifUrl = gif.images.original.url
                currentGifElement.setAttribute("src",currentGifUrl)
                outputField.append(currentGifElement);
            })
        });
})





