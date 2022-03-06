import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path='/profile' element={
                        <Profile profilePage={props.state.profilePage} 
                        dispatch={props.dispatch} />
                    } />
                    <Route path='/dialogs' element={
                        <DialogsContainer  store={props.store} 
                        dispatch={props.dispatch} />
                    } />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/friends' element={<Friends />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;