import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 22798;

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

const WithUrlDataContainerComponent = (props) => {
    let match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, { getProfile, getStatus, updateStatus })
)(WithUrlDataContainerComponent);