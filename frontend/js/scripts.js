document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const url = `http://localhost:3333/api/destinos/${id}`;

    fetch(url)
        .then(response =>  {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(destino => {
            document.getElementById('nomeDestino').textContent = destino.nome;
            document.getElementById('descricaoDestino').textContent = destino.descricao;
            document.getElementById('imagemDestino').src = destino.imagem_url;
            document.getElementById('imagemDestino').alt = destino.nome;

            const atrativosContainer = document.getElementById('atrativos');
            atrativosContainer.innerHTML = '';
            if(Array.isArray(destino.Atrativos) && destino.Atrativos.length > 0){
                destino.Atrativos.forEach(atrativo => {
                    const atrativoDiv = document.createElement('div');
                    atrativoDiv.className = 'atrativo';
    
                    const nome = document.createElement('h3');
                    nome.textContent = atrativo.nome;
    
                    const descricao = document.createElement('p');
                    descricao.textContent = atrativo.descricao;

                    const dica = document.createElement('p');
                    dica.textContent = atrativo.dicas;
    
                    const imagem = document.createElement('img');
                    imagem.src = atrativo.imagem_url;
                    imagem.alt = atrativo.nome;
    
                    atrativoDiv.appendChild(nome);
                    atrativoDiv.appendChild(dica)
                    atrativoDiv.appendChild(descricao);
                    atrativoDiv.appendChild(imagem);
    
                    atrativosContainer.appendChild(atrativoDiv);
                });
            } 
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
