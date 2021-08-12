import React from 'react';
import classes from  './Nav.module.css'
import Friends from "./Friends";
import ProfileInfo from "../Profile/ProfileInfo";




const Nav = () => {

  return ( <nav className= {classes.nav} >
        <div className={classes.item}>
          <a href='/profile'>Profile</a>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <a href='/dialogs'>Messages</a>
        </div>
        <div className={classes.item}>
          <a href='/news'>News</a>
        </div>
        <div className={classes.item}>
          <a href='/music'>Music</a>
        </div>
        <div className={classes.item}>
          <a href='/settings'>Settings</a>
        </div>
        <div>
          <Friends />
        </div>
      </nav>
  );

  
};

export default Nav;