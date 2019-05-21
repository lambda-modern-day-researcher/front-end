'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function SignInUpTitle() {
  return (
    <styles.SignInUpTitleStyle>
      <p className="text-center mt-4">LET'S DO THIS</p>
      <h2 className="text-center mb-4">Time to manage link chaos</h2>
    </styles.SignInUpTitleStyle>
  )
}

/**
 * Export component
 */

module.exports = SignInUpTitle
