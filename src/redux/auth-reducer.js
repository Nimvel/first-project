import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'set-user-data';
const TOOGLE_IS_FETCHING = 'toogleIsFetching';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });

export const getAuthUserData = () => (dispatch) => {
        return authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }

export const login = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else {
                let message = data.messages.length > 0 ? data.messages[0] : 'some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }

export const logout = () => (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }

export default authReducer;