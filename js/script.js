const days = [
    {
        day: "Dag 1 - 6 Mei",
        hotel: {
            name: "Hampton Inn by Hilton Los Angeles Airport",
            image: "images/1.jpg",
        },
        stops: ["Tussenstop 1: Utrecht", "Tussenstop 2: Den Bosch"],
    },
    {
        day: "Dag 2 - 7 Mei",
        hotel: {
            name: "Cambria Pines Lodge",
            image: "images/2.jpg",
        },
        stops: ["Tussenstop 1: Santa Barbara", "Tussenstop 2: Pismo Beach", "Tussenstop 3: Vandenberg Air Force Base"],
    },
    {
        day: "Dag 3 - 8 Mei",
        hotel: {
            name: "Best Western De Anza Inn united states",
            image: "images/3.jpg",
        },
        stops: ["Tussenstop 1: Santa Barbara", "Tussenstop 2: Pismo Beach", "Tussenstop 3: Vandenberg Air Force Base"],
    },
    // Voeg meer dagen toe zoals hierboven
];

const menu = document.getElementById("menu");
const content = document.getElementById("content");

// Menu vullen
days.forEach((day, index) => {
    const menuItem = document.createElement("li");
    menuItem.innerHTML = `<a href="#" data-day="${index}">${day.day}</a>`;
    menu.appendChild(menuItem);
});

// Inhoud tonen
function showDay(index) {
    const day = days[index];
    content.innerHTML = `
        <div class="day">
            <h2>${day.day}</h2>
            <div class="hotel">
                <img src="${day.hotel.image}" alt="${day.hotel.name}">
                <div>
                    <h3>${day.hotel.name}</h3>
                </div>
            </div>
            <div class="stops">
                <h4>Tussenstops:</h4>
                <ul>
                    ${day.stops.map(stop => `<li>${stop}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
}

// Eerste dag tonen
showDay(0);

// Klik op menu-items
menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        const dayIndex = e.target.getAttribute("data-day");
        showDay(dayIndex);
    }
});
