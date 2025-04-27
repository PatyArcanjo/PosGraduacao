const nomeDog = 'Peter'
let idade = 1
let porte = 'x'

//opcaop 1
// let adocao  =  idade >= 2 ? 'Dog pode ser Adotado' : 'Dog não pode ser Adotado'
// console.log(adocao)

//opcao 2
// let adocao  =  idade >= 2 
//     ? 'Dog pode ser Adotado' 
//     : porte === 'pequeno'
//     ? 'Dog pode ser Adotado com menos de 2 anos pois tem porte pequeno' 
//     : 'Dog não pode ser Adotado, idade minina para adoção é de 2 anos'
// console.log(adocao)

//opcao 3
// const adocao2 = idade >= 2 || porte === 'pequeno'
// console.log(adocao2)

//opcao 4

validaAdocao (1, 'pequeno')
validaAdocao (2, 'pequeno')
validaAdocao (2, 'medio')
validaAdocao (1, 'medio')

console.log(validaAdocao)

function validaAdocao (idade, porte) {
    let adocao  =  idade >= 2 
    ? 'Dog pode ser Adotado' 
    : porte === 'pequeno'
    ? 'Dog pode ser Adotado com menos de 2 anos pois tem porte pequeno' 
    : 'Dog não pode ser Adotado, idade minina para adoção é de 2 anos'

    console.log(adocao)
}