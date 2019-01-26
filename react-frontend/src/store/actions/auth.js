import * as actionTypes from './actionTypes'
import axios from '../../utility/axios'
import * as constants from '../../utility/constants'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authToken: token
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const authLogout = () => {
  localStorage.removeItem(constants.AUTH_TOKEN)
  localStorage.removeItem(constants.AUTH_EXPIRATION_DATE)
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const setAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout())
    }, expirationTime*1000)
  }
}

export const auth = (authData, isSignUp) => {
  return dispatch => {

    const url = isSignUp ? '/users/signup' : '/users/login'

    axios.post(url, authData)
      .then(response => {
        console.log(response)
        if(isSignUp) {
          // Since the user has successfully signed up, we will log him in as well.
          dispatch(authSuccess(null))
          delete authData.data.fullname
          dispatch(auth(authData, false))
        } else {
          const expirationDate = new Date(new Date().getTime() + response.data.auth.expiresIn*1000)
          localStorage.setItem(constants.AUTH_TOKEN, response.data.auth.token)
          localStorage.setItem(constants.AUTH_EXPIRATION_DATE, expirationDate)
          dispatch(authSuccess(response.data.auth.token))
          dispatch(setAuthTimeout(response.data.auth.expiresIn))
        }
      })
      .catch(error => {
        console.log(error.response)
        dispatch(authFail(error.response))
      })

    dispatch(authStart())
  }
}

export const autoAuth = () => {
  // This action is used for auto login by checking if there's an auth token available
  return dispatch => {
    const token = localStorage.getItem(constants.AUTH_TOKEN)

    if (!token) {
      dispatch(authLogout())
    } else {
      const expirationDate = new Date(localStorage.getItem(constants.AUTH_EXPIRATION_DATE))
      if (expirationDate < new Date()) {
        dispatch(authLogout())
      } else {
        dispatch(authSuccess(token))
        dispatch(setAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
      }
    }
  }
}

export const authFormSetVisibility = (isVisible) => {
  return {
    type: actionTypes.AUTH_FORM_SET_VISIBILITY,
    isVisible: isVisible
  }
}

export const authFormSetMode = (isLoggingIn) => {
  return {
    type: actionTypes.AUTH_FORM_SET_MODE,
    isLoggingIn: isLoggingIn
  }
}