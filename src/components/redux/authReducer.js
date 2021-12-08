import { authAPI, securityAPI } from '../../api/API'
import { getUsersProfile, setUsersProfile } from './profileReducer'
import { stopSubmit } from 'redux-form'

const SET_AUTH_USERS_DATA = 'SET_AUTH_USERS_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USERS_DATA: {
      return {
        ...state,
        ...action.data,
      }
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.data,
      }
    }
    default: {
      return state
    }
  }
}

export const setAuthUsersData = (data) => ({
  type: SET_AUTH_USERS_DATA,
  data
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  data: { captchaUrl }
})

export const getAuthUsersData = () => (dispatch) => {
  return authAPI.me()
      .then(response => {
        if (response.data?.resultCode === 0) {
          let { id, login, email } = response.data.data
          dispatch(setAuthUsersData({ id, login, email, isAuth: true }))
          dispatch(getUsersProfile(id))
        }
      })
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data?.resultCode === 0) {
    dispatch(getAuthUsersData())
  } else {
    if(response.data?.resultCode === 10){
      dispatch(getCaptchaUrl())
    }
    dispatch(stopSubmit('login', { _error: 'Email or password not right' }))
  }
}


export const getCaptchaUrl = () => async (dispatch) => {
  debugger
  let response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data?.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
        if (response.data?.resultCode === 0) {
          dispatch(setAuthUsersData({ id: null, login: null, email: null, isAuth: false }))
          dispatch(setUsersProfile(null))
        }
}
export default authReducer