import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pagesSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.users}>
        <div className={s.countPage}>
            {pages.map(p => {
                if (p === 1 || (p >= props.currentPage - 2 && p <= props.currentPage + 2) || p === pages[pages.length - 1]) {
                    return <span onClick={(e) => { props.onPageChanged(p) }}
                        className={props.currentPage === p ? s.selectedPage : ''} key={p.id}>
                        {p}
                    </span>
                }
                else if (p === props.currentPage - 3 || p === props.currentPage + 3) {
                    return <span>...</span>
                }
                else return null
            })}
        </div>

        {props.users.map(u =>
            <div key={u.id} className={s.user}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} alt='userPhoto' />
                    </NavLink>
                </div>
                <div id={s.buttonF}>{u.followed ?
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unFollow(u.id) }}>unfollow</button> :
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>follow</button>}
                </div>

                <div id={s.userName}>{u.name}</div>
                <div id={s.userCountry}>{'u.location.country'}</div>
                <div id={s.userCity}>{'u.location.city'}</div>
                <div id={s.userStatus}>{'u.status'}</div>
            </div>)
        }
    </div >
}

export default Users;