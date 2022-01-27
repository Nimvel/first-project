import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo' src="https://i.ibb.co/02J288X/logo-sakura.png" />
        </header>
    )
}

export default Header;