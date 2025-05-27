

//Retornar nome do Pet em leteras maiusculas usando uma funcção Flexa 
const geradorDeTagsDeIdentificacao = nomePet  => { 
    return nomePet.toUpperCase()
}

//Verificar se o Pet é adotado ou não de acordo com o Porte e IDade
function verificarSePodeSerAdotado (idade,porte){
    let adocao = false

    if (idade == 1 && porte == 'M') {
        return adocao = true
    } else {
        return adocao = false
    }
}
//Retorna a quantidade de ração diária do Pet
function calcularConsumoDeRacao(nomePet , idade, peso) {
  let racaoPorPeso = 0

  if (peso == 14.5) {
    racaoPorPeso = peso * 300
    return racaoPorPeso;
  } else if (peso > 14.5) {
    racaoPorPeso = (peso * 300) * 2
    return racaoPorPeso;
  }
}
//Retorna o tipo de atividade do Pet de acordo com seu porte
function decidirTipoDeAtividadePorPorte (porte) {
    switch (true) {
      case  porte == "pequeno" :
          return ("brincar dentro de casa")
          break 
      case porte == "médio" :
        return ("brincar no jardim")
        break 
      case porte == "grande" :
        return ("brincar na rua")
        break 
    }
}
//retonar a palavra Pipoca quando o valor sorteado aleatoriamente for 5
async function buscarDadoAsync (){
    let numeroAleatorio = 0
 
    while (numeroAleatorio !== 5) {
        numeroAleatorio = Math.floor(Math.random() * 5) + 1; //gera um número inteiro entre 1 e 5.
        if (numeroAleatorio === 5) {
        return "Pipoca";
        }
    }
}
// exporta as funções
export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    decidirTipoDeAtividadePorPorte,
    calcularConsumoDeRacao,
    buscarDadoAsync
}
