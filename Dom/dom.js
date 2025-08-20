// Ek button banao jo click karne par ek <p> tag ka text "Hello JavaScript" se change kar de.

// Ek list (<ul>) banao aur ek button click par ek naya <li> item add ho.

// Ek program banao jo input box se value le aur ek <div> ke andar show kare.

// Ek image tag banao aur button click se uska src change karo.

// Ek paragraph banao aur button click karne par uska background color change ho jaye.


let p = document.querySelector("p");
p.textContent = "Hello JavaScript"

let btn = document.querySelector("#li-btn");
let ul = document.querySelector("ul");
btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "New li"
    ul.appendChild(li);
})


let inp = document.querySelector("input");
let showData = document.querySelector("#show-data");
inp.addEventListener("input", () => {
    showData.textContent = inp.value;
})


let imgBtn = document.querySelector("#img-btn");
let img = document.querySelector("img");
imgBtn.addEventListener("click", () => {
    img.src = "https://images.unsplash.com/photo-1755572191949-2514946a633e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
})

let bgchangeP = document.querySelector("#bg-change")
bgchangeP.addEventListener("click", () => {
    bgchangeP.classList.add("bg-amber-500");
})
console.dir(bgchangeP);

