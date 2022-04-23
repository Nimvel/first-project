import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    postData: [
        { id: 1, message: 'My first post', likesCount: 12, imgURL: 'https://cs4.pikabu.ru/post_img/big/2015/03/20/6/1426840578_1215893866.jpeg' },
        { id: 2, message: 'My second post', likesCount: 11, imgURL: 'https://avatarko.ru/img/kartinka/20/zhivotnye_igra_sobaka_19261.jpg' },
        { id: 3, message: 'My third post', likesCount: 1, imgURL: 'https://avatarko.ru/img/avatar/31/zhivotnye_kot_animaciya_30978.gif' },
    ]};

it('new post should be added', () => {
    let action = addPostActionCreator('new post');
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
})

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(2);
})