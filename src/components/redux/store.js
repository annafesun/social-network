import dialogsPageReducer from './dialogsReducer'
import profilePageReducer from './profileReducer'


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, post: 'Hello, how are you', like: '5' },
        { id: 2, post: 'It is my first post', like: '40' }
      ],
      newPostText: 'Type here'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Anya' },
        { id: 2, name: 'Vitalii' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Sofiya' },
        { id: 5, name: 'Sasha' },
      ],
      messages: [
        { id: 'Anya', messages: [] },
        {
          id: 'Vitalii', messages: [
            { id: 1, type: 'to', message: 'Hello' },
            { id: 2, type: 'to', message: 'How are you?' },
            { id: 3, type: 'from', message: 'Hi' },
            { id: 4, type: 'from', message: 'I\'m ok' },
          ]
        },
        {
          id: 'Sasha', messages: [
            { id: 1, type: 'to', message: 'Hello Sasha' },
            { id: 2, type: 'to', message: 'How are you?' },
            { id: 3, type: 'from', message: 'Hi' },
            { id: 4, type: 'from', message: 'I\'m ok' },
          ]
        },
        { id: 'Dima', messages: [] },
        { id: 'Sofiya', messages: [] },
        { id: 'Sasha', messages: [] },
      ],
      newMessageBody: ''
    },
  },
  getState() {
    return this._state
  },
  _rerenderEntireTree() {
    console.log(this._state)
  },
  subscribe(observe) {
    this._rerenderEntireTree = observe
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
    this._rerenderEntireTree(this._state)
  }
}

export default store
window.store = store
