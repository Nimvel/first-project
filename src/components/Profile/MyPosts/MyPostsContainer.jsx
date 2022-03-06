import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import Post from './Post/Post';

const MyPostsContainer = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} imgURL={p.imgURL}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsElements={postsElements}/>
    )
}

export default MyPostsContainer;