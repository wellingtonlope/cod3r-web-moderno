import './NavItem.css'
import React from 'react'

export default props =>
  <a className="nav-item" href={props.hreaf}>
    <i className={`fa fa-${props.icon}`}></i> {props.label}
  </a>
