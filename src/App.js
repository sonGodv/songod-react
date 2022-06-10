import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                   
                    <Route path='/profile/:id' element={<ProfileContainer />} />
                    <Route path='/profile/'
                               element={<ProfileContainer/>}/>
                        
                        <Route path='/dialogs'
                               element={<DialogsContainer />}/>
                        <Route path='/users'
                               element={<UsersContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                       
                    </Routes>
                </div>
                {/*<Friends friends={props.sitebar.friends}/>;*/}
            </div>
    )
}

export default App;
