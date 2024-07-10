
// Refactor function A into function B
// // a: g(x) = x^2 + x^3 + (x^4 -1) / x - (x+1)
// // b: function G(x) = a(x) / b(x)

function a(x) {
    return x ** 2 + x ** 3
}

function b(x) {
    return (x ** 4 - 1)
}

function c(x) {
    return (x - (x - 1))
}

function d(x) {
    return a(x) + b(x)
}

function e(x) {
    return d(x) / c(x)
}