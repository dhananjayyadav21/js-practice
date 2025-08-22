let form = document.querySelector("form");
let charactername = document.querySelector("#charactername");
let role = document.querySelector("#role");
let city = document.querySelector("#city");
let image = document.querySelector("#image");

let addCharacter = {
    characters: [
        {
            charactername: "Roronoa Zoro",
            city: "Mosco",
            role: "A swordsman who fights using three swords and is part of the Straw Hat Pirates.",
            image: "https://preview.redd.it/4wo42nvwoix21.jpg?auto=webp&s=1f1f5d5d1bacfeac9beb193db19ce05f91c59541"
        },
        {
            charactername: "Goku",
            city: "Mosco",
            role: "A Saiyan warrior who constantly trains to protect Earth from threats.",
            image: "https://wallpapercave.com/wp/wp6004792.jpg"
        },
        {
            charactername: "Vegeta",
            city: "Mosco",
            role: "The proud Saiyan prince and rival of Goku, striving to surpass him.",
            image: "https://fastpng.com/images/file/vegeta-png-3kfeyu27hy9ddoll.png"
        }],

    init: function () {
        this.addCharacter();
        form.addEventListener("submit", this.sumbitForm.bind(this));
    },

    sumbitForm: function (e) {
        e.preventDefault();
        this.characters.push({
            charactername: charactername.value.trim(),
            role: role.value.trim(),
            city: city.value.trim(),
            image: image.value.trim()
        })
        this.addCharacter();
        form.reset();
    },

    addCharacter: function () {
        let charactersContainer = document.querySelector("#characters");
        charactersContainer.innerHTML = ""

        if (this.characters === null || this.characters.length === 0) {
            let isEmptyCards = document.createElement("div");
            isEmptyCards.className = "mx-[20%] sm:mx-[35%] lg:mx-[40%]"
            isEmptyCards.innerHTML = ` <button
                    class="px-6 py-3 rounded-xl shadow-lg bg-black text-white hover:bg-gray-950 transition">
                    🌙 Please upload your favorite character
                     </button>`
            charactersContainer.appendChild(isEmptyCards)

        }
        this.characters.forEach((u, index) => {
            let character = document.createElement("div");
            character.className = `bg-black shadow-[0_-1px_2px_#00ffff] rounded-xl flex flex-col items-center w-full sm:w-[48%] lg:w-[24%] overflow-hidden`

            character.innerHTML = `    
                    <img src="${u.image}"
                        alt="character Image" class="w-full h-60 object-cover object-top">
                    <div class="p-4 text-center">
                         <h3 class="font-bold text-lg text-white">${u.charactername}</h3>
                        <p class="text-gray-400"> ${u.role}</p>
                        <h5 class="text-gray-400">${u.city}</h5>
                    </div>
                      <button
                        class="characterDelete mb-4 bg-red-600 text-white px-4 py-1 rounded-lg text-sm shadow-md hover:bg-red-700 transition"
                        data-index="${index}">
                        Delete
                    </button>`
            charactersContainer.appendChild(character);
        })

        let deletecharacter = document.querySelectorAll(".characterDelete");

        deletecharacter.forEach((card) => {
            card.addEventListener("click", (e) => {
                let index = e.target.getAttribute("data-index");
                this.removeCharacter(index);
            });
        })

    },

    removeCharacter: function (index) {
        this.characters.splice(index, 1);
        this.addCharacter();
    },
}

addCharacter.init();