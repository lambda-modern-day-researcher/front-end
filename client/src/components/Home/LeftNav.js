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
      <div className="row justify-content-center">
        <div className="col-12">
          <CategoryForm />
          <CategoryList />
        </div>
      </div>
    </styles.LeftNavStyle>
  )
}

/**
 * Export component
 */

module.exports = LeftNav
