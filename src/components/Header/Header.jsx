import React from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import Button from '../shared/Button/Button'
import logo from'../../images/logo.jpg'


const Header = ({ isAuth, login, logout }) => {
  return (
      <header className={styles.header}>
        {/*<img alt='' src='https://cdn.logo.com/hotlink-ok/logo-social.png' />*/}
        <img alt='' src={logo} />
        <div className={styles.loginBlock}>
          {isAuth
              ? <div>{login} - <Button onClick={logout} text={'sign out'} /></div>
              : <NavLink to={'/login'}>
                <Button text={'Login'} />
              </NavLink>}
        </div>
      </header>
  )
}

export default Header