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

let LinkStyle = styled.li(() => `
  margin-bottom: 10px;

  .text__title {
    padding-bottom: 0px;
    font-weight: 700;
  }

  .text__link {
    color: #AAA;
  }

  .list__categories {
    margin-top: 5px;
  }

  .list__categories li {
    display: inline-block;
  }

  .control {
    display: block;
    cursor: pointer;

    &__completed {
      fill: #AAA;

      &:hover {
        fill: blue;
      }
    }

    &__priority {
      fill: #AAA;

      &:hover {
        fill: red !important;
      }
    }

    &__share {
      fill: #AAA;

      &:hover {
        fill: orange;
      }
    }
  }

  .glyph__open {
    fill: #007BFF;
    margin-left: 5px;
  }

  .a__link {
    text-decoration: none;

    div {
      margin-top: 5px;

      &:hover {
        background-color: #fafafa;
        box-shadow: 1px 1px 3px rgba(129, 129, 129, 0.46);
        border-radius: 3px;
      }
    }
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
`)

/**
 * Export style
 */

module.exports = LinkStyle
