import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
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
                        <Link to='/hot'>Hot</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/regular'>Regular</Link>
                    </li>

                </ul>

                <Switch>

                    <Route exact path={['/', '/regular']}>
                        <Regular/>
                    </Route>

                    <Route exact path='/hot'>
                        <Hot/>
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
