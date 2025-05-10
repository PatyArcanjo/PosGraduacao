

/*
até 10 kg pequeno , acima disso médio
*/


let pesoDog = 20
const nome = "Peter"
//Opcao 1 - Operador Ternário SEM FUNCAO 
console.log ("--------Opcao1--------")
const classificacaoPorte = pesoDog <= 10 ?  'Pequeno' : 'Médio'
console.log(` Nome: ${ nome }}`)
console.log(` Classificação do Porte: ${classificacaoPorte} `)
console.log(` Peso : ${ pesoDog}}`)

//Opcao 1 - Operador Ternário COM FUNCAO 
console.log ("--------Opcao1.1--------")

classificarPorte ("Pantera",54)

function classificarPorte (nome, pesoDog) {
    const porte = pesoDog <= 10 ?  'Pequeno' : 'Médio'
    console.log(` Nome: ${ nome }`)
    console.log(` Classificação do Porte: ${ porte } `)
    console.log(` Peso : ${ pesoDog}}`)
}




//Opcao 2 - IF ELSE
console.log ("--------Opcao2--------")
if (pesoDog <= 10){
    console.log("P")
} else {
    console.log("M")
}

//Opcao 3 - SWITCH
console.log ("--------Opcao3--------")
switch (true) {
    case pesoDog <= 10 :
        console.log("p")
        break
    case pesoDog > 10 :
        console.log("m")
}