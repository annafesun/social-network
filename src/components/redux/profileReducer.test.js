import profileReducer, { addPostActionCreator, deletePost } from './profileReducer'


test('new post should be added', () => {
  let action = addPostActionCreator('yo')
  let state = {
    postData: [
      { id: 1, post: 'Hello, how are you', like: '5' },
      { id: 2, post: 'It is my first post', like: '40' }
    ]
  }
 let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(3)
  // expect(linkElement).toBeInTheDocument();
});


test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1)
  let newState = profileReducer({}, action)
  expect(newState.postData.length).toBe(1)
  // expect(linkElement).toBeInTheDocument();
});
