import { profileAPI, usersAPI } from '../../api/API'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


let initialState = {
  postData: [
    { id: 1, post: 'Hello, how are you', like: '5' },
    { id: 2, post: 'It is my first post', like: '40' }
  ],
  profile: null,
  status: ''
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        postData: [
          ...state.postData,
          { id: state.postData.length + 1, post: action.newPostText, like: 0 }
        ]
      }
    }

    case SET_USERS_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }
    }
    default: {
      return state
    }
  }
}


export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText
})
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
})
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text
})
export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})
export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile
})

export const getUsersProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
      .then(response => {
        dispatch(setUsersProfile(response.data))
      })
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data))
      })
}
export const updateStatus = (status) =>  async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
}
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id
  let response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUsersProfile(userId))
  }
}


export default profilePageReducer