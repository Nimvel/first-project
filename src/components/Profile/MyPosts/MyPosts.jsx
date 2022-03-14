import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { MaxLengthCreator, MinLengthCreator } from '../../../redux/utils/validators/Validators';

const maxLength30 = MaxLengthCreator(30);
const minLength1 = MinLengthCreator(1);

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div> <Field className={s.sendMessage} name='addNewPost' placeholder='Enter your post' 
        component={Textarea} validate={[minLength1, maxLength30]} /> </div>
        <div> <button>Add post</button> </div>
    </form>
}

const AddPostReduxForm = reduxForm({ form: 'addNewPost' })(AddPostForm)


const MyPosts = (props) => {

    let postsElements = props.postData.map(p => <Post message={p.message} key={p.id} likes={p.likesCount} imgURL={p.imgURL} />)

    let addNewPost = (value) => { props.addPost(value.addNewPost) }

    return (
        <div className={s.posts}>
            My posts
            <AddPostReduxForm onSubmit={addNewPost} />
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;