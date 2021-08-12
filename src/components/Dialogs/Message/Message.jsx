import React, {createRef} from "react";
import styles from './../Dialogs.module.css';


const Message = (props) => {

  // let newPostElement = React.createRef()
  //
  // let addPost = () => {
  //   let text = newPostElement.current.value;
  //   alert(text);
  // }
  return (
      <div className={styles.message}>{props.message}</div>
)
}


export default Message;