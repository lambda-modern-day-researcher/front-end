'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('../components/Friends/index')
const styles = require('./styles/index')

/**
 * Define component
 */

function Friends() {
  return (
    <styles.FriendsStyle>
      <components.Title />
    </styles.FriendsStyle>
  )
}

/**
 * Export component
 */

module.exports = Friends
