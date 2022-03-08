import { connect } from 'react-redux';
import { followAcionCreator, setUsersAcionCreator, unfollowAcionCreator } from '../../redux/users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAcionCreator(userId)),
        unfollow: (userId) => dispatch(unfollowAcionCreator(userId)),
        setUsers: (users) => dispatch(setUsersAcionCreator(users))
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;