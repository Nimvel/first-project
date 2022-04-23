import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import { login } from '../../redux/auth-reducer';
import { MaxLengthCreator, MinLengthCreator, Required } from '../../redux/utils/validators/Validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';

const maxLength30 = MaxLengthCreator(30);
const minLength7 = MinLengthCreator(7);

const LoginForm = ({ handleSubmit, error }) => {
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', Input, [Required, maxLength30, minLength7])}
        {createField('Password', 'password', Input, [Required, maxLength30, minLength7], {type: "password"})}
        {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
        
        {error ? <div className={s.formError} >{error}</div> : ''}
        {/* <div className={s.formError} >{error}</div> */}
        <div><button>Login</button></div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = ({ login, isAuth, userId }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) {
        return <Navigate to={`/profile/${userId}`} />
    }

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

export default connect(mapStateToProps, { login })(LoginPage);