const isNil = item => item !== null && item !== undefined

// const validArray = filter(isNil)

// 1. Refactor to remove all arguments by partially applying the function.

// const words = str => split(' ', str)
// const words = split(' ')


// 2. Refactor to remove all arguments by partially applying the functions.

// const filterQs = xs => filter(x => match(/q/i, x), xs)
// const filterQs = filter(x => match(/q/i, x))
// const filterQs = filter(match(/q/i))


// 3. Considering the following function:

const keepHighest = (x, y) => (x >= y ? x : y)

// Refactor max to not reference any arguments using the helper function keepHighest.

// const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs)
// const max = reduce((acc, x) => (x >= acc ? x : acc), -Infinity)
// const max = reduce(keepHighest, -Infinity)

const curry = (fn) => {
  function pandora (previousArgs, args) {
    if ((args.length + previousArgs.length) === fn.length) {
      return fn(...previousArgs, ...args)
    }

    return (...args2) => pandora(previousArgs.concat(args), args2)
  }

  return (...args) => pandora([], args)
}

// const map = (array, fn) => {
//   const result = []

//   for (const item of array) {
//     result.push(fn(item))
//   }

//   return result
// }

// helper([1,2,3],[])
// helper([2,3],[1])
// helper([3],[1,2])
// helper([],[1,2,3])
const map = (array, fn) => {
  function helper (array, result) {
    if (!array.length) {
      return result
    }

    return helper(array.slice(1), [...result, fn(array[0])])
  }

  return helper(array, [])
}

// console.log(map([1,2,3,4], (x) => x * 2))// [2, 4, 6, 8]

const filter = curry((fn, array) => array.filter(fn))

const complement = (fn) => {
    return (...args) => !fn(...args)
}

const isNotNil = complement(isNil)

const reject = (fn, array) => filter(complement(fn), array)

console.log(reject(isNotNil, [1, null, 2, undefined, 3]))
console.log(filter(complement(isNil), [1, null, 2, undefined, 3]))

// const add = curry((a, b) => a + b)

// console.log(add(1, 2))
// console.log(add(1)(2))

// const add = curry((a, b, c, d) => a + b + c + d)

// console.log(add(1, 2, 3, 4))
// console.log(add(1, 2)(3)(4))
// console.log(add(1, 2, 3)(4))
// console.log(add(1)(2)(3)(4))
