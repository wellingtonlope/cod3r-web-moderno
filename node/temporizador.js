const schedule = require('node-schedule') // npm i node-schedule@1.3.0 -E

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 2', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 9
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando Tarefa 2!', new Date().getSeconds())
})
