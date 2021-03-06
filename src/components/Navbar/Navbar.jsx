import React from 'react';
import { NavLink } from 'react-router-dom';
// import { propTypes } from 'redux-form';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            {/* <div>
            {props.isAuth
                ? <NavLink to={`/profile/${props.id}`} className={linkActive => linkActive.isActive ? s.active : s.item}>Profile</NavLink>
                : <NavLink to='/login' className={linkActive => linkActive.isActive ? s.active : s.item}>Profile</NavLink>}
            </div> */}
            <div>
            <NavLink to={`/profile/${props.id}`} className={linkActive => linkActive.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={linkActive => linkActive.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={linkActive => linkActive.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={linkActive => linkActive.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={linkActive => linkActive.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/friends' className={linkActive => linkActive.isActive ? s.active : s.item}>Friends</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={linkActive => linkActive.isActive ? s.active : s.item}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;