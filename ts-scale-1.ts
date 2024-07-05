// 1. refactor A into B 

// a: f(x) = x^2 + x^3 / x - (x+1)
// b: function F(x) = a(x) / b(x)

function a(x: number): number { return ((x ^ 2) + (x ^ 3)) }

function b(x: number): number { return (x - (x + 1)) }


type OneArgs = { a: (x: number) => number, b: (x: number) => number }

function f({ a, b }: OneArgs) { return ((x) => a(x) / b(x)) }

