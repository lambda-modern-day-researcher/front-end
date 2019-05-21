'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function Category({ color, name }) {
  return (
    <styles.CategoryStyle>
      <span className="glyph__circle" style={{ backgroundColor: color }}></span>
      <span className="text__category">{name}</span>
      <span className="btn__delete">x</span>
    </styles.CategoryStyle>
  )
}

/**
 * Export component
 */

module.exports = Category
