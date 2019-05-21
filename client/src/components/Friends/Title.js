'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function Title() {
  return (
    <styles.TitleStyle>
      <h1>Friends</h1>
    </styles.TitleStyle>
  )
}

/**
 * Export component
 */

module.exports = Title
