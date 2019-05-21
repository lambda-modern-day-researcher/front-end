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
      <div className="row">
        <div className="col-12">
          <ul>
            <Category name="News" color="#d14a3b" />
            <Category name="Data Science" color="#2884c3" />
            <Category name="GitHub" color="#5c5c5c" />
          </ul>
        </div>
      </div>
    </styles.CategoryListStyle>
  )
}

/**
 * Export component
 */

module.exports = CategoryList
