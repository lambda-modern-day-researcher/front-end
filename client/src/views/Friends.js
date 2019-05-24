'use strict'

/**
 * Dependencies
 */

import React from 'react'
const components = require('../components/Friends/index')
import styles from './styles/index'

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

export default Friends
