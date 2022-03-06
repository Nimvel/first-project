import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let newPost = React.createRef();

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}  placeholder='Enter your post'/>
                </div>
                <button onClick={props.addPost}>Add post</button>
            </div>
            <div className={s.post}>
                {props.postsElements}
            </div>
        </div>
    )
}

export default MyPosts;