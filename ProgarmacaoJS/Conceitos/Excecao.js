/*
tentar {

///conexao com o banco (exemplo)
}pegar (erro/excecao)
    // salvar a excecao em algum lugar
    //exibr
}

lancar  = throw



*/

try {
    console.log("Tentando alimentar o Pet...")
    throw new Error('mensagem que irá exibir no erro ')  // throw está forçando um erro e com isso irá cair no catch
} catch (excecao) { //o excecao pode ter qualquer nome , ex patricia, teste , msgerro
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)
} finally {
    console.log("SEMPRE SEREI EXECUTADO") //Independete de ocorrer o erro ou nnao

}