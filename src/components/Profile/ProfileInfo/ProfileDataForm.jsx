import React from 'react'
import { reduxForm } from 'redux-form'
import { Checkbox, createdField, Input, Textarea } from '../../Common/FormControls'
import { required } from '../../utilits/Validators/validators'


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return <form onSubmit={handleSubmit}>
    <div>
      <button type='submit'>Save</button>
    </div>
    {error && <div className={styles.formSummaryError}>
      {error}
    </div>}
    <div><b>Full name:</b> {createdField({
      placeholder: 'FullName',
      name: 'fullName',
      validators: [required],
      component: Input
    })}</div>
    <div><b>Looking for a job:</b>
      {/*{profile?.profile?.lookingForAJob ? 'no' : 'yes'}*/}
      {createdField({ placeholder: '', name: 'lookingForAJob', validators: [required], component: Checkbox })}
      {createdField({ placeholder: '', name: 'LookingForAJobDescription', validators: [required], component: Input })}
    </div>
    <div><b>About me:</b>
      {/*{profile?.profile?.aboutMe}*/}
      {createdField({ placeholder: 'AboutMe', name: 'aboutMe', validators: [required], component: Textarea })}
    </div>
    <div><b>Contacts:</b>
      {Object.keys(profile?.profile?.contacts).map(key => {
        return <div key={key}>
          <b>{key}: {createdField({ placeholder: key, name: 'contacts' + key, validators: [required], component: Input })}
          </b>
        </div>
      })}</div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)


export default ProfileDataFormReduxForm