/*

++ incremento
-- decramento

*/

//inncremento
let pesoDog = 10
console.log(pesoDog)

pesoDog++
console.log(pesoDog)

//decremento
let pesoTutor = 100
console.log(pesoTutor)

pesoTutor--
console.log(pesoTutor)

//ternário - uma expressao com uma condicional que se verdadeira ele irá executar , senao acao falsa

//<condicao> ? <acao se verdadeiro> : <acao se falso> 

const porte =  pesoDog <= 10 ? 'pequeno' : 'medio'
console.log(pesoDog) //11
console.log(porte) //medio

let pesoDog2 = 21
const porte2 = pesoDog2  <= 10 //se if
        ? 'pequeno'
        : pesoDog2 <= 20 // senao se  - else if
        ? 'medio'
        : 'grande' //senao

console.log(porte2)

//arredondamento

console.log(Math.floor(5.8)) // sempre pra baixo
console.log(Math.round(5.8)) //sempre pro mais próximo

// limita numero de casas decimais
console.log(2.3216.toFixed(3))


//
