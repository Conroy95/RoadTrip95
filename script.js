// Laad de gegevens uit het JSON-bestand
fetch('./data/roadtrip.json')
  .then(response => response.json())
  .then(data => {
    generateMenu(data);
    handleNavigation(data);
  });

// Menu genereren
function generateMenu(data) {
  const menu = document.getElementById('menu');
  data.forEach((day, index) => {
    const link = document.createElement('a');
    link.textContent = `Dag ${index + 1}`;
    link.href = `#`;
    link.dataset.day = index;
    menu.appendChild(link);
  });
}

// Navigatie logica
function handleNavigation(data) {
  const menuLinks = document.querySelectorAll('#menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const dayIndex = event.target.dataset.day;
      displayDay(data[dayIndex]);
    });
  });
}

// Toon daginformatie
function displayDay(day) {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>${day.title}</h2>
    <img src="${day.image}" alt="${day.title}">
    <p><strong>Hotel:</strong> ${day.hotel}</p>
    <p><strong>Coördinaten:</strong> <a href="https://www.google.com/maps?q=${day.coordinates}" target="_blank">${day.coordinates}</a></p>
    <h3>Tussenstops:</h3>
    <ul>
      ${day.stops.map(stop => `<li>${stop}</li>`).join('')}
    </ul>
  `;
}