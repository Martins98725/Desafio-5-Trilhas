document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-2.4859385, -43.128407], 16); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-2.4859385, -43.128407]).addTo(map)
        .bindPopup('Aqui está o seu destino!')
        .openPopup();
});
