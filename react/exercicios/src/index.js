import React from 'react'
import ReacDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReacDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
    </Pai>
  </div>
  , document.getElementById('root'))
