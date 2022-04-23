import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src='https://images.wallpaperscraft.ru/image/single/sakura_tsvetet_fonar_138433_300x168.jpg' alt=""/>
            </div> */}
            <div className={s.description}>
                <img className={s.photo} src={profile.photos.large} />
                <div className={s.fullName}>
                    {profile.fullName}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div className={s.aboutMe}>
                    {profile.aboutMe}
                </div>
                <div className={s.contacts}>
                    {profile.contacts.facebook}
                    {profile.contacts.website}
                    {profile.contacts.vk}
                    {profile.contacts.twitter}
                    {profile.contacts.instagram}
                    {profile.contacts.youtube}
                    {profile.contacts.github}
                    {profile.contacts.mainLink}
                </div>
                <div className={s.lookingForAJob}>
                    {profile.lookingForAJob}
                    {profile.lookingForAJobDescription}
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;