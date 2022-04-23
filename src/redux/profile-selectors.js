export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state) => {
    return state.profilePage.status
}

export const getUserIdSelector = (state) => {
    return state.auth.id
}

export const getIsAuthSelector = (state) => {
    return state.auth.isAuth
}
