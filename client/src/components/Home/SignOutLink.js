'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Link, Router } from 'react-router-dom'
import { SignOutLinkStyle } from './styles/index'

/**
 * Define component
 */

function SignOutLink(props) {
  return (
    <SignOutLinkStyle>
      <Link to="/users/signin" onClick={() => localStorage.clear()}>Sign out</Link>
    </SignOutLinkStyle>
  )
}

/**
 * Export component
 */

export default SignOutLink
