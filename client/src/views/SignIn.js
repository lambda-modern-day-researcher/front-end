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

function SignIn(props) {
  return (
    <styles.SignInUpStyle>
      <div className="container">
      <div className='brand_logo_container'>
              <img src="https://i.postimg.cc/rpP2Xwg8/link.png" className="brand_logo" alt="Logo"></img>
            </div>
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            
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

module.exports = SignIn
