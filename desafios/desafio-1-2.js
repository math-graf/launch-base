const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, número ${empresa.endereço.numero}.`)
console.log('')
console.log('===========================================')

const programador = {
    nome: 'Matheus',
    idade: '28',
    conhecimento: [{
        nome: 'Python',
        especialidade: 'Data Science'
    },
    {
        nome: 'JavaScript',
        especialidade: 'Web/Mobile'
    }]
}

console.log(`O programador ${programador.nome} tem ${programador.idade} anos e é especialista em ${programador.conhecimento[0].especialidade} utilizando linguagem ${programador.conhecimento[0].nome}. Além disso, ${programador.nome} também é proficiente em ${programador.conhecimento[1].nome} no desenvolvimento ${programador.conhecimento[1].especialidade}.`)