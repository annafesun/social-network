import { addPostActionCreator } from '../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = ({ profile }) => {
  return {
    postData: profile.postData,
    newPostText: profile.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostContainer