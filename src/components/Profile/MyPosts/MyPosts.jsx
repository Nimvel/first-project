import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message:'My first post', likesCount: 12},
        {id: 2, message:'My second post', likesCount: 11},
        {id: 3, message:'My third post', likesCount: 1},
    ]

    let postsElements = postData
    .map(p => <Post message={p.message} likes={p.likesCount}/>)

    return (
        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;