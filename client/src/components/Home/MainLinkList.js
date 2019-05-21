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

function MainLinkList() {
  // TODO query backend for non-prioritized links

  return (
    <styles.MainLinkListStyle>
      <h4>All</h4>

      <hr/>

      <ul>
        <Link title="No degree. No debt" url="https://twitter.com/Austen/status/1120371071243309057" categories={[{ name: 'News', color: '#d14a3b' }]} />
        <Link title="Modern Day Researcher GitHub Organization" url="https://github.com/lambda-modern-day-researcher" categories={[{ name: 'GitHub', color: '#5c5c5c' }]} />
        <Link title="AI Transformation Playbook" url="https://landing.ai/ai-transformation-playbook/" categories={[{ name: 'News', color: '#d14a3b' }, { name: 'Data Science', color: '#2884c3' }]} />
      </ul>
    </styles.MainLinkListStyle>
  )
}

/**
 * Export component
 */

module.exports = MainLinkList
