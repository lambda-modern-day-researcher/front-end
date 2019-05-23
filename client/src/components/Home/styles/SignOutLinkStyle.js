'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style
 */

let SignOutLinkStyle = styled.div(() => `
  text-align: right;
  padding-bottom: 15px;

  a {
    color: #AAA;
  }

  a:hover {
    color: #555;
  }
`)

/**
 * Export style
 */

module.exports = SignOutLinkStyle
