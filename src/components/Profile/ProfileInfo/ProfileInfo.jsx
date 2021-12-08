import React, { useState } from 'react'
import styles from './ProfileInfo.module.css'
import preloader from '../../../images/preloader.svg'
import avatar from '../../../images/avatarGirls.png'
import ProfileDataForm from './ProfileDataForm'
import ProfileStatus from '../ProfileStatus/ProfileStatus'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false)

  if (!profile?.profile) {
    return <img src={preloader} />
  }

  const onMainChangePhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(()=>{
      setEditMode(false)
    })
  }


  return (
      <div className={styles.ProfileInfo}>
        <div>
          <img className={styles.imageUsers} src={profile?.profile?.photos?.small || avatar} />
          {isOwner && <input type={'file'} onChange={onMainChangePhoto}  className={styles.fileForAvatar}/>}

          {editMode
              ? <ProfileDataForm initialValues={profile?.profile} profile={profile} onSubmit={onSubmit} />
              : <ProfileData
                  goToEditMode={() => {
                    setEditMode(true)
                  }} profile={profile} isOwner={isOwner}
              />}
        </div>
        <div className={styles.profileBlock}>
          <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
      </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div>
      <button onClick={goToEditMode} className={styles.edit}>Edit</button>
    </div>}
    <div><b>Full name:</b> {profile?.profile?.fullName}</div>
    <div><b>Looking for a job:</b> {profile?.profile?.lookingForAJob ? 'no' : 'yes'}</div>
    <div><b>About me:</b> {profile?.profile?.aboutMe}</div>
    <div><b>Contacts:</b> {Object.keys(profile?.profile?.contacts).map(key => {
      return <Contact key={key} title={key} value={profile?.profile?.contacts[key]} />
    })}</div>
  </div>
}


const Contact = ({ title, value }) => {
  return <div className={styles.contacts}><b>{title}:</b>{value}</div>
}

export default ProfileInfo