document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([-7.3327604, -47.4716944], 16); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-7.3327604, -47.4716944]).addTo(map)
        .bindPopup('Aqui está o seu destino!')
        .openPopup();
});
