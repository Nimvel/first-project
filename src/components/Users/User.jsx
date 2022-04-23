import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let Users = ({user, followingInProgress, unFollow, follow}) => {
    return <div className={s.user}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt='userPhoto' />
                    </NavLink>
                </div>
                <div id={s.buttonF}>{user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unFollow(user.id) }}>unfollow</button> :
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>follow</button>}
                </div>

                <div id={s.userName}>{user.name}</div>
                <div id={s.userCountry}>{'user.location.country'}</div>
                <div id={s.userCity}>{'user.location.city'}</div>
                <div id={s.userStatus}>{'user.status'}</div>
            </div>
}

export default Users;