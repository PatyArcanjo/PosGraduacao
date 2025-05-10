// //funcao de flecha ou seta

// const saudacao2 = (nome) =>  {
//     `Olá, ${ nome }`
// }

// console.log(saudacao("Patrícia"))

const exibirNomeDoDog = (nome)  => {  
    console.log(nome)
}

const saudacoes = (nome) => `Olá, ${nome}!`
console.log(saudacoes('Teste2'))


const obterNomeDoDogFormatado  = (nome) => { 
    return nome.toUpperCase()  // ultima linha a ser executada na funcao
}


const exibirPorteDoDog = (porte = "ND") => { 
    console.log(porte)
}

 const obterObjetoDog = () => {
    return {
        nome: "Pipoca",
        peso: 6
    }
}

const obterListaObjetoDog = () => {
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

