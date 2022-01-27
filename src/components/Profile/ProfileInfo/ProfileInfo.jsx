import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.wallpaperscraft.ru/image/single/sakura_tsvetet_fonar_138433_300x168.jpg' alt=""/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
        
    )
}

export default ProfileInfo;