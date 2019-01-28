import * as actionTypes from '../actions/actionTypes'
import updateObject from '../../utility/updateObject'

const initialState = {
  authToken: null,
  error: null,
  loading: null,
  authForm: {
    isVisible: false,
    //By default the auth form will open in Log In mode
    isLoggingIn: true
  }
}

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  })
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    authToken: action.authToken,
    error: null,
    loading: false
  })
}

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  })
}

const authLogout = (state, action) => {
  return updateObject(state, {
    authToken: null
  })
}

const authFormSetVisibility = (state, action) => {
  return updateObject(state, {
    authForm: updateObject(state.authForm, {
      isVisible: action.isVisible
    })
  })
}

const authFormSetMode = (state, action) => {
  return updateObject(state, {
    authForm: updateObject(state.authForm, {
      isLoggingIn: action.isLoggingIn
    })
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action)

    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)

    case actionTypes.AUTH_FAIL: return authFail(state, action)
    
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action)

    case actionTypes.AUTH_FORM_SET_VISIBILITY: return authFormSetVisibility(state, action)

    case actionTypes.AUTH_FORM_SET_MODE: return authFormSetMode(state, action)
    
    default: return state
  }
}

export default reducer