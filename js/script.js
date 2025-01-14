const days = [
    {
        day: "Dag 1",
        hotel: {
            name: "Hotel Amsterdam",
            image: "images/hotel-amsterdam.jpg",
        },
        stops: ["Tussenstop 1: Utrecht", "Tussenstop 2: Den Bosch"],
    },
    {
        day: "Dag 2",
        hotel: {
            name: "Hotel Brussel",
            image: "images/hotel-brussel.jpg",
        },
        stops: ["Tussenstop 1: Antwerpen", "Tussenstop 2: Gent"],
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