'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import views from '../views/index'
import helpers from './helpers/index'

/**
 * Constants
 */

const PrivateRoute = helpers.PrivateRoute

/**
 * Define router
 */

function RootRouter() {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <PrivateRoute path="/home" component={views.Home} />
      <PrivateRoute path="/friends" component={views.Friends} />
      <Route path="/login" render={() => <Redirect to="/users/signin" />} />
      <Route path="/signin" render={() => <Redirect to="/users/signin" />} />
      <Route path="/signup" render={() => <Redirect to="/users/signup" />} />
      <Route path="/register" render={() => <Redirect to="/users/signup" />} />
    </>
  )
}

/**
 * Export router
 */

export default RootRouter
