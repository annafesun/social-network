import { usersAPI } from '../../api/API'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false
}


const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.usersId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    }
    case SET_USERS: {
      return {
        ...state, users: [...action.users]
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state, totalUsersCount: action.count
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
      }
    }
    default: {
      return state
    }
  }
}

export const followSuccess = (usersId) => ({
  type: FOLLOW,
  usersId
})
export const unfollowSuccess = (usersId) => ({
  type: UNFOLLOW,
  usersId
})
export const setUsers = (users) => ({
  type: SET_USERS,
  users
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
})
export const toggleFollowingProgress = (isFetching) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress: isFetching
})


export const getUsersThunk = (currentPage = 1) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))

  try {
    const data = await usersAPI.getUsers(currentPage, 5)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
  } catch (e) {
    console.log('Error in thunk - getUsersThunk')
  }
}


export const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true))
  usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false))
      })
}

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true))
  usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false))
      })
}


export default usersReducers