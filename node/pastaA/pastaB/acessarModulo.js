const moduloA = require('../../moduloA') // moduloa, funciona no mac e windows, mas não no linux
console.log(moduloA.ola)

// const saudacao = require('saudacao') // criar o modulo na pasta node_modules
// console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)
