// 👉 Forms & Validation

// Ek form banao jisme name, email aur password ho. Agar empty ho toh "Fields cannot be empty" ka error show karo.

// Password field me check karo ki password length >= 6 ho.

// Email field me check karo ki email ke andar @ aur .com ho.

// Ek checkbox banao "Accept Terms & Conditions" – bina check kiye form submit na ho.

// Ek program banao jo form submit karne ke baad values ko console me print kare.


let form = document.querySelector("form");
let user = document.querySelector("#name");
let pass = document.querySelector("#password");
let email = document.querySelector("#email");
let nameErr = document.querySelector("#nameError");
let emailErr = document.querySelector("#emailError");
let passErr = document.querySelector("#passwordError");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (user.value.trim() === "" || pass.value.trim() === "" || email.value.trim() === "") {
        if (user.value.trim() === "") {
            nameErr.classList.remove("hidden");
            nameErr.textContent = "Fields cannot be empty"
        }
        if (pass.value.trim() === "") {
            passErr.classList.remove("hidden");
            passErr.textContent = "Fields cannot be empty"
        }
        if (email.value.trim() === "") {
            emailErr.classList.remove("hidden");
            emailErr.textContent = "Fields cannot be empty"
        }
    } else {
        nameErr.classList.add("hidden");
        passErr.classList.add("hidden");
        emailErr.classList.add("hidden");
        user.value = ""
        pass.value = ""
        email.value = ""
    }


})


let checkBoxForm = document.querySelector(".checkbox");
let user2 = document.querySelector("#user");
let showErr = document.querySelector("#showErr");
let acceptTC = document.querySelector("#acceptTC");
checkBoxForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (acceptTC.checked === false) {
        console.log(acceptTC.checked)
        showErr.classList.remove("hidden");
        showErr.textContent = "Please accept terms and condition"
    } else {
        showErr.classList.add("hidden");
        user2.value = "";
        acceptTC.checked = false;
    }
})
