// script.js

let currentDay = 0;

// Laad data van JSON
fetch('data/route.json')
  .then(response => response.json())
  .then(data => {
    renderDay(data.days);
    
    document.getElementById('next').addEventListener('click', () => {
      if (currentDay < data.days.length - 1) {
        currentDay++;
        renderDay(data.days);
      }
    });

    document.getElementById('prev').addEventListener('click', () => {
      if (currentDay > 0) {
        currentDay--;
        renderDay(data.days);
      }
    });
  });

function renderDay(days) {
  const day = days[currentDay];
  const content = document.getElementById('content');
  content.innerHTML = `
    <h3>Hotel</h3>
    <p><strong>${day.hotel.name}</strong><br>${day.hotel.address}<br>
    <a href="${day.hotel.link}" target="_blank">Meer info</a></p>
    
    <h3>Tussenstops</h3>
    <ul>
      ${day.stops.map(stop => `
        <li>
          <strong>${stop.name}</strong>: ${stop.description}<br>
          <a href="https://www.google.com/maps?q=${stop.coordinates}" target="_blank">Bekijk op kaart</a>
        </li>
      `).join('')}
    </ul>
  `;
}
