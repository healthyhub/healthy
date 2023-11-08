

const data = [
    { title: "O que fazer em caso de uma queimadura?", link: "post6.html" },
    { title: "Como fazer a manobra de heimlich?", link: "post4.html" },
    { title: "Como fazer massagem cardíaca em um bebê?", link: "post2.html" },
    { title: "Como fazer uma massagem cardíaca?", link: "post1.html" },
    { title: "Como fazer uma tipoia caseira?", link: "post3.html" },
    { title: "Como ajudar alguém com a perna quebrada", link: "post5.html" },
    // Adicione mais itens conforme necessário
];

function onInput() {
    var val = document.getElementById("searchInput").value;
    var opts = document.getElementById('sugestoes-list').children;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].innerHTML === val) {
        
        document.getElementById("link").value = opts[i].getAttribute('link');
        break;
      }
    }
  }



function search() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const resultsList = document.getElementById("sugestoes-list");
    
    // Limpa a lista de resultados
    resultsList.innerHTML = "";
    
    // Verifica se há texto na caixa de pesquisa
    if (filter.trim() === "") {
        return; // Não há texto, então não há nada para pesquisar
    }
    
    // Filtra os itens com base no texto de pesquisa
    const filteredData = data.filter(item => item.title.toUpperCase().includes(filter));
    
    // Adiciona os itens filtrados à lista de resultados
    filteredData.forEach(item => {
        const li = document.createElement("option");
        li.textContent = item.title;
        li.setAttribute('link', item.link);
        
        // Adiciona um evento de clique para redirecionar para a página correspondente
        li.addEventListener("mouseup", function() {
            console.log("oi");
        });
        
        resultsList.appendChild(li);
    });
}

function pesquisar() {

    var searchTerm = document.getElementById("searchInput").value;

    if (searchTerm.trim() !== "") {

        var searchUrl = document.getElementById("link").value;
        console.log(searchUrl);

        window.open(searchUrl, "_self");

    } else {

        alert("Digite uma palavra para pesquisar.");

    }

}
