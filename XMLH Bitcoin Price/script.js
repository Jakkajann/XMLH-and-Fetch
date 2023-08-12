const api_endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";
const button = document.querySelector("#btn");

function getBitcoinPrice() {
    XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.status == 200 && XHR.readyState == 4) {
            const data = JSON.parse(XHR.responseText);
            let bitcoinPrice = data.bpi.USD.rate;
            const bitcoinPriceElement = document.querySelector("#price");
            bitcoinPriceElement.innerHTML = bitcoinPrice + " USD";
        }
    }

    XHR.open("GET", api_endpoint);
    XHR.send();
}

getBitcoinPrice();

button.addEventListener("click", getBitcoinPrice);

