import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { MaxLengthCreator, MinLengthCreator, Required } from '../../redux/utils/validators/Validators';
import { Input } from '../common/FormsControls/FormsControls';

const maxLength30 = MaxLengthCreator(30);
const minLength1 = MinLengthCreator(1);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Login' name='login' component={Input} validate={[Required, maxLength30, minLength1]} /></div>
            <div><Field placeholder='Password' name='password' component={Input} validate={[Required, maxLength30, minLength1]} /></div>
            <div><Field type={'checkbox'} name='rememberMe' component={'input'} />remember me</div>
            <div><button>Login</button></div>
        </form>
}

const onSubmit = (FormData) => {
    console.log(FormData)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default LoginPage;