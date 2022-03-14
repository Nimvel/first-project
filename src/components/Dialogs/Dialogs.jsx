import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <Dialog name={d.name} key={d.id} id={d.id} imgURL={d.imgURL}/>)
    let messageElements = props.messageData.map(m => <Message message={m.message} key={m.id} class={m.class}/>)

    let newMessage = React.createRef();

    let onSendMessageClick = () => {
        props.onSendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    // if (!props.isAuth) { return <Navigate to={'/login'} /> }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText} placeholder='Enter your message'/>
                <button onClick={onSendMessageClick}>send message</button>
            </div>
        </div>
    )
}

export default Dialogs;