const SEND_MESSAGE = 'SEND_MESSAGE'

export const sendMessageCreator = (messageId, newMessageBody) => ({
  type: SEND_MESSAGE,
  messageId,
  newMessageBody
})

let initialState = {
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
  ]
}

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      const msg = {
        id: Math.random(),
        type: 'to',
        message: body
      }

      return {
        ...state,
        messages: state.messages
        .map(message => {
          if (message.id === action.messageId) {
            return {
              ...message,
              messages: [
                ...message.messages,
                msg
              ]
            }
          }
          return message
        })
      }
    }
    default: {
      return state
    }
  }
}


export default dialogsPageReducer