// 👉 Timers & Interval

// Ek button banao jo click karne par "Hello" har 2 sec me print kare (setInterval).

// Ek button banao jo click karne par countdown 10 → 1 print kare aur end me "Time’s up!" show kare.

// Ek program likho jo 5 sec ke baad alert kare "Your session expired!".

// Ek clock banao jo har second update hota hai.

// Ek image slider banao jo har 3 sec me image change kare.


let helloBtn = document.querySelector("#hello-btn");
let helloPrint = document.querySelector("#hello-print");
helloBtn.addEventListener("click", () => {
    let sec = 2;
    setInterval(() => {
        let span = document.createElement("span");
        span.textContent = "Hello "
        helloPrint.appendChild(span);
    }, (sec * 1000))
})


let countBtn = document.querySelector("#countBtn");
let countPrint = document.querySelector("#countPrint");
countBtn.addEventListener("click", () => {
    let sec = 1;
    let count = 10;
    let span = document.createElement("span");
    let countdown = setInterval(() => {
        if (count > 0) {
            span.textContent = `${count} `
            countPrint.appendChild(span);
        } else {
            span.textContent = ` Time’s up! `
            countPrint.appendChild(span);
            clearInterval(countdown);
        }
        count--;
    }, (sec * 1000))
})

// 3) Show Alert after 5 sec
setTimeout(() => {
    alert("Your session expired!");
}, 5000);

// 4) clock show every second
let clock = document.querySelector("#clock");
let clockStart = document.querySelector("#clockStart");
clockStart.addEventListener("click", () => {
    setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        clock.textContent = time;
    }, 1000)
})


let img = document.querySelector("#img");
console.dir(img)

let imgIndex = 0;
let srcArray = ["https://www.pixelstalk.net/wp-content/uploads/2016/06/Link-green-wallpapers.jpg", "https://tse3.mm.bing.net/th/id/OIP.ozUfsrXt6PXvB50o49uESQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", "https://s-media-cache-ak0.pinimg.com/736x/5b/6b/b1/5b6bb1993bb4dc3e697371cabb08c75e.jpg", "https://s-media-cache-ak0.pinimg.com/736x/5b/6b/b1/5b6bb1993bb4dc3e697371cabb08c75e.jpg"]
setInterval(() => {
    img.src = srcArray[imgIndex];
    imgIndex++;

    if (imgIndex >= srcArray.length) imgIndex = 0;
    console.log(srcArray[imgIndex])

}, 3000)




