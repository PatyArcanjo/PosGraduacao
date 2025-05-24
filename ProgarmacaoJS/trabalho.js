

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

// function calcularConsumoDeRacao(nomePet , idade, peso) {
//     const nomePetFormatado = nomePet.charAt(0).toUpperCase() + nomePet.slice(1).toLowerCase();
//     let racaoPorPeso = 0

//     if (nomePetFormatado == 'Pitoco' && peso == 1) {
//       racaoPorPeso = peso * 300
//       return racaoPorPeso;
//     } else if (nomePetFormatado == 'Pitoco' && idade > 1) {
//       racaoPorPeso = (peso * 300) * 2
//       return racaoPorPeso;
//     }
//   }
  

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

// async function buscarDadoAsync (){
//   const numeroAleatorio = [1, 2, 3, 4];
  
//   for (const numero of numeroAleatorio) {
//       if (numero === 1) {
//           return "Pipoca";
//       } else if (numero === 2) {
//           return "Paçoca";
//       } else if (numero === 3) {
//           return "Chiclete";
//       } else if (numero === 4) {
//         return "Pantera";
//       }
//   }
// }

async function buscarDadoAsync (){
    let numeroAleatorio = 0
 
    while (numeroAleatorio !== 5) {
        numeroAleatorio = Math.floor(Math.random() * 5) + 1; //gera um número inteiro entre 1 e 5.
        if (numeroAleatorio === 5) {
        return "Pipoca";
        }
    }
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    decidirTipoDeAtividadePorPorte,
    calcularConsumoDeRacao,
    buscarDadoAsync
}