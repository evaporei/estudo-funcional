function double(x) {
    return x + x
}

// pure
function multiply (x, y) {
    return x * y
}

// f(x) = 2
// f(2) = 2
// f(20) = 2
// f(50) = 2

function abc (x) {
    let y = 1
    y = y + 1
    return y
}

multiply(2, 3)// 6
multiply(4, 3)// 12
multiply(6, 3)// 18

multiply(2, 3)
multiply(2, 3)
multiply(2, 3)
multiply(2, 3)

// impure
function xyz() {
    // const file = fs.readFileSync()
    // datab
    return 2 * 2
}

// const sumpimpa = require('./supimpa')
// const { abc } = require('./supimpa')

// sumpimpa.abc()

const supimpa = {
    abc: () => {
        function xyz () {
        }
    }
}

// xyz()?

// app.post('/products', createController)

const logic = (data) => ({
    ...data,
    percentage: data.x + data.y,
    id: cuid(),
})

const createController = (req, res) => {
    const product = logic(req.body)// { name: , xxx: }

    // database.products.create(product)
}

function split(amount, recipients) {
    // return [...]
}

// Side Effects
// 1. Mutar
// 2. Input/Output (IO)
//  - HTTP
//  - Banco de dados
//  - File System
//  - qqr coisa fora do programa

let j = 0
xyz()

// j == 2

function addA (obj) {
    obj.a = 3
}

let contador = 3

// for (let i = 0; i <= 10; i++) {
//     new Thread(lerArquivoEBlaBlaBla)
// }

// lerArquivoEBlaBlaBla()
// lerArquivoEBlaBlaBla()
// lerArquivoEBlaBlaBla()
// lerArquivoEBlaBlaBla()
// lerArquivoEBlaBlaBla()
// lerArquivoEBlaBlaBla()
// lerArquivoEBlaBlaBla()

// 1. Ela só usa o que recebe por parâmetro
// 2. Ela não muta nada que veio dos parâmetros
// 3. Toda vez que chamar a função com os mesmos parâmetros, da o mesmo resultado
// 4. Transparência referencial
//  - fnA(2, 3)// 6
// 5. Não realizar efeitos colaterais (side effects)
const toLowerCase = {
//args: return
    A: 'a',
}

// toLowerCase[['A', 'B']]

// toLowerCase('A', 'B')
// args = ['A', 'B']

// memoize :: Function -> Function
const memoize = (fn) => {
    const memory = {}

    return function(...args) {
        const key = String(args)

        if (memory.hasOwnProperty(key)) {
            return memory[key]
        }

        const result = fn(...args)
        memory[key] = result

        return result
    }
}
// squareNumber(4)

// squareNumber :: number -> number
const squareNumber = memoize((x) => {
    console.log(`calculou ${x}`)
    return x * x
})

squareNumber(4)
squareNumber(4)
squareNumber(4)
squareNumber(4)

const returnsNullOrTwo = memoize((x) => {
    console.log('coé', x)
    return x ? null : 2
})

returnsNullOrTwo(true)
returnsNullOrTwo(true)