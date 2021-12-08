import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import profilePageReducer from './profileReducer'
import dialogsPageReducer from './dialogsReducer'
import userReducers from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
      profile: profilePageReducer,
      dialogs: dialogsPageReducer,
      usersPage: userReducers,
      auth: authReducer,
      form: formReducer,
      app: appReducer
    }
)
let store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
