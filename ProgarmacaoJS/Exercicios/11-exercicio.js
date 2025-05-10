


const listaBrinquedos = ["Bola", "Osso", "Corda","Sino"]

listaBrinquedos.forEach( brinquedo => {
    console.log(`O brinqudo entregue parao Dog foi : ${brinquedo}`)
})

const listaBrinquedosNomes = [
    {
    nome: "Dog1",
    item: "Bola"
    },

    {
     nome: "Dog2",
    item: "Osso"
    },

    {
    nome: "Dog2=3",
    item: "Corda"
    },

    {
    nome: "Dog4",
    item: "Sino"
    }
]

listaBrinquedosNomes.forEach (brinquedo2 => {
    
    console.log(`O brinqudo entregue parao ${brinquedo2.nome} foi : ${brinquedo2.item} -------`)
})