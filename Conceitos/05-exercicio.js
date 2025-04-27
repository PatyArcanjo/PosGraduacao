let estoqueRacao = 1500 //gramas 
let peso = 5  //Kilos
const nome = "Peter"

//calcule a quantiade diaária de raçao com base na seguinte formula : gramas por dia = peso x 30


//Alternativa SEM FUNCAO
// let gramasDia = (peso * 30)
// console.log(` Diária Recomendada para o ${ nome } é de ${ gramasDia } gramas `)
// calularDuracaoRacao(estoqueRacao, gramasDia)

// console.log(` Estoque atual de ração irá durar ${ duracaoRacao.toFixed(0) } dias`)
// let duracaoRacao = estoqueRacao / gramasDia
// console.log(` Estoque atual de ração irá durar ${ duracaoRacao.toFixed(0) } dias`)

//Alternativa COM FUNCAO

calcularConsumodaRacao("Peter", 1500, 5)
function calcularConsumodaRacao (nome, estoqueRacao, peso) {
    let gramasDia = peso * 30
    let duracaoRacao = estoqueRacao / gramasDia

    console.log("------------------------------")
    console.log(` Diária Recomendada para o ${ nome } é de ${ gramasDia } gramas `)
    console.log(` Estoque atual de ração irá durar ${ duracaoRacao.toFixed(0) } dias`)
    console.log("------------------------------")

}