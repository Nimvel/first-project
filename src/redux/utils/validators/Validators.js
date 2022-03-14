export const Required = (value) => {
    return (value) ? undefined : 'Field is required';
}

export const MaxLengthCreator = (maxLength) => (value) => {
    return (value && value.length < maxLength ) ? undefined : `Max length is ${maxLength} symbols`;
}

export const MinLengthCreator = (minLength) => (value) => {
    return (value && value.length >= minLength ) ? undefined : `Min length is ${minLength} symbols`;
}