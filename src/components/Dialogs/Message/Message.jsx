import React  from 'react'
import styles from './../Dialogs.module.css'

const Message = ({ message, friend}) => {
  const color = friend ? 'purple' : 'blue'

  return (
    <div
      className={styles.message}
      style={{
        color: color,
        textAlign: `${friend && 'right'}`
      }}
    >{message}</div>
  )
}

export default Message