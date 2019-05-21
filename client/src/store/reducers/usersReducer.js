'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const initialState = {
  isSigningIn: false,
  error: null
}

/**
 * Define reducer
 */

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGNIN_START:
      return Object.assign({}, state, {
        isSigningIn: true,
        error: ''
      })
    case actions.SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        isSigningIn: false,
        error: ''
      })
    case actions.SIGNIN_ERROR:
      return Object.assign({}, state, {
        isSigningIn: false,
        error: action.payload
      })
    default:
      return state
  }
}


/**
 * Export reducer
 */

module.exports = usersReducer
