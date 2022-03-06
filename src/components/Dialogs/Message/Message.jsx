import React from 'react';
import s from './Message.module.css';


const Message = (props) => {

    return (
        <div className={props.class === 0 ? s.friendMessage : s.myMessage}>{props.message}</div>
    )
}

export default Message;