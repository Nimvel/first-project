import React from 'react';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ( {followingInProgress, unFollow, follow, users, ...props} ) => {
    return <div className={s.users}>
        <Paginator totalCount={props.totalCount} pagesSize={props.pagesSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />

        {users.map(u =>
            <User user={u} key={u.id} followingInProgress={followingInProgress} unFollow={unFollow} follow={follow} />)}
    </div >
}

export default Users;