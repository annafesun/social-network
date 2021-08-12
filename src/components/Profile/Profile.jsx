import React from 'react'
import MyPosts from './My posts'
import ProfileInfo from './ProfileInfo'

const Profile = ({ profilePage: { newPostText, postData }, dispatch }) => {

  return (
      <>
        <div>
          <ProfileInfo />
        </div>
        <MyPosts
            postData={postData}
            newPostText={newPostText}
            dispatch={dispatch}
        />
      </>
  )
}

export default Profile