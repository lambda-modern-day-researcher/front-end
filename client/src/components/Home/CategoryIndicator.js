'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function CategoryIndicator({ color, name }) {
  // TODO onHover of category show the name
  return (
    <styles.CategoryIndicatorStyle>
      <span className="glyph__circle" style={{ backgroundColor: color }}></span>
    </styles.CategoryIndicatorStyle>
  )
}

/**
 * Export component
 */

module.exports = CategoryIndicator
