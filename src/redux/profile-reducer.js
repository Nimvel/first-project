const addPost = 'add-post';
const updateNewPostText = 'update-new-post-text';

let initialState = {
    postData: [
        { id: 1, message: 'My first post', likesCount: 12, imgURL: 'https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg' },
        { id: 2, message: 'My second post', likesCount: 11, imgURL: 'https://avatarko.ru/img/kartinka/20/zhivotnye_igra_sobaka_19261.jpg' },
        { id: 3, message: 'My third post', likesCount: 1, imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let text = state.newPostText;
            return {
                ...state,
                postData: [...state.postData,
                { id: 4, message: text, likesCount: 0, imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' }],
                newPostText: ''
            };

        case updateNewPostText:
            return { ...state, newPostText: action.newText };

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: addPost });
export const updateNewPostTextActionCreator = (text) => ({ type: updateNewPostText, newText: text });

export default profileReducer;