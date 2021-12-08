import React from 'react'
import styles from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageCreator } from '../redux/dialogsReducer'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = ({ store, messageId }) => {
  const {
    dialogsPage: {
      dialogs,
      messages,
      newMessageBody
    }
  } = store.getState()

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator(messageId))
  }

  const onChangeMessage = (e) => {
    store.dispatch(updateNewMessageCreator(e.target.value))
  }

  return (
      <div className={styles.dialogsItem}>
        <div className={styles.dialogs}>
          {dialogs.map((d) =>
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
                disabled={!messageId}
                onClick={onSendMessageClick}
            >Send
            </button>
          </div>
        </div>
      </div>
  )
}

export default Dialogs