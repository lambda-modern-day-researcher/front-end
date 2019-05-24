'use strict'

/**
 * Dependencies
 */

import React from 'react'
import styles from './styles/index'
const CategoryForm = require('./CategoryForm')
const CategoryList = require('./CategoryList')

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
