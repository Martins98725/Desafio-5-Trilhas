document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-2.403749,-44.4163036], 16); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-2.403749,-44.4163036]).addTo(map)
        .bindPopup('Aqui está o seu destino!')
        .openPopup();
});
