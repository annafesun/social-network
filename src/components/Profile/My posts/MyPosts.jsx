import React  from 'react'
import styles from './MyPosts.module.css'
import Post from './Posts'
import { Field, reduxForm, change, reset } from 'redux-form'
import { maxLenghtCreator, required } from '../../utilits/Validators/validators'
import { Textarea } from '../../Common/FormControls'
import { useDispatch } from 'react-redux'

const MyPosts = ({ addPost, postData }) => {
  const dispatch = useDispatch()

  let onAddPost = (values) => {
    addPost(values.newPostText)
    dispatch(change('profileAddNewPostForm', 'newPostText', '', false))
    dispatch(reset('profileAddNewPostForm'))
  }

  return (
      <div>
        <p className={styles.name}>My posts</p>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={styles.posts}>
          {postData.map(p => <Post key={p.id} message={p.post} id={p.id} like={p.like} />)}
        </div>
      </div>
  )
}

const maxLenght10 = maxLenghtCreator(10)

const AddNewPostForm = ({ handleSubmit }) => {
   return(
       <form onSubmit={handleSubmit} className={styles.formAddPost}>
          <Field
              name={'newPostText'}
              component={Textarea}
              validate={[required, maxLenght10]}
          />
         <div>
           <button className={styles.btnAddPost}>Add post</button>
         </div>
       </form>
   )
}

const AddNewPostFormRedux = reduxForm({form:'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts