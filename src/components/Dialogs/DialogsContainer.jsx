import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <Dialog name={d.name} id={d.id} imgURL={d.imgURL}/>)
    let messageElements = state.messageData.map(m => <Message message={m.message} class={m.class}/>)

    let onSendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange} 
        onSendMessage={onSendMessage} 
        state={state}
        dialogsElements={dialogsElements} 
        messageElements={messageElements}/>
    )
}

export default DialogsContainer;