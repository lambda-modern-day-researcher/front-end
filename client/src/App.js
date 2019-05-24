'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes/index'
import store from './store/index'

/**
 * Importing global styles
 */

import './App.scss'

/**
 * Define component
 */

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <routes.RootRouter mount="/" />
        <routes.UsersRouter mount="/users" />
      </BrowserRouter>
    </Provider>
  )
}

/**
 * Export component
 */

export default App
