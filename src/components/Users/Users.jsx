import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    return <div className={s.users}>
            {
            props.users.map(u => <div key={u.id}>

            </div>)
            }
        </div> 
}

export default Users;