const characters = [
    {
        name: "Naruto Uzumaki",
        detail: "A spirited ninja of Konohagakure who dreams of becoming Hokage.",
        image: "https://images5.alphacoders.com/413/413842.jpg"
    },
    {
        name: "Sasuke Uchiha",
        detail: "Naruto's rival and last surviving member of the Uchiha clan seeking revenge.",
        image: "https://www.ixpap.com/images/2021/01/sasuke-uchiha-wallpaper-ixpap-1.png"
    },
    {
        name: "Monkey D. Luffy",
        detail: "A carefree pirate with a rubber body who wants to find the One Piece.",
        image: "https://free-3dtextureshd.com/wp-content/uploads/2025/01/96-4.jpg.webp"
    },
    {
        name: "Roronoa Zoro",
        detail: "A swordsman who fights using three swords and is part of the Straw Hat Pirates.",
        image: "https://preview.redd.it/4wo42nvwoix21.jpg?auto=webp&s=1f1f5d5d1bacfeac9beb193db19ce05f91c59541"
    },
    {
        name: "Goku",
        detail: "A Saiyan warrior who constantly trains to protect Earth from threats.",
        image: "https://wallpapercave.com/wp/wp6004792.jpg"
    },
    {
        name: "Vegeta",
        detail: "The proud Saiyan prince and rival of Goku, striving to surpass him.",
        image: "https://fastpng.com/images/file/vegeta-png-3kfeyu27hy9ddoll.png"
    }, {
        name: "Light Yagami",
        detail: "A genius high schooler who gains a Death Note and seeks to cleanse the world.",
        image: "https://tse1.mm.bing.net/th/id/OIP.ncjmQX9eoBE27BX4ShmfoQHaHg?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "L (Lawliet)",
        detail: "A world-famous detective determined to catch Kira using his brilliance.",
        image: "https://tse4.mm.bing.net/th/id/OIP._t-L8EA7N1GTyQ731d894AHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "Tanjiro Kamado",
        detail: "A kind-hearted boy turned demon slayer to save his sister Nezuko.",
        image: "https://4kwallpapers.com/images/wallpapers/tanjiro-kamado-1920x1080-9329.jpg"
    },
    {
        name: "Levi Ackerman",
        detail: "Humanity's strongest soldier from Attack on Titan, known for his skill and calmness.",
        image: "https://wallpaperaccess.com/full/149553.jpg"
    },
    {
        name: "Naruto Uzumaki",
        detail: "A spirited ninja of Konohagakure who dreams of becoming Hokage.",
        image: "https://images5.alphacoders.com/413/413842.jpg"
    },
    {
        name: "Sasuke Uchiha",
        detail: "Naruto's rival and last surviving member of the Uchiha clan seeking revenge.",
        image: "https://www.ixpap.com/images/2021/01/sasuke-uchiha-wallpaper-ixpap-1.png"
    },
    {
        name: "Monkey D. Luffy",
        detail: "A carefree pirate with a rubber body who wants to find the One Piece.",
        image: "https://free-3dtextureshd.com/wp-content/uploads/2025/01/96-4.jpg.webp"
    },
    {
        name: "Roronoa Zoro",
        detail: "A swordsman who fights using three swords and is part of the Straw Hat Pirates.",
        image: "https://preview.redd.it/4wo42nvwoix21.jpg?auto=webp&s=1f1f5d5d1bacfeac9beb193db19ce05f91c59541"
    },
    {
        name: "Goku",
        detail: "A Saiyan warrior who constantly trains to protect Earth from threats.",
        image: "https://wallpapercave.com/wp/wp6004792.jpg"
    },
    {
        name: "Vegeta",
        detail: "The proud Saiyan prince and rival of Goku, striving to surpass him.",
        image: "https://fastpng.com/images/file/vegeta-png-3kfeyu27hy9ddoll.png"
    }, {
        name: "Light Yagami",
        detail: "A genius high schooler who gains a Death Note and seeks to cleanse the world.",
        image: "https://tse1.mm.bing.net/th/id/OIP.ncjmQX9eoBE27BX4ShmfoQHaHg?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "L (Lawliet)",
        detail: "A world-famous detective determined to catch Kira using his brilliance.",
        image: "https://tse4.mm.bing.net/th/id/OIP._t-L8EA7N1GTyQ731d894AHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "Tanjiro Kamado",
        detail: "A kind-hearted boy turned demon slayer to save his sister Nezuko.",
        image: "https://4kwallpapers.com/images/wallpapers/tanjiro-kamado-1920x1080-9329.jpg"
    },
    {
        name: "Levi Ackerman",
        detail: "Humanity's strongest soldier from Attack on Titan, known for his skill and calmness.",
        image: "https://wallpaperaccess.com/full/149553.jpg"
    },
    {
        name: "Naruto Uzumaki",
        detail: "A spirited ninja of Konohagakure who dreams of becoming Hokage.",
        image: "https://images5.alphacoders.com/413/413842.jpg"
    },
    {
        name: "Sasuke Uchiha",
        detail: "Naruto's rival and last surviving member of the Uchiha clan seeking revenge.",
        image: "https://www.ixpap.com/images/2021/01/sasuke-uchiha-wallpaper-ixpap-1.png"
    },
    {
        name: "Monkey D. Luffy",
        detail: "A carefree pirate with a rubber body who wants to find the One Piece.",
        image: "https://free-3dtextureshd.com/wp-content/uploads/2025/01/96-4.jpg.webp"
    },
    {
        name: "Roronoa Zoro",
        detail: "A swordsman who fights using three swords and is part of the Straw Hat Pirates.",
        image: "https://preview.redd.it/4wo42nvwoix21.jpg?auto=webp&s=1f1f5d5d1bacfeac9beb193db19ce05f91c59541"
    },
    {
        name: "Goku",
        detail: "A Saiyan warrior who constantly trains to protect Earth from threats.",
        image: "https://wallpapercave.com/wp/wp6004792.jpg"
    },
    {
        name: "Vegeta",
        detail: "The proud Saiyan prince and rival of Goku, striving to surpass him.",
        image: "https://fastpng.com/images/file/vegeta-png-3kfeyu27hy9ddoll.png"
    }, {
        name: "Light Yagami",
        detail: "A genius high schooler who gains a Death Note and seeks to cleanse the world.",
        image: "https://tse1.mm.bing.net/th/id/OIP.ncjmQX9eoBE27BX4ShmfoQHaHg?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "L (Lawliet)",
        detail: "A world-famous detective determined to catch Kira using his brilliance.",
        image: "https://tse4.mm.bing.net/th/id/OIP._t-L8EA7N1GTyQ731d894AHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "Tanjiro Kamado",
        detail: "A kind-hearted boy turned demon slayer to save his sister Nezuko.",
        image: "https://4kwallpapers.com/images/wallpapers/tanjiro-kamado-1920x1080-9329.jpg"
    }
];

