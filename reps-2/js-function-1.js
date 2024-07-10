
// Refactor function A into function B
// // a: f(x) = x^2 + x^3 / x - (x+1)
// // b: function F(x) = a(x) / b(x)

function a(x) {
    return x ** 2 + x ** 3
}

function b(x) {
    return x - (x + 1)
}

function c(x) {
    return a(x) / b(x)
}
