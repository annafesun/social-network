import React from 'react'
import styles from './index.module.scss'

const Button = ({ text = 'button', type = 'button', onClick }) => {
  return (
      <button
          className={styles.Button}
          type={type}
          onClick={onClick || console.log(`Button with ${text} has been clicked`)}
      >
        {text}
      </button>
  )
}

export default Button