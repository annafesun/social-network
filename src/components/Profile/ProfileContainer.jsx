import React from 'react'
import Profile from './Profile'
import { getStatus, getUsersProfile, updateStatus, savePhoto, saveProfile} from '../redux/profileReducer'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../Hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let { userId } = this.props?.match?.params

    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUsersProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
        <Profile
            {...this.props}
            isOwner={!this.props.match.params.usersId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
            editMode={this.props.editMode}
            setEditMode={this.props.setEditMode}
        />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    editMode: state.profile.editMode,
  }
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile }),
)(ProfileContainer)

