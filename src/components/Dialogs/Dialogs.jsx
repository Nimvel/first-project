import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                {props.messageElements}
                <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText} placeholder='Enter your message'/>
                <button onClick={props.onSendMessage}>send message</button>
            </div>
        </div>
    )
}

export default Dialogs;