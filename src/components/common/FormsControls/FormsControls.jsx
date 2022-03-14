import React from 'react';
import s from './FormsControls.module.css';



const FormControl = ({ input, meta, child,...props }) => {
const hasError = meta.touched && meta.error;
    return <div>
    <div className={hasError && s.error}>
        {props.children}
        {hasError && <span>{meta.error}</span>}
    </div>
</div>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}