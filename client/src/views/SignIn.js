'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('../components/SignInUp/index')
const styles = require('./styles/index')

/**
 * Define component
 */

function SignIn() {
  return (
    <styles.SignInUpStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            <components.SignInUpTitle />
            <components.SignInUpForm in_or_up='in' />
          </div>
        </div>
      </div>
    </styles.SignInUpStyle>
  )
}

/**
 * Export component
 */

module.exports = SignIn
