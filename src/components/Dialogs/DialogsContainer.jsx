import { sendMessageCreator } from '../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../Hoc/withAuthRedirect'

let mapStateToProps = ({ dialogs }) => {
  return {
    dialogsPage: dialogs,
  }
}

let mapStateToDispatch = (dispatch) => {
  return {
    sendMessage: (messageId, newMessageBody) => {
      dispatch(sendMessageCreator(messageId, newMessageBody))
    }
  }
}

export default compose(
    connect(
      mapStateToProps, mapStateToDispatch
    ),
    withAuthRedirect
)(Dialogs)