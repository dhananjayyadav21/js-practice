
function createToster(config) {
    return function (notification) {
        let parent = document.querySelector(".parent");
        let toster = document.createElement("div");

        parent.className += ` ${config?.positionX === "right" ? "right-5" : "left-5"}  ${config?.positionY === "top" ? "top-5" : "bottom-5"}`
        toster.className = `bg-${config?.color} p-2 h-10 w-60 rounded-md text-gray-400 flex items-center`
        toster.textContent = `${notification}`
        parent.appendChild(toster);

        setTimeout(() => {
            parent.removeChild(toster);
        }, config.duration * 1000);
    }
}

let topRight = createToster({
    color: "black",
    positionX: "right",
    positionY: "top",
    duration: 3
});

let topLeft = createToster({
    color: "black",
    positionX: "left",
    positionY: "top",
    duration: 3
});

let bottomRight = createToster({
    color: "black",
    positionX: "right",
    positionY: "bottom",
    duration: 3
});

let bottomLeft = createToster({
    color: "black",
    positionX: "left",
    positionY: "bottom",
    duration: 3
});

// topRight("Hye i am 1 ");
// topRight("Hye i am 2 ");
// topRight("Hye i am 3 ");

// bottomRight("Hye i am 1 ");


bottomLeft("Hye i am 1 ");
bottomLeft("Hye i am 3 ");