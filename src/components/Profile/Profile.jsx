import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <div>
                <MyPostsContainer 
                posts={props.profilePage.postData} 
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
            </div>
        </div>
        
    )
}

export default Profile;