import {
  BrowserRouter as Router, NavLink, Route, Switch,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Error from './components/ErrorComponent';
import MemeRouter from './components/MemeRouterComponent';
import { MEME_TYPE } from './ProjectEnums';
import UploadMeme from './components/UploadMemeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
              <NavLink className="nav-link navbar-item" to="/regular">regular</NavLink>
              <NavLink className="nav-link navbar-item" to="/hot">hot</NavLink>
            </Nav>

            <Navbar.Brand className="brand"><h1>meme ranking</h1></Navbar.Brand>

            <Nav className="ml-auto nav-pages-right">
              <NavLink className="nav-link navbar-item" to="/upload-meme">upload meme</NavLink>
            </Nav>

          </Navbar.Collapse>

        </Navbar>
        <Switch>
          <Route exact path={['/', '/regular']}>
            <MemeRouter route={MEME_TYPE.REGULAR} />
          </Route>

          <Route exact path="/hot">
            <MemeRouter route={MEME_TYPE.HOT} />
          </Route>

          <Route exact path="/upload-meme">
            <UploadMeme />
          </Route>

          <Route exact path="*">
            <Error />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
