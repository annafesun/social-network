import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Redirect } from 'react-router'
import News from './components/News/News'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { UsersContainer } from './components/Users/UsersContainer'
import { connect } from 'react-redux'
import { initializeApp } from './components/redux/appReducer'
import { withSuspense } from './components/Hoc/withSuspense'

const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <div>Loading</div>
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <div className='app-wrapper-content'>
            <Route path={'/'} component={() => <Nav />} />
            <Route
                path='/profile/:userId?'
                exact
                render={({ match }) => (
                    <ProfileContainer match={match} />
                )}
            />
            <Route
                path='/dialogs'
                exact
                render={withSuspense(DialogsContainer)}
            />
            <Route
                path='/dialogs/:id'
                exact
                component={({ match }) => (
                    <DialogsContainer
                        messageId={match.params.id}
                    />
                )}
            />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/music' component={() => <div>Music</div>} />
            <Route path='/settings' component={() => <div>Settings</div>} />
            <Redirect to='/profile' />
          </div>
        </div>
    )
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, { initializeApp })(App)
