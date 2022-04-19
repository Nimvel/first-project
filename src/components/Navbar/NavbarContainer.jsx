import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';
import Navbar from './Navbar';

class NavbarContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Navbar {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id
})

export default connect(mapStateToProps, {getAuthUserData})(NavbarContainer)