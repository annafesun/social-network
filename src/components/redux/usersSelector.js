import { createSelector } from 'reselect'

export const getUsersSelector = (usersPage) => {
  return usersPage.users
}

export const getUsers = createSelector(getUsersSelector,
    (users) => {
      return users.filter(() => true)
    })

export const getPageSize = (usersPage) => {
  return usersPage.pageSize
}
export const getTotalUsersCount = (usersPage) => {
  return usersPage.totalUsersCount
}
export const getCurrentPage = (usersPage) => {
  return usersPage.currentPage
}
export const getIsFetching = (usersPage) => {
  return usersPage.isFetching
}
export const getFollowingInProgress = (usersPage) => {
  return usersPage.followingInProgress
}
