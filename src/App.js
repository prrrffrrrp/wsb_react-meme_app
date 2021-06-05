import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import { useState } from "react";
import './App.css';

import Error from './components/error-component';
import Hot from './components/hot-component';
import Regular from './components/regular-component';


function App() {
    return (
    <div className="App">
        <Router>
                <ul className="nav">

                    <li className="nav-item">
                        <NavLink to='/hot'>Hot</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/regular'>Regular</NavLink>
                    </li>

                </ul>

                <Switch>

                    <Route exact path={['/', '/regular']}>
                        <Regular />
                    </Route>

                    <Route exact path='/hot'>
                        <Hot />
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
