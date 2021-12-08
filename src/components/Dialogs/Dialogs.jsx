import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../Common/FormControls'
import { maxLenghtCreator, required } from '../utilits/Validators/validators'
import Button from '../shared/Button/Button'

const maxLength50 = maxLenghtCreator(50)

const Dialogs = ({ dialogsPage, sendMessage, messageId }) => {
  const {
    dialogs,
    messages,
  } = dialogsPage

  const addNewMessage = (values) => {
    sendMessage(messageId, values.newMessageBody)
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
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
  )
}

const AddMessageForm = ({ handleSubmit }) => {
  return (
      <form onSubmit={handleSubmit}>
        <Field
            component={Textarea}
            validate={[required, maxLength50]}
            placeholder='Enter your Message'
            name={'newMessageBody'}
        />
        <Button text={'SEND'} type={'submit'}/>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs