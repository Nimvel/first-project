import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
})

export const getPagesSize = (state) => {
    return state.usersPage.pagesSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}