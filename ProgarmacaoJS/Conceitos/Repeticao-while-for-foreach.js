/*

while  (condicional) -> usado muito para true e false
for (contado) -> usado para um quantidade de x definida no contador
foreach (para lista) => mais usado

*/


//While
let quantidadeAteFicarCansado = 5
let quantidadeDeVoltaAtual = 0

while (quantidadeDeVoltaAtual < quantidadeAteFicarCansado) {
    console.log('Dar mais uma volta')
    quantidadeDeVoltaAtual++
}

//For

const quantidadeCalculada = 3

for (let quantidadePetiscos = 0; quantidadePetiscos < quantidadeCalculada;  quantidadePetiscos++) {
   
}

const gatos = ["Gato1","Gato2","Gato3"]

for (let indice = 0; indice < gatos.length; indice++) {
    console.log(`Dando o Petisco parao ${ gatos[indice]}`)
}


//Foreach

const listaAlunos = ["Patricia","Lele","Leo"]



listaAlunos.forEach(aluno => {
    console.log(`Nome Aluno ${aluno}`)
})


const listaAlunosNotas = [
    {   nome : "Patricia",
        nota: 7

    },
    {   nome : "Leo",
        nota: 7

    },
    {   nome : "lele",
        nota: 5

    }

]

listaAlunosNotas.push({   
    nome : "JOSE",
    nota: 5
}) 

console.log(listaAlunosNotas)

listaAlunosNotas.forEach(aluno => {
    console.log(`Nome Aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})



listaAlunosNotas.forEach(aluno => {
    if (aluno.nota < 7) {
        console.log(`Aluno ${aluno.nome} tem a nota ${aluno.nota} e precisa de trabalho extra`)
    }

})

listaAlunosNotas.forEach(( aluno, index) => {
    console.log(index)

    if (aluno.nota < 7) {
        console.log(`Aluno ${aluno.nome} tem a nota ${aluno.nota} e precisa de trabalho extra`)
    }

})

//---------------------
