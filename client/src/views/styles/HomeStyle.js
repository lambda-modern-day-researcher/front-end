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

let HomeStyle = styled.div(() => `
  height: 100vh;

  .mx-auto {
    margin-right: auto !important;
  }

  .border-right {
    border-right: 1px solid #333;
  }
`)

/**
 * Export style
 */

module.exports = HomeStyle
