'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const styles = require('./styles/index')

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

module.exports = SignOutLink
