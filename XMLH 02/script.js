const photo = document.querySelector("#photo");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200) {
            let url = JSON.parse(XHR.responseText).message;
            photo.src = url;
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
})
