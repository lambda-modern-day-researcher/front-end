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

let SignInUpTitleStyle = styled.div(() => `
  .text-center {
    text-align: center !important;
  }

  .mt-4 {
    margin-top: 1.5rem !important;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
`)

/**
 * Export style
 */

module.exports = SignInUpTitleStyle
