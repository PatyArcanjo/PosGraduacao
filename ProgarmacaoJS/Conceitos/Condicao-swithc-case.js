/*
    escolha (condicao):
      caso x: faca
      caso y: faca 
      caso z: faca
  
*/
const peso = 10


switch (true) {
    case  peso <= 10 :
        console.log("P")
        break   // interrompe o swithc se cair no case, se nao colocar o break mesmo entrando aqui segue para em todos os casas
    case peso >= 11 :
        console.log("M")
        break
    case peso >= 30 :
        console.log("G")  
        break
    default :
        console.log("ND")
    
}

switch (peso) {
    case 10:
      console.log('p')
      break
    case 20:
      console.log('m')
      break
    case 30:
      console.log('g')
      break
    case 40:
      console.log('gg')
      break
    default:
      console.log('ND') 
  }
  