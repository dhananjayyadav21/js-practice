// 👉 Event Handling

// Ek button par mouseover aur mouseout event ka use karke uska color change karo.

// Ek form banao aur submit button par alert dikhao: "Form Submitted".

// Ek input box banao jo typing ke waqt live preview ek <p> me show kare.

// Double click (ondblclick) event use karke ek box ka color red karo.

// Keyboard press hone par console me key ka naam print karo.


let changeColorDiv = document.querySelector("#change-color");
changeColorDiv.addEventListener("mouseover", () => {
    changeColorDiv.classList.add("bg-amber-600");
    console.log("hye")
})
changeColorDiv.addEventListener("mouseout", () => {
    changeColorDiv.classList.remove("bg-amber-600");
})


let form = document.querySelector("form");
form.addEventListener("submit", () => {
    alert("Form Submitted");
})

let inpPreview = document.querySelector("#input-preview");
let previewBox = document.querySelector("#preview-box")
console.dir(previewBox)
inpPreview.addEventListener("input", () => {
    previewBox.textContent = inpPreview.value;
})

let changeColorOnDbl = document.querySelector("#dblclick");
changeColorOnDbl.addEventListener("dblclick", () => {
    changeColorOnDbl.classList.add("bg-red-600");
})

let showKey = document.querySelector("#showKey");
window.addEventListener("keydown", (event) => {
    showKey.textContent = event.key;
})

