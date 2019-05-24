'use strict'

/**
 * Dependencies
 */

import React from 'react'
import styles from './styles/index'
const SignOutLink = require('./SignOutLink')
const LinkForm = require('./LinkForm')
const PriorityLinkList = require('./PriorityLinkList')
const MainLinkList = require('./MainLinkList')

/**
 * Define component
 */

function MainContainer() {
  return (
    <styles.MainContainerStyle>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SignOutLink />
              <LinkForm />
              <PriorityLinkList />
              <MainLinkList />
            </div>
          </div>
        </div>
      </section>
    </styles.MainContainerStyle>
  )
}

/**
 * Export component
 */

export default MainContainer
