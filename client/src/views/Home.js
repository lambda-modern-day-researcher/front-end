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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <components.Navbar />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <components.LeftNav />
          </div>

          <div className="col-9">
            <components.MainContainer />
          </div>
        </div>
      </div>
    </styles.HomeStyle>
  )
}

/**
 * Export component
 */

module.exports = Home
