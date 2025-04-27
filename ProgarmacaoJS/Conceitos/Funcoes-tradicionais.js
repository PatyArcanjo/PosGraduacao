/*Funcoes tradicionais ou nomeadas

function saudacao(nome) {
    return ` Olá, ${ nome } ! ` ;
}

console.log(saudacao ("Patrícia"));
*/

function exibirNomeDoDog(nome) {  // funcao nomeado com parâmetro sem retorno
    console.log(nome)
}

function obterNomeDoDogFormatado (nome) {  // funcao com retorno
    return nome.toUpperCase()  // ultima linha a ser executada na funcao

}

//funcao nomeado com paramento com valor paramentro e sem retorno.
function exibirPorteDoDog (porte = "ND") {  // defini um valor padrao caso nba chamada da funcao nao seja passado nada, ira usar ND
    console.log(porte)
}

function obterObjetoDog() {
    return {
        nome: "Pipoca",
        peso: 6
    }
}


function obterListaObjetoDog() {
    return [{
        nome: "Pipoca",
        peso: 6
    },
    {
        nome: "Ada",
        peso: 7
    }
]
}

exibirNomeDoDog("Pipoca")
console.log(obterNomeDoDogFormatado("peter"))
exibirPorteDoDog()
console.log(obterObjetoDog() )
console.log(obterListaObjetoDog())


function listarNomesDeDogs() {
    const nomes = [
      'Pituca',
      'Marea',
      'Anderson'
    ]
    
    console.log(`Passou pela função listarNomesDeDogs`)
  
    return nomes
  }

  console.log(`--------`)

  listarNomesDeDogs() //nao exibi nada
  
  const nomesDeDogs = listarNomesDeDogs() // nao exibe naada
  console.log(listarNomesDeDogs()) // exibe a lista de nomes

// //funcao de flecha ou seta

// const saudacao2 = (nome) =>  {
//     `Olá, ${ nome }`
// }

// console.log(saudacao("Patrícia"))
