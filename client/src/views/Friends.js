'use strict'

/**
 * Dependencies
 */

import React from 'react'
import components from '../components/Friends/index'
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
