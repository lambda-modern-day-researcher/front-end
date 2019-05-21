'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
const Category = require('./Category')

/**
 * Define component
 */

function CategoryList() {
  return (
    <styles.CategoryListStyle>
      <ul>
        <Category name="Data Science" color="#2884c3" />
        <Category name="GitHub" color="#5c5c5c" />
        <Category name="News" color="#d14a3b" />
      </ul>
    </styles.CategoryListStyle>
  )
}

/**
 * Export component
 */

module.exports = CategoryList
