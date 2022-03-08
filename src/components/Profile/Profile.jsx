import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <div>
                <MyPostsContainer />
            </div>
        </div>
        
    )
}

export default Profile;