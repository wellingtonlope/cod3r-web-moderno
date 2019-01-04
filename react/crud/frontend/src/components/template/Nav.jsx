import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <NavItem hreaf="#/" label="Início" icon="home" />
      <NavItem hreaf="#/users" label="Usuários" icon="users" />
    </nav>
  </aside>
