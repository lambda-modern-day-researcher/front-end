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

function SignUp() {
  return (
    <styles.SignInUpStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            <components.SignInUpTitle />
            <components.SignInUpForm in_or_up='up' />
          </div>
        </div>
      </div>
    </styles.SignInUpStyle>
  )
}

/**
 * Export component
 */

module.exports = SignUp
