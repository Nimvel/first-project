import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo' src="https://i.ibb.co/02J288X/logo-sakura.png" />
            <div className={s.loginBloch}>
                {props.isAuth 
                ? <div>{props.login} <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'} /> }
            </div>
        </header>
    )
}

export default Header;