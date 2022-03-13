import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, toogleIsFetching, setTotalUsersCount, setUsers, unfollow, toogleIsFollowingProgress } from '../../redux/users-reducer';
import Preloader from '../../common/Preloader/Preloader';
import Users from './Users';
import { usersAPI } from '../../api/api.js';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pagesSize)
            .then(data => {

                this.props.toogleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pagesSize)
            .then(data => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : ''}
            <Users totalCount={this.props.totalCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toogleIsFollowingProgress={this.props.toogleIsFollowingProgress} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching, toogleIsFollowingProgress })(UsersContainer);

