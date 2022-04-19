import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { MaxLengthCreator, MinLengthCreator, Required } from '../../redux/utils/validators/Validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';

const maxLength30 = MaxLengthCreator(30);
const minLength7 = MinLengthCreator(7);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Email' name='email' component={Input} validate={[Required, maxLength30, minLength7]} /></div>
            <div><Field type={'password'} placeholder='Password' name='password' component={Input} validate={[Required, maxLength30, minLength7]} /></div>
            <div><Field type={'checkbox'} name='rememberMe' component={'input'} />remember me</div>
            {props.error ? <div className={s.formError} >{props.error}</div> : ''}
            {/* <div className={s.formError} >{props.error}</div> */}
            <div><button>Login</button></div>
        </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    // if (props.isAuth) {
    //     return <Navigate to={`/profile/${props.userId}`} />
    // }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(LoginPage);