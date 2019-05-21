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

  .text__category { }

  .btn__delete {
    color: #DDD;
    float: right;
    padding: 0px 5px;
    margin: 0px 10px;
    cursor: pointer;

    &:hover {
      color: #AAA;
    }
  }
`)

/**
 * Export style
 */

module.exports = CategoryStyle
