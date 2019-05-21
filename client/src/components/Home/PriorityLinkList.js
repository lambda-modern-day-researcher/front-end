'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
const Link = require('./Link')

/**
 * Define component
 */

function PriorityLinkList() {
  // TODO query backend for prioritized links

  return (
    <styles.PriorityLinkListStyle>
      <h4>Priority</h4>

      <hr/>

      <ul>
        <Link isPriority="true" title="Lambda School Blog" url="https://lambdaschool.com/blog/" categories={[{ name: 'News', color: '#d14a3b' }]} />
      </ul>
    </styles.PriorityLinkListStyle>
  )
}

/**
 * Export component
 */

module.exports = PriorityLinkList
