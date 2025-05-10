/*
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.  
*/

/*
Retorne o número de vogais no texto fornecido. Considerando a,e,i,o, u como vogais para este kata. 
*/

const lista =[1, 2.5, 3, "B", 5, 6.0, 7, "A","C", ]

listaInteiros = (retornaInteiros(lista)) 

console.log("------------------------------\n")
console.log (`A lista informada foi: ${lista} \n`)
console.log(`A lista somente com números inteiros é: ${listaInteiros} \n`)
console.log("------------------------------\n")

function retornaInteiros (lista) {
    inteiros = (lista.filter(Number.isInteger))
    return(inteiros)
}


//------------------------------------------------------------//

const texto = " TesARUOPTe x"
const textoSemEspaco = (formatarTexto (texto))
const tamanho =  (textoSemEspaco.length);

total = (contarVogais(textoSemEspaco, tamanho))

console.log("------------------------------\n")
console.log(`O texto informado foi: ${ texto }`)
console.log(`O total de vogais do texto: ${ total } \n`)
console.log("------------------------------")   

function contarVogais (textoSemEspaco, tamanho) {
    let i = 0;
    let totalVogais = 0;

    while ( i < tamanho) {
        if (textoSemEspaco.charAt(i) == "a" || textoSemEspaco.charAt(i) == "e" || textoSemEspaco.charAt(i) == "i" || textoSemEspaco.charAt(i) == "o" || textoSemEspaco.charAt(i) == "u") {
            totalVogais++        }
        i++; 
      }
    return(totalVogais)
 }

 function formatarTexto(texto){
         return texto.trim().replace (" ", "" ).toLocaleLowerCase()
 }


 /* 
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para 
este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas 
não fazem parte desse desafio.
*/

const contarVogais = (texto) => {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    return texto.split('').filter(letra => vogais.includes(letra)).length
  }
  
  // Exemplo de uso
  const texto1 = "hoje o dia esta muito bonito e tranquilo"
  const quantidadeDeVogais = contarVogais(texto)
  
  console.log("=== RESULTADO DA CONTAGEM ===")
  console.log(`Texto analisado: "${texto}"`)
  console.log(`Quantidade de vogais encontradas: ${quantidadeDeVogais}`)
  console.log("=============================")
  