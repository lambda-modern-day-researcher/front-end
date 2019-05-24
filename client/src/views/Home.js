'use strict'

/**
 * Dependencies
 */

import React from 'react'
const components = require('../components/Home/index')
import styles from './styles/index'

/**
 * Define component
 */

function Home() {
  return (
    <styles.HomeStyle>
      <components.Navbar />

      <div className="row mx-auto">
        <div className="col-4 col-lg-3 col-xl-2 border-right">
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

export default Home