function showCharacter(charArray) {
    let cardBox = document.querySelector("#cards");
    charArray.forEach((character) => {
        let card = document.createElement("div");
        card.classList.add(
            "w-full",
            "sm:w-[48.6%]",
            "lg:w-[23.6%]",
            "border-2",
            "border-gray-950",
            "rounded-lg",
            "bg-black",
            "shadow-[0_0_10px_#87CEEB]",
            "p-2",
            "transition-all",
            "delay-100",
            "duration-400",
            "hover:-translate-y-2"
        );
        card.innerHTML = `
                        <img class="h-80 md:h-60 w-full object-cover object-top"
                            src=${character?.image} alt="img">
                        <div class="my-2">
                            <h1 class="font-semibold text-lg italic">${character.name}</h1>
                            <p class="text-gray-400">${character.detail}</p>
                        </div>`

        cardBox.appendChild(card);
    })
}
showCharacter(characters);


let searchContent = document.querySelector("#searchContent");
let search = document.querySelector("#search");
search.addEventListener("input", () => {
    let searchCharacters = characters.filter((character) => {
        return character.name.toLowerCase().startsWith(search.value.toLowerCase());
    })

    if (searchCharacters.length === 0) {
        searchContent.textContent = "❌ No character found"
    } else {
        searchContent.textContent = "🔎 Check Your Search Results "
    }

    if (search.value === "") {
        searchContent.textContent = "👉 Type to search your favorite anime characters..."
    }

    document.querySelector("#cards").innerHTML = ""
    showCharacter(searchCharacters);
})




