const user = {
    name: 'Matheus',
    transactions: [],
    balance: 0
}

function createTransaction(operation) {
    user.transactions.push(operation)
    if (operation.type == 'credit') {
        user.balance += operation.value
    } else {
        user.balance -= operation.value
    }
}

function getHigherTransactionByType(typeOfTransaction) {
    let higherTransaction = 0
    for (let p of user.transactions) {
        if (p.type == typeOfTransaction) {
            if (p.value > higherTransaction) {
                higherTransaction = p.value
            }
        }
    }
    return console.log(`The highest ${typeOfTransaction} transaction is ${higherTransaction.toFixed(2)}.`)
}

function getAverageTransactionValue() {
    let soma = 0
    let numberOfValues = 0
    for (let transaction of user.transactions) {
        soma += transaction.value
        numberOfValues++
    }
    return console.log(`The average transaction value is ${(soma / numberOfValues).toFixed(2)}.`)
}

function getTransactionsCount() {
    let numberOfTransactions = {
        credit: 0,
        debit: 0
    }

    for (let typeOfTransaction of user.transactions) {
        if (typeOfTransaction.type == 'credit') {
            numberOfTransactions.credit++
        } else {
            numberOfTransactions.debit++
        }
    }
    return console.log(numberOfTransactions)
}

createTransaction({ type: 'credit', value: 150})
createTransaction({ type: 'debit', value: 350})
createTransaction({ type: 'debit', value: 100})
createTransaction({ type: 'credit', value: 560})

console.log(`The account balance for ${user.name} is ${user.balance.toFixed(2)}`)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')
getAverageTransactionValue()
getTransactionsCount()