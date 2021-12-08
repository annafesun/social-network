import React from 'react'
import styles from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageCreator } from '../redux/dialogsReducer'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'


const Dialogs = (isAuth) => {
  const dispatch = useDispatch()
  const { id: messageId } = useParams()

  const { dialogs, profile } = useSelector((state) => state)
  const {
    dialogs: dialogsList,
    messages,
    newMessageBody
  } = dialogs

  const onChangeMessage = (e) => {
    let body = e.target.value
    dispatch(updateNewMessageCreator(body))
    // store.dispatch(updateNewMessageCreator(e.target.value))
  }



  return (
      <div className={styles.dialogsItem}>
        <div className={styles.dialogs}>
          {dialogsList.map((d) =>
              <DialogItem key={d.id} name={d.name} id={d.id} />
          )}
        </div>
        <div className={styles.messages}>
          {messageId && messages
              .filter(m => m.id === messageId)
              .map(({ messages }) => messages.map(message => (
                      <Message
                          key={message.id}
                          message={message.message}
                          id={message.id}
                          friend={message.type === 'from'}
                      />
                  ))
              )
          }
        </div>
        <div>
          <textarea
              disabled={!messageId}
              placeholder='Enter your Message'
              value={newMessageBody}
              onChange={onChangeMessage}
          />
          <div>
            <button
                disabled={!messageId || !newMessageBody}
                onClick={() => dispatch(sendMessageCreator(messageId))}
            >Send
            </button>
          </div>
        </div>
      </div>
  )
}

export default Dialogs