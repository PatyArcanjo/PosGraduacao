//hands-on 01

/*Gerador de tags de identificacao da coleira do cachorro , o dono irá informar:
nome
idade,
peso
raça,
se é adotado ou não

A tag deve ter:
O nome em letras maiusculas
A raça com a primeira letra maiúscula

*/

const nome = "Dog1" , raca = "vira lata"
let idade = 1 , peso = 1.2 , adotado = false

let nomeUpperCase = nome.toUpperCase()
let racaFirstUpper = raca.charAt(0).toUpperCase() + raca.slice(1).toLocaleLowerCase(1)

let racaFirstUpper2 = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLocaleLowerCase()
console.log(racaFirstUpper2)

const tag = [
    {
        nomePet: nomeUpperCase,
        peso: peso,
        raca: racaFirstUpper

    }]

console.log(tag)
console.log(` NomePet: ${ nomeUpperCase } , peso: ${ peso } , raca ${ racaFirstUpper }`)
console.table(tag)

