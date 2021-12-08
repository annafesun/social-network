import React from 'react'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from './My posts/MyPostsContainer'
import styles from './Profile.module.css'

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  return (
      <div className={styles.Profile}>
        <ProfileInfo
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            isOwner={isOwner}
            saveProfile={saveProfile}
            savePhoto={savePhoto}/>
        <MyPostsContainer />
      </div>
  )
}

export default Profile