const follow = 'follow';
const unfollow = 'unfollow';
const setUsers = 'setUsers';

let initialState = {
    users: [
    //     { id: 1, name: 'Senya', follow: true, location: {city: 'Riga', country: 'Lithuania'}, status: 'My first status',  },
    //     { id: 2, name: 'Egor', follow: false, location: {city: 'Oslo', country: 'Norway'}, status: 'My second status',  },
    //     { id: 3, name: 'Anastasiya', follow: true, location: {city: 'Edmonton', country: 'Canada'}, status: 'My third status',  },
    //     { id: 4, name: 'Maria', follow: false, location: {city: 'Minsk', country: 'Belarus'}, status: 'My 4th status',  },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                    ...state, 
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, follow: true};
                        }
                        return u;
                    })
            }
        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        case setUsers:
            return {
                ...state,
                users: [ ...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAcionCreator = (userId) => ({ type: follow, userId });
export const unfollowAcionCreator = (userId) => ({ type: unfollow, userId });
export const setUsersAcionCreator = (users) => ({ type: setUsers, users });

export default usersReducer;