export const getDialogsDataSelector = (state) => {
    return state.dialogsPage.dialogsData
}

export const getMessageDataSelector = (state) => {
    return state.dialogsPage.messageData
}

export const getNewMessageSelector = (state) => {
    return state.dialogsPage.newMessageText
}