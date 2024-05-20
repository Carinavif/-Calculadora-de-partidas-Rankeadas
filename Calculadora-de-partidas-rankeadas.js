console.log ("## Desafio de partidas rankeadas ##");

let relacaoElo = relacaoVitoriasDerrotas(45, 14)
let nivel = " "

function relacaoVitoriasDerrotas(numVitorias, numDerrotas) {
    let saldoVitorias = numVitorias - numDerrotas; 
    return saldoVitorias;
}

function exibeElo() {
    console.log("O herói tem saldo de " + relacaoElo + " e está no nível de " + nivel);
}

if (relacaoElo < 10 ) {
    nivel = "Ferro"
} else if (relacaoElo <= 11 && relacaoElo <= 20) {
    nivel = "Bronze"
} else if (relacaoElo <= 20 && relacaoElo <= 50) {
    nivel = "Prata"
} else if (relacaoElo <= 51 && relacaoElo <= 80) {
    nivel = "Ouro"
} else if (relacaoElo <= 81 && relacaoElo <= 90) {
    nivel = "Diamante"
} else if (relacaoElo <= 91 && 100) {
    nivel = "Lendário"
} else if (relacaoElo >= 101) {
    nivel = "Imortal"
}

exibeElo()