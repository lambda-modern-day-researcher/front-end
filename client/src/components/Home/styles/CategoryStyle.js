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

border-radius:5px;
margin:8px 0;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

.glyph__circle {
    height: 20px;
    width: 8px;
    display: inline-block;
    margin-right: 10px;
  }

  .text__category {
    
   }

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

  .col__category {
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
        box-shadow: 1px 1px 3px rgba(129, 129, 129, 0.46);
        border-radius: 3px;
      }
    }
  }
`)

/**
 * Export style
 */

module.exports = CategoryStyle
