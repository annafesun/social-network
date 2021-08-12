const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'


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
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Hey' },
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
    if (action.type === ADD_POST) {
      this._state.profilePage.postData.push({
        id: 5,
        post: this._state.profilePage.newPostText,
        like: 0
      })
      this._state.profilePage.newPostText = ''
      this._rerenderEntireTree(this._state)
    } else if (action.type === UPDATE_NEW_POST) {
      this._state.profilePage.newPostText = action.newText
      this._rerenderEntireTree(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessageBody = action.body
      this._rerenderEntireTree(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messages.push({ id: 6, message: body })
      this._rerenderEntireTree(this._state)
    }
  }
}


export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text
})


export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})

export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE,
  body: body
})


export default store;
window.store = store
