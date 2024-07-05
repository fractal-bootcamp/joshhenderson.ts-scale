// 1. refactor A into B 

// a: g(x) = x^2 + x^3 + (x^4 -1) / x - (x+1)
// b: function G(x) = a(x) / b(x)

function a(x: number): number { return (x ** 2) + (x ** 3) + (x ** 4 - 1) }
function b(x: number): number { return (x - (x + 1)) }

type GArgs = { a: (x: number) => number, b: (x: number) => number }

function G({ a, b }: GArgs) { return (x) => { a(x) / b(x) } }






// let x = (2 ** 4) - 1
// let y = 2 ** 4 - 1
// console.log(x, y)
