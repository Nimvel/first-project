import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className = {linkActive => linkActive.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
            <div>
                <NavLink  to='/dialogs' className = {linkActive => linkActive.isActive ? s.active : s.item}>Messages</NavLink>
                </div>
            <div>
                <NavLink  to='/news' className = {linkActive => linkActive.isActive ? s.active : s.item}>News</NavLink>
                </div>
            <div>
                <NavLink  to='/music' className = {linkActive => linkActive.isActive ? s.active : s.item}>Music</NavLink>
                </div>
            <div>
                <NavLink  to='/settings' className = {linkActive => linkActive.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
        </nav>
    )
}

export default Navbar;