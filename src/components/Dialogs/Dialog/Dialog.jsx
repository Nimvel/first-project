import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div>
            <NavLink to={path} className={s.item}>
                <img src={props.imgURL} />
                <div className={s.nick}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default Dialog;