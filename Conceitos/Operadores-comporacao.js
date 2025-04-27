/*

Retorna valores TRUE ou FALSE

>   -  maior que
>=  - maior e igual que
<   - menor 
<=  - menor e igual que
==  - igualdade somente de valores
!= - diferença somente de valores
=== - igualdade de valroes e tido de dado


- de comparação (==, ===, !=, !==, >, <, >=, <=)


*/

console.log(1 > 2) //retorna false
console.log(1 < 2) //retorna true

console.log(`10 > 5 = ${ 10 > 5 }`) //10 > 5 = true
console.log(`10 > 20 = ${ 10 > 20 }`) //10 > 20 = false


//igualdade somente de valores
console.log(`1 == "1" = ${ 1 == "1" }`) //1 == "1" = true
console.log(true == 1) //true
console.log(false == 0) //false

//igualdade  de valores e tipos
console.log(`1 === "1" = ${ 1 === "1" }`) //11 === "1" = false
console.log(true === 1) //false
console.log(false ===  0) //false

// diferença somente de valores
console.log(`10 != 20 = ${ 10 != 20 }`) //10 != 20 = true
console.log(`10 !=  "10" = ${ 10 != "10" }`) //10 !=  "10" = false

// diferença somente de valores e tipo da variável
console.log(`10 !== "10" = ${ 10 !== "10" }`) //10 !== "10" = true