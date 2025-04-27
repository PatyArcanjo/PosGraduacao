/*if , else, else if (se, entao senoa)
//switch , case (escolha, caso)
// se condicao , se verdadeira executa acao dentro do IF  , senao executa acao dentro do ELSE

condicao (se verdadeira)
 acao dentro do IF
senao se outra

*/

// IF ELSE

if (10 > 5) {
    console.log("valor é maior")
} else { 
    console.log("valor é menor")

}

const idade = 3
const porte = "P"

if (idade >= 2) {
    console.log("Pode ser adotado pela idade")
} else if (porte === "P") {
    console.log("Pode ser adotado pelo porte")
} else {
    console.log("Não pode ser adotado")
}