'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('../components/Home/index')
const styles = require('./styles/index')

/**
 * Define component
 */

function Home() {
  return (
    <styles.HomeStyle>
      <components.Navbar />

      <div className="row mx-auto">
        <div className="col-4 col-lg-3 col-xl-2">
          <components.LeftNav />
        </div>
        <div className="col-8 col-lg-9 col-xl-10">
          <components.MainContainer />
        </div>
      </div>
    </styles.HomeStyle>
  )
}

/**
 * Export component
 */

module.exports = Home
