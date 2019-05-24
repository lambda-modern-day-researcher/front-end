'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Link, Router } from 'react-router-dom'
import styles from './styles/index'

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
