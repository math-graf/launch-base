const users = [
    { nome: 'Matheus', tecnologias: ['JavaScript', 'Python'] },
    { nome: 'Felipe', tecnologias: ['HTML', 'CSS', 'WordPress'] },
    { nome: 'Jonas', tecnologias: ['Kotlin', 'JavaScript', 'PHP'] }
]

for (let i = 0; i < users.length; i++) {
    function tecs() {
        let tecnologies = ''
        for (let a = 0; a < users[i].tecnologias.length; a++) {
            if (a < users[i].tecnologias.length - 2) {
                tecnologies += `${users[i].tecnologias[a]}, `
            } else if (a == users[i].tecnologias.length - 2) {
                tecnologies += `${users[i].tecnologias[a]} `
            } else {
                tecnologies += `e ${users[i].tecnologias[a]}`
            }
        }
        return tecnologies
    }
    const skills = tecs()
    console.log(`${users[i].nome} trabalha com ${skills}.`)
}
console.log('')
console.log('=========================================')

function checkForCSS() {
    for (let i = 0; i < users.length; i++) {
        console.log(`O usuário ${users[i].nome} trabalha com CSS?`)
        let answer = 'O usuário não trabalha com CSS.'
        for (let a = 0; a < users[i].tecnologias.length; a++) {
            if (users[i].tecnologias[a] == 'CSS') {
                answer = 'Sim, o usuário trabalha com CSS.'
            }
        }
        console.log(answer)
    }
}

checkForCSS()
console.log('')
console.log('=====================================')

const users2 = [
    {
        nome: 'Matheus',
        receitas: [240.03, 530.80, 1020.85],
        despesas: [150.50, 841.20, 132.20]
    },
    {
        nome: 'Patrícia',
        receitas: [410.80, 874.32, 987.20],
        despesas: [458.51, 451.50, 700.32]
    },
    {
        nome: 'João',
        receitas: [879.20, 150.30,89.95],
        despesas: [487.32, 859.10, 1050.50]
    }
]

function calculaDespesa(receitas, despesas) {
    let saldo = receitas - despesas
    let signal = ''
    if (saldo >= 0) {
        signal = 'POSITIVO'
    } else {
        signal = 'NEGATIVO'
    }
    return signal + ' de ' + saldo.toFixed(2)
}

function somaNumeros(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i] 
    }
    return soma
}

for (let a = 0; a < users2.length; a++) {
    let saldoFinal = calculaDespesa(somaNumeros(users2[a].receitas), somaNumeros(users2[a].despesas))
    console.log(`${users2[a].nome} possui saldo ${saldoFinal}.`)
}

console.log('')
console.log('======================================')

// RESOLUÇÃO ALTERNATIVA

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNum(receitas)
    const somaDespesas = somaNum(despesas)

    return somaReceitas - somaDespesas
}

function somaNum(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}

for (let i = 0; i < users2.length; i++) {
    const saldo = (calculaSaldo(users2[i].receitas, users2[i].despesas)).toFixed(2)

    if (saldo >= 0) {
        console.log(`${users2[i].nome} possui saldo POSITIVO de ${saldo}.`)
    } else {
        console.log(`${users2[i].nome} possui saldo NEGATIVO de ${saldo}.`)
    }
}