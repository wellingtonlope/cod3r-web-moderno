// pessoa -> 123(endereço de memoria) -> {...}
const pessoa = {
  nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456(endereço) -> {...}
// pessoa = { // Não é permitido
//   nome: 'Ana'
// }

Object.freeze(pessoa) // congelando objeto pessoa

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({
  nome: 'João'
})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
