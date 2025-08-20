
// 👉 Local Storage / Session Storage

// Ek program likho jo input box ka data localStorage me save kare aur refresh ke baad bhi dikhaye.

// Ek button banao jo sessionStorage me username store kare aur doosra button jo usse show kare.

// Ek program banao jo user ka theme preference (dark/light) localStorage me save kare.

// Ek form submit karne ke baad data localStorage me store karo.

// Ek button banao jo localStorage clear kare.


let form = document.querySelector("form");
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

if (localStorage.getItem("user")) {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    username.value = (user.name).toUpperCase();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {
        name: username.value,
        email: email.value,
        password: password.value
    }
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data)
})

let addInSession = document.querySelector("#addInSession");
addInSession.addEventListener("click", () => {
    if (localStorage.getItem("user")) {
        user = username.value
        sessionStorage.setItem("user", user)
        console.log("k")
    }
})


let clearStorage = document.querySelector("#clearStorage");
clearStorage.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
})