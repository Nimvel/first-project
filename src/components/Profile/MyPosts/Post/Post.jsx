import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg" alt="avatar" />
            {props.message}
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}

export default Post;