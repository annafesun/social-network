import React from 'react'
import classes from './Nav.module.css'
import Friends from './Friends'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink
              to='/profile'
              activeStyle={{
                fontWeight: 'bold',
                color: 'black'
              }}
          >
            Profile
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
              to='/dialogs'
              activeStyle={{
                fontWeight: 'bold',
                color: 'black'
              }}
          >
            Messages
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
              to='/news'
              activeStyle={{
                fontWeight: 'bold',
                color: 'black'
              }}
          >News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
              to='/music'
              activeStyle={{
                fontWeight: 'bold',
                color: 'black'
              }}
          >Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
              to='/settings'
              activeStyle={{
                fontWeight: 'bold',
                color: 'black'
              }}
          >Settings</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
              to='/users'
              activeStyle={{
                fontWeight: 'bold',
                color: 'black'
              }}
          >Users</NavLink>
        </div>
        <div>
          <Friends />
        </div>
      </nav>
  )
}

export default Nav