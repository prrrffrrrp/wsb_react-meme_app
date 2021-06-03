import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import { useState } from "react";
import './App.css';

import Error from './components/error-component';
import Header from './components/header-component';
import Hot from './components/hot-component';
import Regular from './components/regular-component';
import UploadMeme from './components/upload-meme-component';


function App() {
    return (
    <div className="App">
        <Header/>
        <Router>
                <ul className="nav">

                    <li className="nav-item">
                        <NavLink to='/hot'>Hot</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/regular'>Regular</NavLink>
                    </li>

                    <li className="nav-item nav-upload">
                        <NavLink to='/upload-meme'>Upload Meme</NavLink>
                    </li>

                </ul>

                <Switch>

                    <Route exact path={['/', '/regular']}>
                        <Regular />
                    </Route>

                    <Route exact path='/hot'>
                        <Hot />
                    </Route>

                    <Route exact path='/upload-meme'>
                        <UploadMeme />
                    </Route>

                    <Route exact path='*'>
                        <Error/>
                    </Route>

                </Switch>

            </Router>
    </div>
  );
}

export default App;
