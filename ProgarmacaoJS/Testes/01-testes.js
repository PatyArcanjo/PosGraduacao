/*
describe    -> agrupador de testes , tem o titulo e ele recebe um funcao e a funcao tem o códiog do teste

it          -> implementaçao do teste

para rodar os teste -> npx mocha {pasta}/nome do arquivo
npx mocha Testes/01-testes.js 

resultado 


  Teste do Projeto
    ✔ primiero teste


  1 passing (3ms)

  ASSERTION/ ASSERCAO -> VERIFICAR QUE UM COMPORTAMENTO E É O EXPERADO''

  import assert from 'node:assert'

  bibioteca de asserao - CHAI
  


*/
import {exibirNome} from '../Testes/testes-de-unidade.js'
import assert from 'node:assert'

describe ('Teste do Projeto', ()  => {   // teste cycle

    it ('Exibir Nome com letras MAIUSCULAS ' , () => {       // teste case
        assert.strictEqual(exibirNome('Patricia'), 'PATRICIA')  // verificar se o valor atual é igual valor esperado.

    })

    it ('segundo teste' , () => {

    })
    it ('segundo teste' , () => {
        throw new Error()

    })
})
