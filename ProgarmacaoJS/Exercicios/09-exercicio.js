const nomeDog = "Dog1"
let contaVoltas = 0
const  voltaSatisfeito = 7


while (contaVoltas < voltaSatisfeito) {

    if (contaVoltas < 5 ){
        console.log(`${nomeDog} ainda quer passear ... continue!`)
    } else {
        console.log(`${nomeDog} está satisfeito! Deu ${contaVoltas} voltas`)
    }
    contaVoltas++
}
