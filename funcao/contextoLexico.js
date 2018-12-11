const valor = 'Global'

function minhaFuncao() {
  console.log(valor) // busca no local onde foi definida
}

function exec() {
  const valor = 'Local'
  minhaFuncao()
}

exec()
