import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo' src="https://i.ibb.co/02J288X/logo-sakura.png" />
            <div className={s.loginBloch}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;