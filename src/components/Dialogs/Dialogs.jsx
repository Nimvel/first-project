import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Senya' },
        { id: 2, name: 'Egor' },
        { id: 3, name: 'Mariya' },
        { id: 4, name: 'Katya' }
    ]

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' }
    ]

    let dialogsElements = dialogsData
        .map(d => <Dialog name={d.name} id={d.id} />)

    let messageElements = messageData
        .map(m => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;