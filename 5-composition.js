function hello (n) {
  if (n < 1) {
    return
  }

  console.log('hello')

  return hello(n - 1)
}

// hello(5)

// hello
// hello
// hello
// hello
// hello

function toUpperCase (str) {
    return str.toUpperCase()
}

function addHello (str) {
    return 'hello ' + str
}

function shout (str) {
    return str + '!'
}

const input = 'Duda'


// const result = shout(addHello(toUpperCase(input)))
// const result = shout(toUpperCase(addHello(input)))

// const result = input |>
//     toUpperCase |>
//     addHello |>
//     shout

// const compose = (f, g, h) => arg => {
//   const sla = h(arg)
//   const result = g(sla)
//   return f(result)
// }

// const result = compose(
//     shout,
//     addHello,
//     toUpperCase
// )(input)

// const result = pipe(
//     toUpperCase,
//     addHello,
//     shout
// )(input)

// acc = []
// x = 1
// return [1, ...[]]
// return [1]

// acc = [1]
// x = 2
// return [2, ...[1]]
// const reverse = reduce((acc, x) => [x, ...acc], [])
// reverse([1, 2, 3])

// const head = x => x[0];
// const reverse = reduce((acc, x) => [x, ...acc], []);

// const last = compose(head, reverse);

// imperativa vs declarativa
//    como    vs    o que

// C
// ler arquivo Haskell
// compilador(arquivo)
// escreverBinario(compilado)

// Haskell
// main 
// haskell-compiler compilador.hs

const compareLists = (list1, list2) => {
    if (list1.length === 0 && list2.length === 0) {
        return true
    }

    if (list1.length === 0) {
        return false
    }

    if (list2.length === 0) {
        return false
    }

    const [a, ...b] = list1
    const [c, ...d] = list2

    if (a === c) {
        return compareLists(b, d)
    }

    return false
}

// compose(a, b) -> b(a())

// i = compose(g, h) -> g(h())
// compose(f, i) -> f(i())
// h -> g -> f

// k = compose(f, g) -> f(g())
// compose(k, h) -> k(h())
// h -> g -> f

// compose(f, compose(g, h)) === compose(compose(f, g), h)

// console.log(compareLists([1,2,3], [1,2,3]))
// console.log(compareLists([1,4,3], [1,2,3]))
// compare_lists [] [] = True
// compare_lists [] _ = False
// compare_lists _ [] = False
// compare_lists (a:b) (c:d) | (a == c) = compare_lists b d
// 			  | otherwise = False

const last = (arr) => arr[arr.length - 1]

// [1,2,3]
// arr.map()// 3
//     .filter()// 3
//     .reduce()// 1
//     .collect()

//     3 + 3 + 1

// newFn :: String -> Object
// const newFn = compose(
//     String->Int
//     Int->Boolean
//     Boolean->Object
// )

// console.log(result)
// hello DUDA!
// HELLO DUDA!
const map = fn => arr => arr.map(fn)
const angry = str => str.toUpperCase() + '!'

// tap/trace
const print = comment => arr => {
  console.log(comment, arr)

  return arr
}

const reduce = fn => initial => arr => arr.reduce(fn, initial)
const reverse = reduce((acc, x) => [x, ...acc])([])

const composeP = (...functions) =>
    arg => functions.reverse().reduce((acc, fn) => fn(acc), arg)

const callFn = (arg, fn) => fn(arg)

const compose = (...functions) => arg => composeP(
    reduce(callFn)(arg),
    reverse
)(functions)

// cola reduce
// const reduce = (fn, initialValue, array)
// let result

// array.forEach(x => {
//     result = result ? fn(x) : fn(result)
// })

// return result


// const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

// const latin = compose(map, print('no angry'), angry, print('no reverse'), reverse)
const latin = compose(
    map(compose(
        print('no angry'),
        angry
    )),
    print('no reverse'),
    reverse
)

latin(['oi', 'tchau', 'adios'])

// const latin = compose(map(angry), reverse)

// console.log(latin(['oi', 'tchau', 'adios']))

// Exercise 1

// Example car:
// {
//     name: 'Aston Martin One-77',
//     horsepower: 750,
//     dollar_value: 1850000,
//     in_stock: true,
// }

// const isLastInStock = (cars) => {  
//   const lastCar = last(cars)
//   return prop('in_stock', lastCar)
// }

// const isLastInStock = compose(prop('in_stock'), last)

// // Exercise 2
// const average = xs => reduce(add, 0, xs) / xs.length

// const averageDollarValue = (cars) => {  
//     const dollarValues = map(c => c.dollar_value, cars)
//     return average(dollarValues)
// }

// const averageDollarValue = compose(average, map(prop('dollar_value')))

// // Exercise 3

// const fastestCar = (cars) => {  
//     const sorted = sortBy(car => car.horsepower, cars)
//     const fastest = last(sorted)
//     return concat(fastest.name, ' is the fastest')
// }

// const flip = (fn) => {
//   return function (...args) {
//     return fn(...args.reverse())
//   }
// }

// const concatBackwords = flip(concat)
// // concat('a', 'b') === concatBackwords('b', 'a')

// const fastestCar = compose(
//     flip(concat),
//     prop('name'),
//     sortBy(prop('horsepower'))
// )