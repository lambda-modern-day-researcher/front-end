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
  isSigningUp: false,
  current_user_id: null,
  current_user_email: null,
  current_user_username: null,
  current_user_is_private: null,
  current_user_token: (localStorage.getItem('token') || null),
  error: null
}

/**
 * Define reducer
 */

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIGNUP_START:
      return Object.assign({}, state, {
        isSigningUp: true,
        error: ''
      })
    case actions.SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return Object.assign({}, state, {
        isSigningUp: false,
        current_user_id: action.payload.id,
        current_user_email: action.payload.email,
        current_user_username: action.payload.username,
        current_user_is_private: action.payload.is_private,
        current_user_token: action.payload.current_user_token,
        error: ''
      })
    case actions.SIGNUP_ERROR:
      return Object.assign({}, state, {
        isSigningUp: false,
        error: action.payload
      })
    case actions.SIGNIN_START:
      return Object.assign({}, state, {
        isSigningIn: true,
        error: ''
      })
    case actions.SIGNIN_SUCCESS:
      console.log("action.payload", JSON.stringify(action.payload, null, 2))
      localStorage.setItem('token', action.payload.token)
      return Object.assign({}, state, {
        isSigningIn: false,
        current_user_token: action.payload.token,
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
