import React from 'react'
import ReacDOM from 'react-dom'

import Saudacao from './componentes/Saudacao'

ReacDOM.render(
  <div>
    <Saudacao tipo="Bom dia" nome="João" />
  </div>
  , document.getElementById('root'))
