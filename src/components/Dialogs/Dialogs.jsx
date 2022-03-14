import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import AddMessageReduxForm from './AddMessageForm';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id} imgURL={d.imgURL} />)
    let messageElements = props.messageData.map(m => <Message key={m.id} message={m.message} class={m.class} />)

    let sendNewMessage = (value) => { props.sendMessage(value.sendNewMessage) }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
        </div>
        <div>
            <AddMessageReduxForm onSubmit={sendNewMessage} />
        </div>
    </div>
}

export default Dialogs;