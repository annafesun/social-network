import React from 'react'
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import store, { sendMessageCreator, updateNewMessageCreator } from '../redux/state'


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
      <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to='path'>{props.name}</NavLink>
      </div>
  )
}

const Message = (props) => {
  return (
      <div className={styles.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map((d) =>
      <DialogItem name={d.name} id={d.id} />
  )

  let messagesElements = state.messages.map((m) =>
      <Message message={m.message} id={m.id} />
  )

  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onChangeMessage = (e) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageCreator(body))
  }

  return (
      <div className={styles.dialogsItem}>
        <div className={styles.dialogs}>
          {dialogsElements}
        </div>
        <div className={styles.messages}>
          {messagesElements}
        </div>
        <div>
          <div>
          <textarea>
              placeholder='Enter your Message'
              value={newMessageBody}
              onChange={onChangeMessage}
          </textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
        </div>
      </div>
  )
}

export default Dialogs