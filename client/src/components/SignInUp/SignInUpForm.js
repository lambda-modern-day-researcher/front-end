'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function SignInUpForm() {
  return (
    <styles.SignInUpFormStyle>
      <form className="mb-10" action="/home" method="get">
        <div className="form-group">
          <label for="input_email" className="text-primary">Email <span className="text-danger">*</span></label>
          <input id="input_email" type="email" name="email" className="form-control" autofocus="true" required="true"></input>
        </div>

        <div className="form-group">
          <label for="input_password" className="text-primary">Password <span className="text-danger">*</span></label>
          <input id="input_password" type="password" name="password" className="form-control" required="true"></input>
        </div>

        <button type="submit" className="btn btn-block btn-primary">Get started</button>
      </form>
    </styles.SignInUpFormStyle>
  )
}

/**
 * Export component
 */

module.exports = SignInUpForm
