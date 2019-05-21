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
      <form className="form-inline">
        <input type="color" name="color" className="form-control form-control-sm input__color" required={true}></input>
        <input type="text" name="name" placeholder="Category" className="form-control form-control-sm input__category" required={true}></input>
        <button type="submit" className="btn btn-sm btn-block btn-light btn__submit">Add</button>
      </form>
    </styles.CategoryFormStyle>
  )
}

/**
 * Export component
 */

module.exports = CategoryForm
