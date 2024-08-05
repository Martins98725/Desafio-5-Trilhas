document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-2.8601123, -44.0595541], 16); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-2.8601123, -44.0595541]).addTo(map)
        .bindPopup('Aqui está o seu destino!')
        .openPopup();
});
