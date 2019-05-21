'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function CategoryForm() {
  return (
    <styles.CategoryFormStyle>
      <form>
        <input type="color" name="color"></input>
        <input type="text" name="name" placeholder="Category"></input>
        <button type="submit">Add</button>
      </form>
    </styles.CategoryFormStyle>
  )
}

/**
 * Export component
 */

module.exports = CategoryForm
