import {Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";


const Header = () => {
    return (

        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as ={Link} to="/">My App</Navbar.Brand>
          <Nav className="m1-auto">
            <Nav.Link as ={Link} to="/" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link as ={Link} to="/user" className="nav-link">Add User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};
export default Header;