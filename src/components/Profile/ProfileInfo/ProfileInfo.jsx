import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src='https://images.wallpaperscraft.ru/image/single/sakura_tsvetet_fonar_138433_300x168.jpg' alt=""/>
            </div> */}
            <div className={s.description}>
                <img className={s.photo} src={props.profile.photos.large}/>
                <div className={s.fullName}>
                {props.profile.fullName}
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.aboutMe}>
                {props.profile.aboutMe}
                </div>
                <div className={s.contacts}>
                {props.profile.contacts.facebook}
                {props.profile.contacts.website}
                {props.profile.contacts.vk}
                {props.profile.contacts.twitter}
                {props.profile.contacts.instagram}
                {props.profile.contacts.youtube}
                {props.profile.contacts.github}
                {props.profile.contacts.mainLink}
                </div>
                <div className={s.lookingForAJob}>
                {props.profile.lookingForAJob}
                {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
        
    )
}

export default ProfileInfo;