import React, { useRef } from 'react'
import styles from './MyPosts.module.css'
import Post from './Posts'
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/state'


const MyPosts = ({ dispatch, newPostText, postData }) => {
  let newPostElement = useRef()

  let addPost = () => dispatch(addPostActionCreator())

  let onPostChange = () => {
    let text = newPostElement.current.value
    dispatch(updateNewPostActionCreator(text))
  }

  return (
      <div className={styles.name}>
        My posts
        <div>
          <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={newPostText}
          />
          <div>
            <button onClick={addPost}> Add post</button>
            <button className={styles.button}>Remove post</button>
          </div>
        </div>
        <div className={styles.posts}>
          {postData.map(p => <Post message={p.post} id={p.id} like={p.like} />)}
        </div>
      </div>
  )
}

export default MyPosts