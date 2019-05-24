'use strict'

/**
 * Dependencies
 */

import React from 'react'
import styles from './styles/index'
import SignOutLink from './SignOutLink'
import LinkForm from './LinkForm'
import PriorityLinkList from './PriorityLinkList'
import MainLinkList from './MainLinkList'

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
