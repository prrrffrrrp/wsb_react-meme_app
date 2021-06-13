import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <div>
      <Navbar className="py-0" bg="light" expand="lg" sticky="top">
        <NavLink className="navbar-brand mr-auto" to="/home"><h1>memes_wtf</h1></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-container py-0">
            <NavLink className="nav-link navbar-item py-0" to="/regular">regular</NavLink>
            <NavLink className="nav-link navbar-item py-0" to="/hot">hot</NavLink>
            <NavLink className="nav-link navbar-item py-0" to="/upload-meme">upload_meme</NavLink>
          </Nav>

        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}
