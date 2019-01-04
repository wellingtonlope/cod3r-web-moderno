import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
  <Link className="nav-item" to={props.hreaf}>
    <i className={`fa fa-${props.icon}`}></i> {props.label}
  </Link>
