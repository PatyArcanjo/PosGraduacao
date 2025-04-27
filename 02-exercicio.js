
const nome=  "          Maria Jose    "


console.log(nome) // vem com espacos
console.log(nome.trim())  // tira os espacos
console.log(nome.trim().split(" "))

let valida =  (nome.trim().split(" ").length === 1);

console.log (valida)

