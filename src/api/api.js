import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '3c981284-78ef-4efd-bead-7697d20805f4' }
})

export const usersAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(responce => responce.data)
    },
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(responce => responce.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(responce => responce.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(responce => responce.data)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data)
    }
}
