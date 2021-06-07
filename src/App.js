import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Error from './components/error-component';
import Hot from './components/hot-component';
import Regular from './components/regular-component';
import UploadMeme from './components/upload-meme-component';


function App() {
    return (
    <div className="App">
        <Router>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <NavLink className='nav-link navbar-item' to="/regular">Regular</NavLink>
                        <NavLink className='nav-link navbar-item' to="/hot">Hot</NavLink>
                    </Nav>

                    <Navbar.Brand className='brand'><h1>Meme Ranking</h1></Navbar.Brand>

                    <Nav className="ml-auto nav-pages-right">
                        <NavLink className='nav-link navbar-item' to="/upload-meme">Upload Meme</NavLink>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
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
