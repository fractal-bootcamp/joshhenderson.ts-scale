// a: j(x, y, z) = (x + x^2 + x^3) + (y + y^2 + y^3) + (z + z^2 + z^3)
// b: function J(x, y, z) = a(x) + a(y) + a(z)

function X(x: number): number { return x + x ** 2 + x ** 3 }
function Y(y: number): number { return y + y ** 2 + y ** 3 }
function Z(z: number): number { return z + z ** 2 + z ** 3 }

type BArgs = {
    x: number,
    y: number,
    z: number
}

function B({ x, y, z }: BArgs): number { return X(x) + Y(y) + Z(z) }

