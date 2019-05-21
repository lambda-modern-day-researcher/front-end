'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
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

module.exports = LeftNav
