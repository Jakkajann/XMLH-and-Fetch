const api_endpoint = "https://randomuser.me/api/";
const button = document.querySelector("#btn");
const avatar = document.querySelector("#avatar");
const fullname = document.querySelector("#fullname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}

window.onload = getNewUser;


function getNewUser() {
    fetch(api_endpoint)
    .then(handleErrors)
    .then((request) => {
        return request.json();
    })
    .then((data) => {
        const result = data.results[0];
        avatar.src = result.picture.medium;
        fullname.innerHTML = result.name.first + " " + result.name.last;
        username.innerHTML = result.login.username;
        email.innerHTML = result.email;
        city.innerHTML = result.location.city;
    })
    .catch((errors) => {
        console.log(errors);
    })

}

button.addEventListener("click", getNewUser);