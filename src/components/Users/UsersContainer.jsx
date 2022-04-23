import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setCurrentPage, toogleIsFollowingProgress, getUsers, follow, unFollow } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPagesSize, getTotalCount, getUsersSelector } from '../../redux/users-selectors';

import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pagesSize } = this.props;
        this.props.getUsers(currentPage, pagesSize);
    }

    onPageChanged = (pageNumber) => {
        const { pagesSize } = this.props;
        this.props.getUsers(pageNumber, pagesSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : ''}
            <Users totalCount={this.props.totalCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unFollow={this.props.unFollow} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pagesSize: getPagesSize(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        { setCurrentPage, toogleIsFollowingProgress, getUsers, follow, unFollow })
)(UsersContainer);

