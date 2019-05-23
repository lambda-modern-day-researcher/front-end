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
  isFetchingPriorityLinks: false,
  isFetchingMainLinks: false,
  isSettingLinkPriority: false,
  isFetchingCategories: false,
  isFilteringByCategory: false,
  current_user_id: (localStorage.getItem('user_id') || null),
  current_user_email: (localStorage.getItem('user_email') || null),
  current_user_username: (localStorage.getItem('user_username') || null),
  current_user_is_private: (localStorage.getItem('user_is_private') || null),
  current_user_token: (localStorage.getItem('token') || null),
  categories: [
    { id: 1000, title: "News", color: "#d14a3b" },
    { id: 2000, title: "Data Science", color: "#2884c3" },
    { id: 3000, title: "GitHub", color: "#5c5c5c" },
  ],
  priority_links: [
    {
      id: 1000,
      isPriority: "true",
      title: "Lambda School Blog",
      url: "https://lambdaschool.com/blog/",
      categories: [{ title: 'News', color: '#d14a3b' }]
    }
  ],
  main_links: [
    {
      id: 2000,
      title: "Modern Day Researcher GitHub Organization",
      url: "https://github.com/lambda-modern-day-researcher",
      categories: [{ title: 'GitHub', color: '#5c5c5c' }]
    },
    {
      id: 3000,
      title: "No degree. No debt",
      url: "https://twitter.com/Austen/status/1120371071243309057",
      categories: [{ title: 'News', color: '#d14a3b' }]
    },
    {
      id: 4000,
      title: "AI Transformation Playbook",
      url: "https://landing.ai/ai-transformation-playbook/",
      categories: [{ title: 'News', color: '#d14a3b' }, { title: 'Data Science', color: '#2884c3' }]
    }
  ],
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
      localStorage.setItem('user_id', action.payload.user.id)
      localStorage.setItem('user_email', action.payload.user.email)
      localStorage.setItem('user_username', action.payload.user.username)
      localStorage.setItem('user_is_private', action.payload.user.is_private)
      return Object.assign({}, state, {
        isSigningUp: false,
        current_user_id: action.payload.user.id,
        current_user_email: action.payload.user.email,
        current_user_username: action.payload.user.username,
        current_user_is_private: action.payload.user.is_private,
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
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user_id', action.payload.user.id)
      localStorage.setItem('user_email', action.payload.user.email)
      localStorage.setItem('user_username', action.payload.user.username)
      localStorage.setItem('user_is_private', action.payload.user.is_private)
      return Object.assign({}, state, {
        isSigningIn: false,
        current_user_id: action.payload.user.id,
        current_user_email: action.payload.user.email,
        current_user_username: action.payload.user.username,
        current_user_is_private: action.payload.user.is_private,
        current_user_token: action.payload.current_user_token,
        current_user_token: action.payload.token,
        error: ''
      })
    case actions.SIGNIN_ERROR:
      return Object.assign({}, state, {
        isSigningIn: false,
        error: action.payload
      })
    case actions.FETCH_PRIORITY_LINKS_START:
      return Object.assign({}, state, {
        isFetchingPriorityLinks: true,
        error: ''
      })
    case actions.FETCH_PRIORITY_LINKS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingPriorityLinks: false,
        priority_links: action.payload,
        error: ''
      })
    case actions.FETCH_PRIORITY_LINKS_ERROR:
      return Object.assign({}, state, {
        isFetchingPriorityLinks: false,
        error: action.payload
      })
    case actions.FETCH_MAIN_LINKS_START:
      return Object.assign({}, state, {
        isFetchingMainLinks: true,
        error: ''
      })
    case actions.FETCH_MAIN_LINKS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingMainLinks: false,
        main_links: action.payload,
        error: ''
      })
    case actions.FETCH_MAIN_LINKS_ERROR:
      return Object.assign({}, state, {
        isFetchingMainLinks: false,
        error: action.payload
      })
    case actions.TOGGLE_LINK_PRIORITY_START:
      return Object.assign({}, state, {
        isSettingLinkPriority: true,
        error: ''
      })
    case actions.TOGGLE_LINK_PRIORITY_SUCCESS:
      return Object.assign({}, state, {
        isSettingLinkPriority: false,
        error: ''
      })
    case actions.TOGGLE_LINK_PRIORITY_ERROR:
      return Object.assign({}, state, {
        isSettingLinkPriority: false,
        error: action.payload
      })
    case actions.FETCH_CATEGORIES_START:
      return Object.assign({}, state, {
        isFetchingCategories: true,
        error: ''
      })
    case actions.FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        isFetchingCategories: false,
        categories: action.payload,
        error: ''
      })
    case actions.FETCH_CATEGORIES_ERROR:
      return Object.assign({}, state, {
        isFetchingCategories: false,
        error: action.payload
      })
    case actions.FILTER_BY_CATEGORY_START:
      return Object.assign({}, state, {
        isFilteringByCategory: true,
        error: ''
      })
    case actions.FILTER_BY_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isFilteringByCategory: false,
        main_links: action.payload,
        error: ''
      })
    case actions.FILTER_BY_CATEGORY_ERROR:
      return Object.assign({}, state, {
        isFilteringByCategory: false,
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
