import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import Error from './error.component'
import Hot from './hot.component';
import Regular from './regular.component';

export default function Routing() {
    return <Router>
                <ul class="nav">

                    <li class="nav-item">
                        <Link to='/hot'>Hot</Link>
                    </li>

                    <li class="nav-item">
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
}
