import * as actionTypes from './actionTypes'
import axios from '../../utility/axios'

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
  localStorage.removeItem('authToken')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const auth = (authData, isSignUp) => {
  return dispatch => {

    const url = isSignUp ? '/users/signup' : '/users/login'

    axios.post(url, authData)
      .then(response => {
        console.log(response)
        dispatch(authSuccess())
      })
      .catch(error => {
        console.log(error.response)
        dispatch(authFail())
      })

    dispatch(authStart())
  }
}