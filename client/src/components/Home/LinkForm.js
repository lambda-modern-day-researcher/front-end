'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function LinkForm() {
  return (
    <styles.LinkFormStyle>
      <form>
        <input type="text" name="title" placeholder="Title"></input>
        <input type="text" name="url" placeholder="https://google.com" required="true"></input>
        <button type="submit">Add</button>
      </form>
    </styles.LinkFormStyle>
  )
}

/**
 * Export component
 */

module.exports = LinkForm
