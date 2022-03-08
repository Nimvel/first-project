import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.postData.map(p => <Post message={p.message} key={p.id} likes={p.likesCount} imgURL={p.imgURL}/>)

    let newPost = React.createRef();

    let addPostClick = () => {
        props.addPost();
    }

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
                <button onClick={addPostClick}>Add post</button>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;