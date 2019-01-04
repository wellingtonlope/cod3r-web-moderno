import React from 'react'
import ReacDOM from 'react-dom'

import Multi, { BoaNoite } from './componentes/Multiplos'

ReacDOM.render(
  <div>
    <Multi.BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
  </div>
  , document.getElementById('root'))
