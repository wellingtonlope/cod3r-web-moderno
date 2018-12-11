console.log(soma(3, 4)) // Pode ser chamada antes e depois da função declarada

// function declaration
function soma(x, y) {
  return x + y
}

// function expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4)) // Apenas depois de ser declarada

// named function expression
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4)) // Apenas depois de ser declarada
