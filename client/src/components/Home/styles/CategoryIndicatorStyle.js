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

let CategoryStyle = styled.li(() => `
  .glyph__circle {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
`)

/**
 * Export style
 */

module.exports = CategoryStyle
