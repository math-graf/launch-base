const nome = 'Matheus'
const peso = 86
const altura = 1.87
const imc = peso/(altura*altura)
if (imc >= 30) {
    console.log(`${nome}, você está acima do peso!`)
} else {
    console.log(`${nome}, você está dentro do peso normal.`)
}
console.log('=================================================')

const sexo = 'M'
const idade = 28
const contribution = 10
if ((idade + contribution) >= 95 || sexo == 'F' && (idade + contribution) >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}
