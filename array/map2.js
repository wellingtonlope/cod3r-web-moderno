const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const jsonParaObjeto = e => JSON.parse(e)
const apenasPreco = e => e.preco

const resultado = carrinho.map(jsonParaObjeto).map(apenasPreco)
console.log(resultado)
