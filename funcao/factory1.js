// Factory é uma funçao que retorna um objeto
// Factory simples
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())
