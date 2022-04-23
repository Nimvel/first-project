import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { getDialogsDataSelector, getMessageDataSelector, getNewMessageSelector } from '../../redux/dialogs-selectors';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsData: getDialogsDataSelector(state),
        messageData: getMessageDataSelector(state),
        newMessageText: getNewMessageSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => dispatch(sendMessageActionCreator(newMessageText))
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);