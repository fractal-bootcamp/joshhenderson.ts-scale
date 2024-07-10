// Refactor function A into function B
// // a: j(x, y, z) = (x + x^2 + x^3) + (y + y^2 + y^3) + (z + z^2 + z^3)
// // b: function J(x, y, z) = a(x) + a(y) + a(z)


function a(x) { return x + x ** 2 + X ** 3 }

function b(x, y, z) { return a(x) + a(y) + a(z) }