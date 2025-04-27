/*
    &&  - and  
    ||  - or 
    !   - not



*/

console.log(true && true) //true
console.log(true && false) //false
console.log(false && false) //false

const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length == 1
const nomePossuiAteDezCaracteres = nomeDog.lengjt <= 10

console.log(nomePossuiApenasUmaPalavra ) //true
console.log(nomePossuiAteDezCaracteres ) //false
console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) //false


// OR -ou

const dog = {
    adotado: false,
    peso: 5.3
}

console.log(dog.adotado || dog.peso < 10) //true



//NOT
console.log(true) //true

console.log(!true) //false
/*
    +  - soma   
    -  - subtraçao
    * - multipliccao
    / - divisao
    % - resto
    ** - exponencial

*/

console.log(1 + 1)
console.log(10 - 7)
console.log(2 / 2)

