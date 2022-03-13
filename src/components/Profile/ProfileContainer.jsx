import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { usersAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 22798;
        usersAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = (props) => {
    let match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />
}

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);