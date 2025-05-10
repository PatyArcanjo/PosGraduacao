/*

recebe a quantidade de pesticos e de 1 x até o dog estiver satisfeito

exiba
cada vez que um petisco for entregue
quando o dog estiver satisfeito

variáveis com a quantidade de petiscos
dog estará  satisfeito quando terminar os pestiscos.

*/

const qtdPetiscos = 10

for (let contador = 0; contador <= qtdPetiscos; contador++){
    console.log(`Total de Petiscos: ${qtdPetiscos}`)
    console.log(`O petisco foi entregue ${contador} vezes`)
    console.log("----------------------------------\n")   
}

console.log("O Dog está safisfeito!}\n") 


//-------Funcao

darPetiscos(qtdPetiscos)
console.log("-----------O Dog está safisfeito!}\n") 

function darPetiscos (quantidade) {
    for (let contador = 0; contador <= qtdPetiscos; contador++){
        console.log(`Total de Petiscos: ${qtdPetiscos}`)
        console.log(`O petisco foi entregue ${contador} vezes`)
        console.log("----------------------------------\n")   
    }
}

// outros exemplos de aulunos
// esses ... passa a lista como argumento ai nao precisa transaformar em array - [ 'Biscoito', 'Galinha', 'Porco', 'Queijo', 'Ração' ]
function alimentar(...treats) {
    console.log(treats)
    let chance = 0; // Starting chance of being full
    let isFull = false;
  
    for (let i = 0; i < treats.length; i++) {
      chance += 5; // Increase the chance by 5% per treat
      const random = Math.random() * 100; // Random number between 0 and 100
  
      console.log(`Petisco ${i + 1}: Cachorro comeu "${treats[i]}". Chance de estar cheio: ${chance}%.`);
  
      if (random < chance) {
        console.log("O cachorro está cheio!");
        isFull = true;
        break;
      } else {
        console.log("O cachorro ainda está com fome!");
      }
    }
  
    if (!isFull) {
      console.log("Comeu todos os petiscos, mas ainda está com fome!");
    }
  }
  
  // Example usage:
  alimentar("Biscoito", "Galinha", "Porco", "Queijo", "Ração");

//2

  const alimentarDog = (quantidadePetiscos) => {
    for (let i = 1; i <= quantidadePetiscos; i++) {
        console.log(i < quantidadePetiscos ? `Ganhei ${i} petisco. Quero mais!` : 'Ganheio o 4 Agora estou satisfeito!');
    }
}
alimentarDog(6);