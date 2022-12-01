import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export function Header(){
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link  className='nav-link' to="/users-list">UserList</Link>
                <Link  className='nav-link' to="/user/create">createUser</Link>
                <Link to="#link">Link</Link>
                <Link  className='nav-link' to="/car-list">createUser</Link>
                <Link  className='nav-link' to="/car/create">createUser</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
      }