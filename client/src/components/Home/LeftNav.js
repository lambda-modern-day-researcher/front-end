'use strict'

/**
 * Dependencies
 */

import React from 'react'
import styles from './styles/index'
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'

/**
 * Define component
 */

function LeftNav() {
  return (
    <styles.LeftNavStyle>
      <section>
        <CategoryForm />
        <CategoryList />
      </section>
    </styles.LeftNavStyle>
  )
}

/**
 * Export component
 */

export default LeftNav
