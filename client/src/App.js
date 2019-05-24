'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { RootRouter } from './routes/index'
import store from './store/index'

/**
 * Importing global styles
 */

import './App.scss'

/**
 * Define component
 */

function App() {
  // <routes.UsersRouter mount="/users" />
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRouter mount="/" />
      </BrowserRouter>
    </Provider>
  )
}

/**
 * Export component
 */

export default App
