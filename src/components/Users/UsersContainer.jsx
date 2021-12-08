import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import loader from '../../images/preloader.svg'
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount, toggleIsFetching,
  unfollow, toggleFollowingProgress, getUsersThunk
} from '../redux/usersReducer'
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../redux/usersSelector'

class UsersApiComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersThunk()
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunk(pageNumber)
  }

  render() {
    return <>

      {this.props.isFetching && <img src={loader} />}
      {!this.props.isFetching && (
          <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              followingInProgress={this.props.followingInProgress}
              toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
      )}
    </>
  }
}


let mapStateToProps = ({ usersPage }) => {
  return {
    users: getUsers(usersPage),
    pageSize: getPageSize(usersPage),
    totalUsersCount: getTotalUsersCount(usersPage),
    currentPage: getCurrentPage(usersPage),
    isFetching: getIsFetching(usersPage),
    followingInProgress: getFollowingInProgress(usersPage)
  }
}

export const UsersContainer =
    // withAuthRedirect
    (
        connect(mapStateToProps, {
          follow,
          unfollow,
          setUsers,
          setCurrentPage,
          setTotalUsersCount,
          toggleIsFetching,
          toggleFollowingProgress,
          getUsersThunk
        })(UsersApiComponent))
