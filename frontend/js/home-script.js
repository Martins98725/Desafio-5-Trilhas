document.addEventListener('DOMContentLoaded', () => {
    const url = 'http://localhost:3333/api/destinos';
    let destinos = [];

    function displayDestinos() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                destinos = data
                displayDestinosFiltrados(destinos)
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }
    function displayDestinosFiltrados(filteredDestinos) {
        const destinoContainer = document.getElementById('destinoContainer');
        destinoContainer.innerHTML = '';

        filteredDestinos.forEach(destino => {
            const destinoDiv = document.createElement('div');
            destinoDiv.className = 'destination';

            const link = document.createElement('a');
            link.href = `${destino.nome.replace(/\s+/g, '_')}.html?id=${destino.id}`; 
            link.innerText = 'Clique aqui para saber mais!';

            const imagem = document.createElement('img');
            imagem.src = destino.imagem_url;
            imagem.alt = destino.nome;

            destinoDiv.appendChild(imagem);
            destinoDiv.appendChild(link);

            destinoContainer.appendChild(destinoDiv);
        });
    }
    function searchDestinos(query) {
        const filteredDestinos = destinos.filter(destino =>
            destino.nome.toLowerCase().includes(query.toLowerCase())
        );
        console.log(destinos)
        displayDestinosFiltrados(filteredDestinos);
    }

    function setupSearch() {
        const inputPesquisa = document.getElementById('inputPesquisa');
        const botaoPesquisa = document.getElementById('botaoPesquisa');

        botaoPesquisa.addEventListener('click', () => {
            const query = inputPesquisa.value.trim();
            searchDestinos(query);
        });
        botaoPesquisa.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = inputPesquisa.value.trim();
                searchDestinos(query);
            }
        });
    }

    setupSearch();
    displayDestinos();
});
