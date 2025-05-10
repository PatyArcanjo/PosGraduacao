/*

receber : porte,nome e tempo disponível para atividade.

use condicional para decicir o tipo de atividade com base no porte:
    - pequeno -> brincar dentro de casa
    - médio -> caminhada no quarteirão
    - grabde -> correr no parque
    - qualquer outro -> porte inválido

depois uma condicional para ajustar a mensagen de acordo com o tempo: 
    - menor que 15 -> atividade rápida
    - de 15 a 30 -> tempo de atividade ideal 
    - acima de 30 -> hora da diversão 
*/
const nome = "Peter"
let porte = "Pequeno"
let tempoLivre = "1"
let tipoAtividade


// COM IF ELSE
// if (porte === "Pequeno") {
//     tipoAtividade = "Brincar dentro de Casa"
// } else if (porte === "Médio") {
//     tipoAtividade = "Caminhada no quaerteirão"
// } else if (porte === "Grande") {
//     tipoAtividade = "Correr no parque"
// } else {
//     tipoAtividade = "Porte Inválido"
// }


// COM SWITCH
switch  (porte) {
    case "Pequeno" : 
        tipoAtividade = "Brincar dentro de Casa"
        break
    case "Médio" : 
        tipoAtividade = "Caminhada no quaerteirão"
        break
    case "Grande" : 
        tipoAtividade = "Correr no parque"
        break
    default : "Porte Inválido"
}


if (tipoAtividade === "Porte Inválido" ) {
   atividade =("Porte Inválido, não pode brincar")
} else if (tempoLivre < 15) {
    atividade = ( ` Atividade Rápida: ${ tipoAtividade} ` )
} else if (tempoLivre > 15 && tempoLivre <= 30) {
    atividade = ( ` Atividade Rápida: ${ tipoAtividade} ` )
} else if (tempoLivre > 30) {
    atividade = ( ` Atividade Rápida: ${ tipoAtividade} ` )
}

console.log("--------------------------------------\n")
console.log(` Nome do Pet : ${ nome }`)
console.log(` Porte do Pet : ${ porte }`)
console.log(` Tempo Livre do Pet : ${ tempoLivre }`)


console.log(` \n Diária Recomendada para ${ nome } : ${ atividade } `)
console.log("\n--------------------------------------")
