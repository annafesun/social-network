import React from 'react'
import styles from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = ({ name }) => {
  let path = '/dialogs/' + name

  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  )
}


export default DialogItem