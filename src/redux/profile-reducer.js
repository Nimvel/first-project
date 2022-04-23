import { profileAPI } from "../api/api";

const addPost = 'add-post';
const SET_USER_PROFILE = 'set-user-profile';
const SET_STATUS = 'set-status';
const DELETE_POST = 'delete-post';

let initialState = {
    postData: [
        { id: 1, message: 'My first post', likesCount: 12, imgURL: 'https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg' },
        { id: 2, message: 'My second post', likesCount: 11, imgURL: 'https://avatarko.ru/img/kartinka/20/zhivotnye_igra_sobaka_19261.jpg' },
        { id: 3, message: 'My third post', likesCount: 1, imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let text = action.newPostText;
            return {
                ...state,
                postData: [...state.postData,
                { id: 4, message: text, likesCount: 0, imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' }],
                newPostText: ''
            };

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        case SET_STATUS:
            return { ...state, status: action.status };

        case DELETE_POST:
            return { ...state, postData: state.postData.filter(p => p.id != action.postId) };

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: addPost, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export default profileReducer;