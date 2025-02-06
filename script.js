const foods = [
    { name: "Fish and Chips", image: "images/fish_and_chips.jpg" },
    { name: "Shepherd's Pie", image: "images/shepherds_pie.jpg" },
    { name: "Full English Breakfast", image: "images/full_english.jpg" },
    { name: "Bangers and Mash", image: "images/bangers_mash.jpg" },
    { name: "Scotch Egg", image: "images/scotch_egg.jpg" },
    { name: "Cornish Pasty", image: "images/cornish_pasty.jpg" },
    { name: "Beef Wellington", image: "images/beef_wellington.jpg" },
    { name: "Yorkshire Pudding", image: "images/yorkshire_pudding.jpg" },
    { name: "Sticky Toffee Pudding", image: "images/sticky_toffee_pudding.jpg" }
];

const carousel = document.getElementById("carousel");
let animationRunning = true;

let foodImages = [...foods, ...foods];

foodImages.forEach(food => {
    let img = document.createElement("img");
    img.src = food.image;
    img.alt = food.name;
    carousel.appendChild(img);
});

function stopCarousel() {
    if (!animationRunning) return;

    animationRunning = false;
    document.querySelector(".carousel").style.animation = "none";

    const randomFood = foods[Math.floor(Math.random() * foods.length)];

    setTimeout(() => {
        carousel.innerHTML = `<img src="${randomFood.image}" alt="${randomFood.name}">`;
        document.getElementById("foodTitle").textContent = randomFood.name;
    }, 300);
}
