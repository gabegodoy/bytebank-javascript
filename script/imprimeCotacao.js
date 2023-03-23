
function imprimeCotacao(nome, valor, listaId) {
    const lista = document.querySelector('#' + listaId + '[data-lista]');
    lista.innerHTML = '';

    const plurais = {
        "dólar" : "dólares",
        "iene" : "ienes",
        "yuan" : "yuans",
    }

    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplicador} ${multiplicador === 1 ? nome : plurais[nome]} : R$${(valor * multiplicador).toFixed(2)}`;
        lista.appendChild(listaItem);
    }
}

export default imprimeCotacao;