'use strict'

/**
 * Dependencies
 */

import React from 'react'
const react_router_dom = require('react-router-dom')
import styles from './styles/index'

/**
 * Constants
 */

const Link = react_router_dom.Link
const Router = react_router_dom.Router

/**
 * Define component
 */

function SignOutLink(props) {
  return (
    <styles.SignOutLinkStyle>
      <Link to="/users/signin" onClick={() => localStorage.clear()}>Sign out</Link>
    </styles.SignOutLinkStyle>
  )
}

/**
 * Export component
 */

export default SignOutLink
