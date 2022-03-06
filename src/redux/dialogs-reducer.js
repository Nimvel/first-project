const sendMessage= 'send-message';
const updateNewMessageText = 'update-new-message-text';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendMessage:
            let newMessage = {
                id: 1,
                message: state.newMessageText,
                class: 0
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case updateNewMessageText:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: sendMessage});
export const updateNewMessageTextActionCreator = (text) => ({type: updateNewMessageText, newMessage: text});

export default dialogsReducer;