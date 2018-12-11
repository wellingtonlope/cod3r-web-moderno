let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // ou this

comparaComThisArrow = comparaComThisArrow.bind(obj) // não vai dá não
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
