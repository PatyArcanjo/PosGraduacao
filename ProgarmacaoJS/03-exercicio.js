
const nome=  "          Maria TRSTE @@@   "

// PATRICIA CODIGO 

// console.log(nome) // vem com espacos
// console.log(nome.trim())  // tira os espacos
// console.log(nome.trim().split(" "))

// let valida =  (nome.trim().split(" ").length === 1);

// console.log (valida)


///exemplos da aula 

let nomeFormatado = removerCaracteresEspecias(nome)

nomeFormatado = (nomeFormatado.trim().split(" "));
nomeValido = validarNomeValido(nomeFormatado)



console.log(nomeFormatado)
console.log(nomeValido)

function removerCaracteresEspecias (nome) {
    return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // regex é esse texto /[^a-zA-ZÀ-ÿ\s]/g
}

function validarNomeValido (nomeFormatado) {
    return nomeFormatado = nome.length === 1
}