import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Header from './components/Header'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import News from './components/News/News'
import Friends from './components/Nav/Friends'

function App({ state: { dialogsPage, profilePage }, dispatch, store }) {

  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Router>
            <Route
                path='/dialogs'
                // exact
                render={() => (
                    <Dialogs
                        store={store}
                        dialogs={dialogsPage.dialogs}
                        messages={dialogsPage.messages}
                    />
                )}
            />
            <Route
                path='/profile'
                exact
                render={() => (
                    <Profile
                        profilePage={profilePage}
                        dispatch={dispatch}
                    />
                )}
            />
            <Route path='/news' render={() => <News />} />
            {/*<Route path='/music' component={Profile} />*/}
            {/*<Route path='/settings' component={Profile} />*/}
          </Router>
        </div>
      </div>
  )
}

export default App
