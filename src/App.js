import React from 'react';
import background from './assets/images/background-image.jpg';
import { Route, Routes } from 'react-router-dom';
import { initializeApp } from './redux/app-reducer';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return <div>
            <img className='background' src={background} />
            <div className='wrapper'>
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/profile/*' element={<ProfileContainer />} />
                        <Route path='/dialogs' element={<DialogsContainer />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/friends' element={<Friends />} />
                        <Route path='/users' element={<UsersContainer />} />
                    </Routes>
                </div>
            </div>
        </div>
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, { initializeApp })(App));
