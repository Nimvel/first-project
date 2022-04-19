import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            if (this.props.isAuth) {
                userId = this.props.userId
            }
        } 

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.getProfile(this.props.match.params.userId);
        }
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = (props) => {
    let match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getProfile, getStatus, updateStatus })
)(WithUrlDataContainerComponent);