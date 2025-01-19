// script.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("roadtrip-container");

  roadtripData.forEach(day => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    // Dagelijkse titel
    dayDiv.innerHTML = `
      <h2>Day ${day.day}: ${day.from} to ${day.to}</h2>
      <h3>Stops:</h3>
      <ul>
        ${day.stops.map(stop => `
          <li>
            <strong>${stop.name}</strong> (Coordinates: ${stop.coords})
            <br><br>
          </li>
        `).join('')}
      </ul>
      <h3>Hotel:</h3>
      <p>
        <strong>${day.hotel.name}</strong> (Coordinates: ${day.hotel.coords})
        <br>
        <img src="${day.hotel.img}" alt="${day.hotel.name}">
      </p>
    `;

    container.appendChild(dayDiv);
  });
});