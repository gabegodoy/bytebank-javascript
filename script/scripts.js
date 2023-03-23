import imprimeCotacao from "./imprimeCotacao.js";

/* DEFAULT FUNCTIONS */

function getHorario() {
    let data = new Date();
    let horario = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    return horario;
}

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados)
    })

    grafico.update();
}



/* USDOL TO BRL */

const graficoDolar = document.querySelector('#graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dólar',
            data: [],
            borderWidth: 1
        }]
    },
});


let workerDolar = new Worker('./script/workers/workerDolar.js'); 
workerDolar.postMessage('usd');

workerDolar.addEventListener('message', event => {
    let tempo = getHorario();
    let valor = event.data.ask;
    imprimeCotacao('dólar', valor, 'dolar');
    adicionarDados(graficoParaDolar, tempo, valor);
})



/* JPY TO BRL */

const graficoIene = document.querySelector('#graficoIene');
const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [],
        datasets : [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
}) 

let workerIene = new Worker('./script/workers/workerIene.js'); 
workerIene.postMessage('iene');

workerIene.addEventListener('message', event => {
    let tempo = getHorario();
    let valor = event.data.ask;
    imprimeCotacao('iene', valor, 'iene');
    adicionarDados(graficoParaIene, tempo, valor);
})


/* CNY TO BTL */

const graficoYuan = document.querySelector('#graficoYuan');
const graficoParaYuan = new Chart(graficoYuan, {
    type: 'line',
    data: {
        labels: [],
        datasets : [{
            label: 'Yuan',
            data: [],
            borderWidth: 1
        }]
    }
}) 

let workerYuan = new Worker('./script/workers/workerYuan.js'); 
workerYuan.postMessage('iene');

workerYuan.addEventListener('message', event => {
    let tempo = getHorario();
    let valor = event.data.ask;
    imprimeCotacao('yuan', valor, 'yuan');
    adicionarDados(graficoParaYuan, tempo, valor);
})