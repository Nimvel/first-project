import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <div>
                <MyPosts />
            </div>
        </div>
        
    )
}

export default Profile;