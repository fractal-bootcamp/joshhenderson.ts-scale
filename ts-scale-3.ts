// 1. refactor A into B 

// a: h(x, y) = x + y + y^2 + x^2 / y^2 - y - 1
// b: function H(x, y) = a(y) + b(x) / c(y)

function a1(x: number): number { return x + x ** 2 }
function a2(y: number): number { return y + y ** 2 }
function a3(y: number): number { return y ** 2 - y - 1 }

type BARGS = {
    x: number,
    y: number
}

function B({ x, y }: BARGS): number {
    return a2(y) + a1(x) / a3(y)
}