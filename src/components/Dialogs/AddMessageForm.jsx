import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { MaxLengthCreator, MinLengthCreator } from '../../redux/utils/validators/Validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import s from './Dialogs.module.css';

const maxLength30 = MaxLengthCreator(30);
const minLength1 = MinLengthCreator(1);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div> <Field className={s.sendMessage} name='sendNewMessage' placeholder='Enter your message' component={Textarea} validate={[ minLength1, maxLength30 ]} /> </div>
        <div> <button>Send message</button> </div>
    </form>
}

const AddMessageReduxForm = reduxForm({ form: 'dialogs' })(AddMessageForm)

export default AddMessageReduxForm;