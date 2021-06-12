import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
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
  );
}
