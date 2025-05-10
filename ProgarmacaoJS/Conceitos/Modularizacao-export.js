/*

--Sintaxe commonJS:   => nao é mais usado
    modlue.exports = {}
    require('')


--ESM - acmascript standart modules
    export{}   
   import  => quando quer importar uma funçao ou arquivo

    npm init -y => O NPM é uma ferramenta do Node. js para o gerenciamento de pacotes. Ele permite instalar,
   desinstalar e atualizar dependências em uma aplicação por meio de uma simples instrução na linha de comando.

   incluir no  packgae.json o  "type": "module", esse tipo é o ESM

   npm -> vem junto com o node

   node 
    - v8 -> motor de execucao (fora do browser)
    - npm - que é um gerenciador de pacotes/bilbiotecas 
        - com ele podemos iniciar o projeto com npm , agora vou poder usar a capacidade de gerenciar pacotes com node(, instalar,executar,importa, exportar)
            - install - instalar o pacote
            - npx executar uma pacote ja instalado 
*/ 

const brinquedos = ["Osso" , "Bola"]


function exibirNomePet (paramNomePet) {
    console.log(`Nome do pet é ${paramNomePet}`)

}

function exibirIdadePet (parmaIdadePet){
    console.log(`Idadde do Pet é: ${parmaIdadePet}`)
}

// exibirNomePet("Pitoco")
// exibirNomePet("Peggy")
// exibirIdadePet(11)

// vai permitir usar essa função em qualquer parte do projeto

export {  
    exibirNomePet , 
    exibirIdadePet,
    brinquedos
}  


