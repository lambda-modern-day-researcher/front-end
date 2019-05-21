'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
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

module.exports = MainContainer
