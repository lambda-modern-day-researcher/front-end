'use strict'

/**
 * Dependencies
 */

import React from 'react'
const components = require('../components/SignInUp/index')
import styles from './styles/index'

/**
 * Define component
 */

function SignIn(props) {
  return (
    <styles.SignInUpStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            <components.SignInUpTitle />
            <components.SignInUpForm {...props} in_or_up='in' />
          </div>
        </div>
      </div>
    </styles.SignInUpStyle>
  )
}

/**
 * Export component
 */

export default SignIn
