import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message:'My first post', likesCount: 12, imgURL: 'https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg' },
                {id: 2, message:'My second post', likesCount: 11, imgURL: 'https://avatarko.ru/img/kartinka/20/zhivotnye_igra_sobaka_19261.jpg' },
                {id: 3, message:'My third post', likesCount: 1, imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Senya', imgURL: 'https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg' },
                { id: 2, name: 'Egor', imgURL: 'https://avatarko.ru/img/kartinka/20/zhivotnye_igra_sobaka_19261.jpg' },
                { id: 3, name: 'Mariya', imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' },
                { id: 4, name: 'Katya', imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' }
            ],
            messageData: [
                { id: 1, message: 'Hi', class: 0 },
                { id: 2, message: 'Hello', class: 1 },
                { id: 3, message: 'Yo', class: 0 },
                { id: 4, message: 'Yo', class: 1 }
            ],
            newMessageText: ''
        },
        sidebar: {}
    },

    getStore() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;