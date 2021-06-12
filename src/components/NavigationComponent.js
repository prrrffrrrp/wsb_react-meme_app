import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto nav-container">
          <NavLink className="nav-link navbar-item" to="/regular">regular</NavLink>
          <NavLink className="nav-link navbar-item" to="/hot">hot</NavLink>
        </Nav>

        <NavLink className="navbar-brand" to="/home"><h1>memes_wtf</h1></NavLink>

        <Nav className="ml-auto nav-pages-right">
          <NavLink className="nav-link navbar-item" to="/upload-meme">upload meme</NavLink>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  );
}
